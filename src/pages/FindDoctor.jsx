import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadDoctorsFromStorage } from "../store/doctorSlice";

const FindDoctor = () => {
  const dispatch = useDispatch();
  const { doctors: registeredDoctors, loading } = useSelector(
    (state) => state.doctors
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    city: "All Cities",
    specialty: "All Specialties",
    gender: "All Genders",
    experience: "Any Experience",
    rating: "Any Rating",
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Load doctors from local storage on component mount
  useEffect(() => {
    dispatch(loadDoctorsFromStorage());
  }, [dispatch]);

  // Combine hardcoded doctors with registered doctors
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
      description:
        "Experienced cardiologist specializing in heart disease prevention and treatment with modern diagnostic techniques.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
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
      description:
        "Compassionate pediatrician with 15 years of experience in child healthcare and developmental medicine.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
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
      description:
        "Skin specialist focusing on both medical and cosmetic dermatology with advanced treatment methods.",
      image:
        "https://images.unsplash.com/photo-1594824204356-bb9e0e30d7eb?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$180",
      availableHours: "Mon-Fri: 10:00 AM - 6:00 PM",
      languages: "Finnish, English, German",
      achievements: "Dermatology Specialist, Cosmetic Dermatology Certified",
      services: "Skin treatment, Cosmetic procedures, Consultation",
    },
    {
      id: 4,
      name: "Dr. Jukka Mäkinen",
      specialty: "Orthopedist",
      city: "Oulu",
      gender: "Male",
      experience: "10+ years",
      rating: 4.6,
      reviews: 134,
      description:
        "Sports medicine and orthopedic surgery specialist with expertise in modern rehabilitation techniques.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$200",
      availableHours: "Mon-Fri: 8:00 AM - 4:00 PM",
      languages: "Finnish, English",
      achievements: "Orthopedic Surgery Specialist, Sports Medicine Certified",
      services: "Orthopedic surgery, Sports injury treatment, Rehabilitation",
    },
    {
      id: 5,
      name: "Dr. Sofia Hakkarainen",
      specialty: "Neurologist",
      city: "Espoo",
      gender: "Female",
      experience: "5-10 years",
      rating: 4.9,
      reviews: 89,
      description:
        "Expert in neurological disorders with focus on migraine and epilepsy treatment using latest therapies.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$160",
      availableHours: "Mon-Fri: 9:00 AM - 5:00 PM",
      languages: "Finnish, English, Russian",
      achievements: "Neurology Specialist, Epilepsy Treatment Expert",
      services: "Neurological diagnosis, Migraine treatment, Epilepsy care",
    },
    {
      id: 6,
      name: "Dr. Antti Nieminen",
      specialty: "Psychiatrist",
      city: "Vantaa",
      gender: "Male",
      experience: "5-10 years",
      rating: 4.5,
      reviews: 67,
      description:
        "Mental health specialist providing comprehensive therapy and psychiatric care with personalized approaches.",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$140",
      availableHours: "Mon-Fri: 10:00 AM - 6:00 PM",
      languages: "Finnish, English",
      achievements:
        "Psychiatry Board Certified, Cognitive Behavioral Therapy Specialist",
      services:
        "Mental health assessment, Therapy sessions, Psychiatric consultation",
    },
    {
      id: 7,
      name: "Dr. Maria Johansson",
      specialty: "Cardiologist",
      city: "Helsinki",
      gender: "Female",
      experience: "0-5 years",
      rating: 4.3,
      reviews: 45,
      description:
        "Young and dedicated cardiologist with focus on preventive cardiology and lifestyle medicine.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$130",
      availableHours: "Mon-Fri: 9:00 AM - 5:00 PM",
      languages: "Finnish, English, Swedish",
      achievements: "Cardiology Resident, Preventive Medicine Focus",
      services:
        "Preventive cardiology, Lifestyle consultation, Basic treatment",
    },
    {
      id: 8,
      name: "Dr. Petri Virtanen",
      specialty: "Dermatologist",
      city: "Espoo",
      gender: "Male",
      experience: "10+ years",
      rating: 4.8,
      reviews: 156,
      description:
        "Expert dermatologist specializing in skin cancer detection and advanced cosmetic procedures.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$190",
      availableHours: "Mon-Fri: 9:00 AM - 6:00 PM",
      languages: "Finnish, English, German",
      achievements: "Dermatology Specialist, Skin Cancer Detection Expert",
      services:
        "Skin cancer screening, Cosmetic procedures, Medical dermatology",
    },
    {
      id: 9,
      name: "Dr. Antti Korhonen",
      specialty: "Sports Orthopedic Surgeon",
      city: "Espoo",
      gender: "Male",
      experience: "11+ years",
      rating: 4.9,
      reviews: 151,
      description:
        "Sports injury specialist helping athletes recover from ligament tears, joint damage, and performance-related injuries.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$150",
      availableHours: "Mon-Fri: 9:00 AM - 5:00 PM",
      languages: "Finnish, English",
      achievements: "Sports Orthopedic Fellowship, 11+ years experience",
      services: "Ligament repair, Joint treatment, Sports rehabilitation",
    },
    {
      id: 10,
      name: "Dr. Hanna Laine",
      specialty: "Orthopedic Consultant",
      city: "Vantaa",
      gender: "Female",
      experience: "13+ years",
      rating: 4.7,
      reviews: 110,
      description:
        "Dedicated orthopedic consultant focusing on spinal alignment, joint pain, and holistic rehabilitation.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$140",
      availableHours: "Mon-Fri: 8:00 AM - 4:00 PM",
      languages: "Finnish, English",
      achievements: "Certified Orthopedic Specialist, 13+ years experience",
      services: "Spine therapy, Joint care, Orthopedic diagnostics",
    },
    {
      id: 11,
      name: "Dr. Petri Virtanen",
      specialty: "Trauma Orthopedic Surgeon",
      city: "Lahti",
      gender: "Male",
      experience: "14+ years",
      rating: 4.9,
      reviews: 124,
      description:
        "Experienced in trauma surgery and joint reconstruction, focusing on restoring full movement and strength.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$155",
      availableHours: "Mon-Sat: 9:00 AM - 5:00 PM",
      languages: "Finnish, English",
      achievements: "Performed 500+ trauma surgeries successfully",
      services:
        "Fracture management, Bone reconstruction, Orthopedic trauma care",
    },
    {
      id: 12,
      name: "Dr. Elina Heikkinen",
      specialty: "Spine Orthopedic Specialist",
      city: "Kuopio",
      gender: "Female",
      experience: "8+ years",
      rating: 4.6,
      reviews: 94,
      description:
        "Orthopedic specialist focused on spinal disorders, posture correction, and rehabilitation programs.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$125",
      availableHours: "Mon-Fri: 10:00 AM - 6:00 PM",
      languages: "Finnish, English",
      achievements: "Certified in Spine Therapy and Orthopedic Care",
      services: "Spinal treatment, Posture correction, Rehab therapy",
    },
    {
      id: 13,
      name: "Dr. Teemu Salminen",
      specialty: "Sports Orthopedic Consultant",
      city: "Jyväskylä",
      gender: "Male",
      experience: "10+ years",
      rating: 4.8,
      reviews: 102,
      description:
        "Specialist in sports-related orthopedic conditions, helping patients regain peak performance through targeted treatment.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$135",
      availableHours: "Mon-Fri: 9:30 AM - 5:30 PM",
      languages: "Finnish, English",
      achievements: "Sports Medicine Certification, 10+ years experience",
      services: "Sports therapy, Joint care, Rehabilitation planning",
    },
    {
      id: 14,
      name: "Dr. Laura Hämäläinen",
      specialty: "Orthopedic Surgeon",
      city: "Tampere",
      gender: "Female",
      experience: "12+ years",
      rating: 4.9,
      reviews: 135,
      description:
        "Orthopedic surgeon with extensive experience in fracture repair and joint replacement using advanced surgical techniques.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
      consultationFee: "$145",
      availableHours: "Mon-Fri: 8:30 AM - 4:30 PM",
      languages: "Finnish, English, Swedish",
      achievements: "Senior Orthopedic Surgeon, 12+ years experience",
      services: "Fracture repair, Joint replacement, Orthopedic consultation",
    },
  ];

  // Transform registered doctors to match the expected format
  const transformedRegisteredDoctors = registeredDoctors.map((doctor) => ({
    id: doctor.id,
    name: `Dr. ${doctor.personalInfo.firstName} ${doctor.personalInfo.lastName}`,
    specialty: doctor.professionalInfo.specialty,
    city: doctor.personalInfo.city,
    gender: doctor.personalInfo.gender,
    experience: doctor.professionalInfo.experience,
    rating: doctor.rating || 0,
    reviews: doctor.reviews || 0,
    description:
      doctor.additionalInfo.description ||
      "Newly registered doctor. Profile details coming soon.",
    image:
      doctor.personalInfo.profileImage || "https://via.placeholder.com/150",
    isRegistered: true,
    status: doctor.status,
    registrationDate: doctor.registrationDate,
  }));

  // Combine all doctors
  const allDoctors = [...hardcodedDoctors, ...transformedRegisteredDoctors];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1);
  };

  /*   const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchesSearch =
        searchTerm === "" ||
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCity =
        filters.city === "All Cities" || doctor.city === filters.city;

      const matchesSpecialty =
        filters.specialty === "All Specialties" ||
        doctor.specialty === filters.specialty;

      const matchesGender =
        filters.gender === "All Genders" || doctor.gender === filters.gender;

      const matchesExperience =
        filters.experience === "Any Experience" ||
        doctor.experience === filters.experience;

      const matchesRating =
        filters.rating === "Any Rating" ||
        (filters.rating === "4+ ★" && doctor.rating >= 4) ||
        (filters.rating === "4.5+ ★" && doctor.rating >= 4.5) ||
        (filters.rating === "4.8+ ★" && doctor.rating >= 4.8);

      return (
        matchesSearch &&
        matchesCity &&
        matchesSpecialty &&
        matchesGender &&
        matchesExperience &&
        matchesRating
      );
    });
  }, [allDoctors, searchTerm, filters]); */

  // Extra keywords that should show Orthopedic doctors
  const orthoKeywords = [
    "accident",
    "road accident",
    "road traffic accident",
    "traffic accident",
    "trauma",
    "fracture",
    "bone",
    "joint pain",
    "leg injury",
    "shoulder pain",
    "back pain",
    "knee pain",
    "replacement",
    "hip",
    "joint",
  ];

  const filteredDoctors = useMemo(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();

    return allDoctors.filter((doctor) => {
      const doctorSpecialty = doctor.specialty.toLowerCase();
      const doctorCity = doctor.city.toLowerCase();
      const doctorGender = doctor.gender.toLowerCase();

      // ✅ Incremental letter-based match for orthopedic keywords
      const isOrthoKeyword = orthoKeywords.some((keyword) =>
        keyword.toLowerCase().includes(lowerSearch)
      );

      // ✅ Main search logic
      const matchesSearch =
        lowerSearch === "" ||
        doctor.name.toLowerCase().includes(lowerSearch) ||
        doctorSpecialty.includes(lowerSearch) ||
        doctorCity.includes(lowerSearch) ||
        (isOrthoKeyword && doctorSpecialty.includes("ortho")); // match orthopedists

      // ✅ Filters
      const matchesCity =
        filters.city === "All Cities" ||
        doctorCity === filters.city.toLowerCase();

      const matchesSpecialty =
        filters.specialty === "All Specialties" ||
        doctorSpecialty === filters.specialty.toLowerCase();

      const matchesGender =
        filters.gender === "All Genders" ||
        doctorGender === filters.gender.toLowerCase();

      const matchesExperience =
        filters.experience === "Any Experience" ||
        doctor.experience === filters.experience;

      const matchesRating =
        filters.rating === "Any Rating" ||
        (filters.rating === "4+ ★" && doctor.rating >= 4) ||
        (filters.rating === "4.5+ ★" && doctor.rating >= 4.5) ||
        (filters.rating === "4.8+ ★" && doctor.rating >= 4.8);

      // ✅ Return only doctors that match search + filters
      return (
        matchesSearch &&
        matchesCity &&
        matchesSpecialty &&
        matchesGender &&
        matchesExperience &&
        matchesRating
      );
    });
  }, [allDoctors, searchTerm, filters]);

  const doctorsPerPage = 4;
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const displayedDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + doctorsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get unique cities and specialties from all doctors for filters
  const uniqueCities = [
    "All Cities",
    ...new Set(allDoctors.map((d) => d.city)),
  ];
  const uniqueSpecialties = [
    "All Specialties",
    ...new Set(allDoctors.map((d) => d.specialty)),
  ];

  return (
    <div className="min-h-screen bg-orange-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          onFilterChange={handleFilterChange}
          cities={uniqueCities}
          specialties={uniqueSpecialties}
        />

        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Found {filteredDoctors.length} doctors matching your criteria
            {registeredDoctors.length > 0 && (
              <span className="ml-2 text-orange-600 font-medium">
                ({registeredDoctors.length} newly registered)
              </span>
            )}
          </p>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-orange-600">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading doctors...
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && !loading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}

        {filteredDoctors.length > doctorsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

const SearchSection = ({
  searchTerm,
  setSearchTerm,
  filters,
  onFilterChange,
  cities,
  specialties,
}) => {
  const genders = ["All Genders", "Male", "Female"];
  const experiences = [
    "Any Experience",
    "0-5 years",
    "5-10 years",
    "10+ years",
  ];
  const ratings = ["Any Rating", "4+ ★", "4.5+ ★", "4.8+ ★"];

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Find a Doctor</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Search doctors by city, specialty, name, or rating to find the perfect
          healthcare provider for your needs
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 placeholder-gray-400 shadow-sm"
            />
          </div>
          <button className="w-full md:w-auto bg-[#EF873D] text-white py-4 px-8 rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-md">
            Search Doctors
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <select
          value={filters.city}
          onChange={(e) => onFilterChange("city", e.target.value)}
          className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 shadow-sm"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          value={filters.specialty}
          onChange={(e) => onFilterChange("specialty", e.target.value)}
          className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 shadow-sm"
        >
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        <select
          value={filters.gender}
          onChange={(e) => onFilterChange("gender", e.target.value)}
          className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 shadow-sm"
        >
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <select
          value={filters.experience}
          onChange={(e) => onFilterChange("experience", e.target.value)}
          className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 shadow-sm"
        >
          {experiences.map((exp) => (
            <option key={exp} value={exp}>
              {exp}
            </option>
          ))}
        </select>

        <select
          value={filters.rating}
          onChange={(e) => onFilterChange("rating", e.target.value)}
          className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-[#EF873D] bg-white text-gray-900 shadow-sm"
        >
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
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
            className={`w-4 h-4 ${
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

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${
        doctor.isRegistered ? "ring-2 ring-orange-200" : ""
      }`}
    >
      {doctor.isRegistered && (
        <div className="absolute top-4 right-4">
          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            New
          </span>
        </div>
      )}

      <div className="flex items-center mb-4">
        <img
          src={doctor.image || "https://via.placeholder.com/150"}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-[#EF873D] group-hover:ring-orange-400 transition-all duration-300"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#EF873D] transition-colors">
            {doctor.name}
          </h3>
          <p className="text-[#EF873D] font-medium">{doctor.specialty}</p>
          {doctor.isRegistered && (
            <p className="text-xs text-gray-500 mt-1">
              Status: {doctor.status} • Registered:{" "}
              {new Date(doctor.registrationDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{doctor.city}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <strong>Experience:</strong>
          <span className="ml-2">{doctor.experience}</span>
        </div>

        <div className="flex items-center mb-3">
          {renderStars(doctor.rating)}
          <span className="ml-2 text-sm text-gray-600">
            {doctor.rating}/5 ({doctor.reviews} reviews)
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {doctor.description}
      </p>

      <button
        onClick={() => navigate(`/doctor/${doctor.id}`)}
        className="w-full bg-[#EF873D] text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-md"
      >
        View Profile
      </button>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Inline SVG for left arrow
  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );

  // Inline SVG for right arrow
  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 ml-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  const pageNumbers = Array.from(
    { length: Math.min(totalPages, 5) },
    (_, i) => i + 1
  );

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-orange-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
      >
        <LeftArrow />
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-xl border-2 font-medium transition-all duration-200 ${
            currentPage === page
              ? "bg-orange-500 text-white border-orange-500 shadow-md"
              : "text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-orange-500 bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-orange-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
      >
        Next
        <RightArrow />
      </button>
    </div>
  );
};

export default FindDoctor;
