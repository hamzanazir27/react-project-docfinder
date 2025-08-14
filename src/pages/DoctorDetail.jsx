import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadDoctorsFromStorage } from "../store/doctorSlice";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctors: registeredDoctors, loading } = useSelector((state) => state.doctors);
  
  const [doctor, setDoctor] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);

  // Load doctors from local storage on component mount
  useEffect(() => {
    dispatch(loadDoctorsFromStorage());
  }, [dispatch]);

  // Find doctor by ID (combine hardcoded and registered doctors)
  useEffect(() => {
    const hardcodedDoctors = [
      {
        id: 1,
        name: "Dr. Aino Virtanen",
        specialty: "Cardiologist",
        city: "Helsinki",
        gender: "Female",
        experience: "10+ years",
        rating: 4.8,
        reviews: 142,
        description: "Experienced cardiologist specializing in heart disease prevention and treatment with modern diagnostic techniques.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        consultationFee: "$150",
        availableHours: "Mon-Fri: 9:00 AM - 5:00 PM",
        languages: "Finnish, English, Swedish",
        achievements: "Board Certified Cardiologist, 15+ years experience",
        services: "Heart disease prevention, Treatment, Consultation",
      },
      {
        id: 2,
        name: "Dr. Mikael Lindberg",
        specialty: "Pediatrician",
        city: "Tampere",
        gender: "Male",
        experience: "10+ years",
        rating: 4.9,
        reviews: 98,
        description: "Compassionate pediatrician with 15 years of experience in child healthcare and developmental medicine.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
        consultationFee: "$120",
        availableHours: "Mon-Sat: 8:00 AM - 6:00 PM",
        languages: "Finnish, English",
        achievements: "Pediatric Board Certified, Child Development Specialist",
        services: "Child healthcare, Vaccination, Development monitoring",
      },
      {
        id: 3,
        name: "Dr. Elina Korhonen",
        specialty: "Dermatologist",
        city: "Turku",
        gender: "Female",
        experience: "5-10 years",
        rating: 4.7,
        reviews: 76,
        description: "Skin specialist focusing on both medical and cosmetic dermatology with advanced treatment methods.",
        image: "https://images.unsplash.com/photo-1594824204356-bb9e0e30d7eb?w=150&h=150&fit=crop&crop=face",
        consultationFee: "$180",
        availableHours: "Mon-Fri: 10:00 AM - 6:00 PM",
        languages: "Finnish, English, German",
        achievements: "Dermatology Specialist, Cosmetic Dermatology Certified",
        services: "Skin treatment, Cosmetic procedures, Consultation",
      },
    ];

    // Transform registered doctors
    const transformedRegisteredDoctors = registeredDoctors.map(doc => ({
      id: doc.id,
      name: `Dr. ${doc.personalInfo.firstName} ${doc.personalInfo.lastName}`,
      specialty: doc.professionalInfo.specialty,
      city: doc.personalInfo.city,
      gender: doc.personalInfo.gender,
      experience: doc.professionalInfo.experience,
      rating: doc.rating || 0,
      reviews: doc.reviews || 0,
      description: doc.additionalInfo.description || "Newly registered doctor. Profile details coming soon.",
      image: doc.personalInfo.profileImage || "https://via.placeholder.com/150",
      consultationFee: doc.professionalInfo.consultationFee || "$100",
      availableHours: doc.professionalInfo.availableHours || "Contact for availability",
      languages: doc.professionalInfo.languages || "Finnish, English",
      achievements: doc.additionalInfo.achievements || "Newly registered",
      services: doc.additionalInfo.services || "General consultation",
      isRegistered: true,
      status: doc.status,
      registrationDate: doc.registrationDate,
    }));

    const allDoctors = [...hardcodedDoctors, ...transformedRegisteredDoctors];
    const foundDoctor = allDoctors.find(d => d.id === parseInt(id));
    
    if (foundDoctor) {
      setDoctor(foundDoctor);
      // Load comments from localStorage
      const savedComments = localStorage.getItem(`doctor_comments_${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id, registeredDoctors]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    const comment = {
      id: Date.now(),
      userName: userName.trim(),
      comment: newComment.trim(),
      rating: rating,
      date: new Date().toISOString(),
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`doctor_comments_${id}`, JSON.stringify(updatedComments));
    
    // Clear form
    setNewComment("");
    setUserName("");
    setRating(5);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            fill={star <= rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-orange-600">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading doctor details...
          </div>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <button
            onClick={() => navigate("/finddoctor")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Find Doctor
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">HealthFinder</div>
            <button
              onClick={() => navigate("/finddoctor")}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Back to Find Doctor
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Doctor Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-48 h-48 rounded-full object-cover ring-4 ring-orange-200"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{doctor.name}</h1>
                {doctor.isRegistered && (
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
              
              <p className="text-2xl text-orange-600 font-semibold mb-2">{doctor.specialty}</p>
              
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center">
                  {renderStars(doctor.rating)}
                  <span className="ml-2 text-gray-600">({doctor.reviews} reviews)</span>
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{doctor.experience} experience</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{doctor.city}</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{doctor.description}</p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation Fee</h3>
                  <p className="text-orange-600 font-bold">{doctor.consultationFee}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Available Hours</h3>
                  <p className="text-gray-700">{doctor.availableHours}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                  <p className="text-gray-700">{doctor.languages}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Gender</h3>
                  <p className="text-gray-700">{doctor.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-700">{doctor.services}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-gray-700">{doctor.achievements}</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews & Comments</h2>
          
          {/* Add Comment Form */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={star <= rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`w-6 h-6 ${
                            star <= rating ? "text-yellow-400" : "text-gray-300"
                          } hover:text-yellow-400 transition-colors`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Share your experience with this doctor..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this doctor!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold text-sm">
                          {comment.userName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{comment.userName}</h4>
                        <div className="flex items-center gap-2">
                          {renderStars(comment.rating)}
                          <span className="text-sm text-gray-500">
                            {new Date(comment.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">{comment.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
