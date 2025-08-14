import React, { useState, useMemo } from "react";

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    city: "All Cities",
    specialty: "All Specialties",
    gender: "All Genders",
    experience: "Any Experience",
    rating: "Any Rating",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const doctors = [
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
    },
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1);
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
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
  }, [doctors, searchTerm, filters]);

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

  return (
    <div className="min-h-screen bg-orange-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Found {filteredDoctors.length} doctors matching your criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
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
}) => {
  const cities = [
    "All Cities",
    "Helsinki",
    "Tampere",
    "Turku",
    "Oulu",
    "Espoo",
    "Vantaa",
  ];
  const specialties = [
    "All Specialties",
    "Cardiologist",
    "Pediatrician",
    "Dermatologist",
    "Orthopedist",
    "Neurologist",
    "Psychiatrist",
  ];
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
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

      <button className="w-full bg-[#EF873D] text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-md">
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
