function Footer() {
  return (
    <footer className="bg-[#FBE3D2] border-t-1 border-[#EF873D]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#EF873D] rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current text-white"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
                </svg>
              </div>
              <span className="text-[#EF873D] font-bold text-2xl">
                DocFinder
              </span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-md">
              Connecting patients with Finland's most trusted healthcare
              professionals. Find the right doctor for your needs, anytime,
              anywhere.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-[#EF873D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Helsinki, Finland</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-[#EF873D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+358 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-[#EF873D]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>support@docfinder.fi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#EF873D] font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Find a Doctor</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Top Doctors</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Patient Reviews</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#EF873D] font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Register as Doctor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Online Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Health Records
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#EF873D] ">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2025 DocFinder. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm mr-2">Follow us:</span>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
