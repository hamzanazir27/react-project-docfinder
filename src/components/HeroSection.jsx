import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="min-h-screen pt-2" style={{ backgroundColor: "#FBE3D2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 s:mt-10 ">
        {/* Gap kam kar diya */}
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Content (Text) */}
          <div className="space-y-6 order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Find the Best
                <span className="block text-[#1E90FF] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Doctors in Finland
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
                Your health is our top priority
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect with qualified healthcare professionals and get the care
                you deserve. Book appointments, consult online, and manage your
                health journey seamlessly.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/finddoctor"
                className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-r from-blue-600 to-blue-500 border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Find Doctor</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/docterregistration"
                className="group relative overflow-hidden backdrop-blur-xl bg-white/40 border-2 border-white/60 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-105 transform shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Register as Doctor</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                  <p className="text-gray-600">Patients Served</p>
                </div>
              </div>

              <div className="w-px h-16 bg-gray-300"></div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                  <p className="text-gray-600">Rated Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor Image */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-2 -ml-4 ">
            <div className="relative z-10 w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-orange-300/20 rounded-full blur-2xl"></div>

              <div className="relative w-full h-[500px] rounded-3xl border-2 border-white/50 bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl scale-105 group">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop"
                  alt="Professional Doctor"
                  className="w-full h-full object-cover transition-transform duration-700 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
