// Our Top Doctors Section
function TopDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Anna Virtanen",
      specialty: "Cardiologist",
      location: "Helsinki",
      rating: 4,
      reviews: 120,
      description: "Specialist in heart and vascular care",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      imageLeft: true,
    },
    {
      id: 2,
      name: "Dr. Mikko Laine",
      specialty: "Dentist",
      location: "Turku",
      rating: 5,
      reviews: 200,
      description: "Expert in cosmetic dentistry",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      imageLeft: false,
    },
    {
      id: 3,
      name: "Dr. Sofia Heikkinen",
      specialty: "Pediatrician",
      location: "Tampere",
      rating: 4,
      reviews: 150,
      description: "Caring for children's health & wellness",
      image:
        "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvY3RvcnN8ZW58MHwwfDB8fHww",
      imageLeft: true,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#FBE3D2", color: "#EF873D" }}
          >
            OUR TOP DOCTORS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Top Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the most trusted and highly rated doctors in Finland
          </p>
        </div>

        {/* Doctors List */}
        <div className="space-y-12">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 p-8 ${
                  doctor.imageLeft ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Doctor Details */}
                <div
                  className={`flex flex-col justify-center space-y-6 ${
                    doctor.imageLeft
                      ? "lg:order-1"
                      : "lg:order-2 lg:col-start-2"
                  }`}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span
                        className="text-lg font-semibold"
                        style={{ color: "#EF873D" }}
                      >
                        {doctor.specialty}
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-lg text-blue-600 font-medium">
                        {doctor.location}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {renderStars(doctor.rating)}
                    </div>
                    <span className="text-gray-600 font-medium">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "{doctor.description}"
                  </p>

                  {/* View Profile Button */}
                  <div>
                    <button
                      className="px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border-2 
               border-[#EF873D] bg-[#FBE3D2] text-[#EF873D] 
               hover:bg-[#EF873D] hover:text-white transition-all duration-300"
                    >
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Doctor Image */}
                <div
                  className={`relative ${
                    doctor.imageLeft
                      ? "lg:order-2"
                      : "lg:order-1 lg:col-start-1"
                  }`}
                >
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div
                    className="absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-lg border border-white/20"
                    style={{ backgroundColor: "#EF873D" }}
                  >
                    <span className="text-white font-semibold text-sm">
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="flex justify-center mt-16">
          <button
            className="px-12 py-5 rounded-2xl font-bold text-xl flex items-center space-x-3
               border-[3px] border-[#EF873D] bg-white text-[#EF873D] shadow-xl
               hover:bg-[#EF873D] hover:text-white hover:shadow-2xl hover:scale-105
               transition-all duration-300"
          >
            <span>View All Doctors</span>
            <svg
              className="w-6 h-6 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopDoctors;
