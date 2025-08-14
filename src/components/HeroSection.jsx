import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#FBE3D2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Find the Best
                <span className="block text-[#1E90FF]">Doctors in Finland</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
                Your health is our top priority
              </h2>
            </div>

            {/* Action Buttons - Glassy */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Action */}
              <button className="relative overflow-hidden backdrop-blur-xl bg-blue-600/80 border border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:scale-105 transform shadow-lg ">
                Find Doctor
              </button>

              {/* Secondary Action */}
              <button className="relative overflow-hidden backdrop-blur-xl bg-white/30 border border-black/10 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-105 transform shadow-lg ">
                Register as Doctor
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">100k+</p>
                  <p className="text-gray-700">Patients Served</p>
                </div>
              </div>

              <div className="w-px h-16 bg-gray-300"></div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#EF873D] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">5★</p>
                  <p className="text-gray-700">Rated Service</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Doctor Image with Glass Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-md">
              <div className="relative w-full h-[500px] rounded-3xl border border-white/40 bg-white/15 backdrop-blur-xl shadow-xl overflow-hidden transition-transform duration-500 ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661762428543-4a8ad2ff5391?q=80&w=870&auto=format&fit=crop"
                  //   src="../public/heroSection/doc-img.jpg"
                  alt="Professional Doctors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
