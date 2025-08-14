import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 border-b border-gray-100/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#EF873D] rounded-full flex items-center justify-center shadow-md text-white">
              {/* <span className="text-white font-bold text-lg">+</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="fill-current text-white-500"
                viewBox="0 0 256 256"
              >
                <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-bold text-xl">DocFinder</span>
          </div>

          {/* Links */}
          <Links logedin={true} />
        </div>
      </div>
    </nav>
  );
}

function Links({ logedin }) {
  const navLinkClass =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-md text-gray-700 hover:text-gray-900 cursor-pointer";

  return (
    <div className="flex items-center space-x-2">
      <a href="#" className={navLinkClass}>
        Home
      </a>
      <a href="#" className={navLinkClass}>
        Find Doctor
      </a>
      <a href="#" className={navLinkClass}>
        Register as Doctor
      </a>
      <a href="#" className={navLinkClass}>
        About
      </a>
      <a href="#" className={navLinkClass}>
        Contact
      </a>

      {/* Auth Button */}
      <div className="ml-4 pl-4 border-l border-white/20">
        {logedin ? (
          <a
            href="#"
            className="bg-[#EF873D] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Profile
          </a>
        ) : (
          <a
            href="#"
            className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Login / Signup
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
