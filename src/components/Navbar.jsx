import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Edit,
  Settings,
  LogOut,
  Shield,
  Bell,
  Menu,
  X,
} from "lucide-react";

// Updated Navbar Component with Mobile Responsiveness
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 border-b border-gray-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EF873D] rounded-full flex items-center justify-center shadow-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="sm:w-8 sm:h-8 fill-current text-white-500"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
                </svg>
              </div>
              <span className="text-gray-800 font-bold text-lg sm:text-xl">
                DocFinder
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <Links
                logedin={isLoggedIn}
                onAuthClick={() => setShowAuthModal(true)}
                onProfileClick={() =>
                  setShowProfileDropdown(!showProfileDropdown)
                }
                showProfileDropdown={showProfileDropdown}
                onLogout={() => {
                  setIsLoggedIn(false);
                  setShowProfileDropdown(false);
                }}
              />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#EF873D] rounded-lg p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
                <MobileLinks
                  logedin={isLoggedIn}
                  onAuthClick={() => {
                    setShowAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                  onLogout={() => {
                    setIsLoggedIn(false);
                    setMobileMenuOpen(false);
                  }}
                  closeMobileMenu={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowAuthModal(false);
          }}
        />
      )}
    </>
  );
}

// Desktop Links Component
function Links({
  logedin,
  onAuthClick,
  onProfileClick,
  showProfileDropdown,
  onLogout,
}) {
  const navLinkClass =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-md text-gray-700 hover:text-gray-900 cursor-pointer";

  return (
    <div className="flex items-center space-x-2">
      <a href="/" className={navLinkClass}>
        Home
      </a>
      <a href="/finddoctor" className={navLinkClass}>
        Find Doctor
      </a>
      <a href="/docterregistration" className={navLinkClass}>
        Register as Doctor
      </a>
      <a href="/about" className={navLinkClass}>
        About
      </a>
      <a href="/contact" className={navLinkClass}>
        Contact
      </a>

      {/* Auth Button */}
      <div className="ml-4 pl-4 border-l border-white/20 relative">
        {logedin ? (
          <div className="relative">
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 bg-[#EF873D] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">
                        john.doe@email.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-4 h-4 mr-3" />
                    View Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Bell className="w-4 h-4 mr-3" />
                    Notifications
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Shield className="w-4 h-4 mr-3" />
                    Privacy & Security
                  </a>
                </div>

                <div className="border-t border-gray-100 pt-2">
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onAuthClick}
            className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Login / Signup
          </button>
        )}
      </div>
    </div>
  );
}

// Mobile Links Component
function MobileLinks({ logedin, onAuthClick, onLogout, closeMobileMenu }) {
  const mobileNavLinkClass =
    "block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors";

  return (
    <div className="space-y-1">
      <a href="/" className={mobileNavLinkClass} onClick={closeMobileMenu}>
        Home
      </a>
      <a
        href="/finddoctor"
        className={mobileNavLinkClass}
        onClick={closeMobileMenu}
      >
        Find Doctor
      </a>
      <a
        href="/docterregistration"
        className={mobileNavLinkClass}
        onClick={closeMobileMenu}
      >
        Register as Doctor
      </a>
      <a href="/about" className={mobileNavLinkClass} onClick={closeMobileMenu}>
        About
      </a>
      <a
        href="/contact"
        className={mobileNavLinkClass}
        onClick={closeMobileMenu}
      >
        Contact
      </a>

      {/* Auth Section */}
      <div className="pt-4 border-t border-gray-200">
        {logedin ? (
          <div className="space-y-1">
            <div className="flex items-center px-3 py-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@email.com</p>
              </div>
            </div>
            <a
              href="#"
              className={mobileNavLinkClass}
              onClick={closeMobileMenu}
            >
              <User className="w-4 h-4 inline mr-3" />
              View Profile
            </a>
            <a
              href="#"
              className={mobileNavLinkClass}
              onClick={closeMobileMenu}
            >
              <Settings className="w-4 h-4 inline mr-3" />
              Account Settings
            </a>
            <a
              href="#"
              className={mobileNavLinkClass}
              onClick={closeMobileMenu}
            >
              <Bell className="w-4 h-4 inline mr-3" />
              Notifications
            </a>
            <button
              onClick={onLogout}
              className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4 inline mr-3" />
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={onAuthClick}
            className="w-full bg-[#1E90FF] text-white px-3 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
          >
            Login / Signup
          </button>
        )}
      </div>
    </div>
  );
}

// Auth Modal Component with Mobile Responsiveness
function AuthModal({ onClose, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#EF873D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="sm:w-8 sm:h-8 fill-current text-white"
                viewBox="0 0 256 256"
              >
                <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {isLogin
                ? "Sign in to access your healthcare dashboard"
                : "Join DocFinder to find the best doctors"}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6 sm:mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all text-sm sm:text-base ${
                isLogin
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all text-sm sm:text-base ${
                !isLogin
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                    placeholder="+358 XX XXX XXXX"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent text-sm sm:text-base"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#EF873D] focus:ring-[#EF873D]"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-[#EF873D] hover:text-[#d67329] font-medium"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-[#EF873D] text-white py-2.5 sm:py-3 px-4 rounded-xl font-medium hover:bg-[#d67329] transition-colors shadow-lg text-sm sm:text-base"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            {!isLogin && (
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-[#EF873D] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#EF873D] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Social Login */}
          <div className="mt-6 sm:mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2.5 sm:py-3 px-4 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2 text-xs sm:text-sm">Google</span>
              </button>

              <button className="w-full inline-flex justify-center py-2.5 sm:py-3 px-4 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                <span className="ml-2 text-xs sm:text-sm">Facebook</span>
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Profile Page Component with Mobile Responsiveness
function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+358 40 123 4567",
    dateOfBirth: "1990-05-15",
    address: "Mannerheimintie 12, 00100 Helsinki",
    emergencyContact: "+358 50 987 6543",
    bloodType: "O+",
    allergies: "None",
    medications: "None",
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "medical", label: "Medical", icon: Shield },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 mb-4 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Profile"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 bg-[#EF873D] text-white p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-[#d67329] transition-colors">
                  <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  {profileData.email}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Member since March 2023
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#EF873D] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#d67329] transition-colors flex items-center space-x-2 text-sm sm:text-base"
            >
              <Edit className="w-4 h-4" />
              <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Mobile Tab Navigation */}
          <div className="sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-4 bg-white border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EF873D] text-gray-700 font-medium"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:block border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 lg:px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[#EF873D] text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-8">
            {activeTab === "personal" && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={profileData.dateOfBirth}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={profileData.emergencyContact}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "medical" && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Medical Information
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Type
                    </label>
                    <input
                      type="text"
                      name="bloodType"
                      value={profileData.bloodType}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Allergies
                    </label>
                    <input
                      type="text"
                      name="allergies"
                      value={profileData.allergies}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <textarea
                      name="medications"
                      value={profileData.medications}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      rows="3"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF873D] focus:border-transparent disabled:bg-gray-50 text-sm sm:text-base resize-none"
                      placeholder="List any current medications..."
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Appointments
                </h2>
                <div className="text-center py-8 sm:py-12">
                  <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Your upcoming and past appointments will appear here.
                  </p>
                  <button className="mt-4 bg-[#EF873D] text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-[#d67329] transition-colors text-sm sm:text-base">
                    Book New Appointment
                  </button>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Account Settings
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                      Notifications
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Manage how you receive notifications about appointments
                      and updates.
                    </p>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#EF873D] focus:ring-[#EF873D]"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm sm:text-base text-gray-700">
                          Email notifications
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#EF873D] focus:ring-[#EF873D]"
                        />
                        <span className="ml-2 text-sm sm:text-base text-gray-700">
                          SMS notifications
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                      Privacy & Security
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Manage your privacy and security settings.
                    </p>
                    <div className="space-y-2">
                      <button className="w-full sm:w-auto text-left bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base">
                        Change Password
                      </button>
                      <button className="w-full sm:w-auto text-left bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base sm:ml-2">
                        Two-Factor Authentication
                      </button>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 sm:p-6 rounded-lg border border-red-200">
                    <h3 className="text-base sm:text-lg font-medium text-red-900 mb-2">
                      Danger Zone
                    </h3>
                    <p className="text-sm sm:text-base text-red-700 mb-4">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm sm:text-base">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export Navbar as default
export default Navbar;

// Optional: export ProfilePage for routing purposes
// export { ProfilePage }
