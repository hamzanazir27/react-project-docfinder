import React from "react";
import {
  Heart,
  Users,
  Shield,
  Award,
  Target,
  Eye,
  CheckCircle,
  Star,
  Globe,
  Clock,
  UserCheck,
  Stethoscope,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "10,000+", label: "Registered Doctors", icon: UserCheck },
    { number: "500,000+", label: "Patients Served", icon: Users },
    { number: "50+", label: "Cities Covered", icon: Globe },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We believe healthcare should be delivered with empathy, understanding, and genuine care for every patient.",
      color: "text-red-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your health data is protected with the highest security standards and complete confidentiality.",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We partner only with qualified, experienced healthcare professionals to ensure the best care.",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Making quality healthcare accessible to everyone across Finland, regardless of location.",
      color: "text-green-600",
    },
  ];

  const team = [
    {
      name: "Dr. Elina Virtanen",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1594824204356-bb9e0e30d7eb?w=300&h=300&fit=crop&crop=face",
      description:
        "Leading cardiologist with 20+ years of experience in Finnish healthcare system.",
    },
    {
      name: "Mikael Lindström",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Healthcare technology entrepreneur passionate about improving patient access to care.",
    },
    {
      name: "Anna Korhonen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c666b6c6?w=300&h=300&fit=crop&crop=face",
      description:
        "Tech leader specializing in secure healthcare platforms and patient data protection.",
    },
    {
      name: "Dr. Jukka Nieminen",
      role: "Head of Quality Assurance",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      description:
        "Ensures all medical professionals meet our high standards of care and expertise.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "HealthFinder was established with a vision to revolutionize healthcare access in Finland.",
    },
    {
      year: "2020",
      title: "First 1,000 Doctors",
      description:
        "Reached our first milestone of 1,000 registered healthcare professionals on the platform.",
    },
    {
      year: "2021",
      title: "National Expansion",
      description:
        "Expanded services to cover all major cities across Finland.",
    },
    {
      year: "2022",
      title: "Digital Health Innovation",
      description:
        "Launched telemedicine services and digital health consultations.",
    },
    {
      year: "2023",
      title: "500K Patients Milestone",
      description:
        "Celebrated serving over 500,000 patients with quality healthcare connections.",
    },
    {
      year: "2024",
      title: "AI-Powered Matching",
      description:
        "Introduced smart doctor-patient matching using advanced algorithms.",
    },
  ];

  const features = [
    "GDPR Compliant Data Protection",
    "Multi-language Support (Finnish, Swedish, English)",
    "Real-time Appointment Booking",
    "Secure Patient-Doctor Communication",
    "Digital Health Records",
    "Insurance Integration",
    "Mobile App Available",
    "Telemedicine Consultations",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="mt-12"></div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About HealthFinder
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing healthcare access in Finland by connecting
              patients with qualified doctors through our innovative digital
              platform. Making quality healthcare accessible, convenient, and
              secure for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-orange-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-orange-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To democratize healthcare access across Finland by creating a
                seamless digital bridge between patients and healthcare
                professionals. We believe everyone deserves timely, quality
                medical care regardless of their location or circumstances.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our platform, we're eliminating traditional barriers to
                healthcare access while maintaining the highest standards of
                medical care and patient safety.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To become the leading healthcare platform in the Nordic region,
                setting the standard for digital health services that prioritize
                patient care, medical excellence, and technological innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where finding and accessing quality
                healthcare is as simple as a few clicks, while maintaining the
                personal touch and trust that defines excellent medical care.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make
              as we work to improve healthcare access in Finland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <value.icon className={`w-10 h-10 ${value.color} mr-4`} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines medical expertise, technology
              innovation, and healthcare industry experience to deliver the best
              possible platform for patients and doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to Finland's leading healthcare platform -
              here are the key milestones in our story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform offers everything patients and
                doctors need for seamless healthcare interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
            <Stethoscope className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of patients and doctors who trust HealthFinder for
              their healthcare needs. Whether you're looking for medical care or
              want to expand your practice, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/finddoctor"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Find Doctor
              </a>
              <a
                href="/docterregistration"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Register as Doctor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
