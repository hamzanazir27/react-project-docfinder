import React from "react";
import { CITIES } from "../../../utils/constants";

export default function PersonalStep({ data, onChange, errors }) {
  const handle = (field, val) => onChange("personalInfo", field, val);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-2">First Name *</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => handle("firstName", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["personalInfo.firstName"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="First name"
          />
          {errors["personalInfo.firstName"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["personalInfo.firstName"]}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Last Name *</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => handle("lastName", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["personalInfo.lastName"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="Last name"
          />
          {errors["personalInfo.lastName"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["personalInfo.lastName"]}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handle("email", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["personalInfo.email"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="Email"
          />
          {errors["personalInfo.email"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["personalInfo.email"]}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">Phone *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handle("phone", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["personalInfo.phone"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="Phone"
          />
          {errors["personalInfo.phone"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["personalInfo.phone"]}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handle("dateOfBirth", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <select
            value={data.gender}
            onChange={(e) => handle("gender", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Address</label>
          <textarea
            rows="3"
            value={data.address}
            onChange={(e) => handle("address", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Full address"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium mb-2">City *</label>
          <select
            value={data.city}
            onChange={(e) => handle("city", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["personalInfo.city"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          >
            <option value="">Select city</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors["personalInfo.city"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["personalInfo.city"]}
            </p>
          )}
        </div>

        {/* Profile Image URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Profile Image URL
          </label>
          <input
            type="url"
            value={data.profileImage}
            onChange={(e) => handle("profileImage", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Image URL (optional)"
          />
        </div>
      </div>
    </div>
  );
}
