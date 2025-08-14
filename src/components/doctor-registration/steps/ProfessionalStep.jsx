import React from "react";
import { SPECIALTIES } from "../../../utils/constants";

export default function ProfessionalStep({ data, onChange, errors }) {
  const handle = (field, val) => onChange("professionalInfo", field, val);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Professional Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specialty */}
        <div>
          <label className="block text-sm font-medium mb-2">Specialty *</label>
          <select
            value={data.specialty}
            onChange={(e) => handle("specialty", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["professionalInfo.specialty"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          >
            <option value="">Select specialty</option>
            {SPECIALTIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors["professionalInfo.specialty"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["professionalInfo.specialty"]}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium mb-2">Experience *</label>
          <select
            value={data.experience}
            onChange={(e) => handle("experience", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["professionalInfo.experience"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          >
            <option value="">Select experience</option>
            <option value="0-5 years">0-5 years</option>
            <option value="5-10 years">5-10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
          {errors["professionalInfo.experience"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["professionalInfo.experience"]}
            </p>
          )}
        </div>

        {/* Qualification */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Qualification *
          </label>
          <input
            type="text"
            value={data.qualification}
            onChange={(e) => handle("qualification", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["professionalInfo.qualification"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="e.g., MBBS, MD"
          />
          {errors["professionalInfo.qualification"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["professionalInfo.qualification"]}
            </p>
          )}
        </div>

        {/* Medical License */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Medical License Number *
          </label>
          <input
            type="text"
            value={data.medicalLicense}
            onChange={(e) => handle("medicalLicense", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500
              ${
                errors["professionalInfo.medicalLicense"]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="License number"
          />
          {errors["professionalInfo.medicalLicense"] && (
            <p className="text-red-500 text-sm mt-1">
              {errors["professionalInfo.medicalLicense"]}
            </p>
          )}
        </div>

        {/* Hospital Affiliation */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Hospital / Clinic
          </label>
          <input
            type="text"
            value={data.hospitalAffiliation}
            onChange={(e) => handle("hospitalAffiliation", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Hospital name"
          />
        </div>

        {/* Consultation Fee */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Consultation Fee (€)
          </label>
          <input
            type="number"
            value={data.consultationFee}
            onChange={(e) => handle("consultationFee", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Fee"
          />
        </div>

        {/* Available Hours */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Available Hours
          </label>
          <input
            type="text"
            value={data.availableHours}
            onChange={(e) => handle("availableHours", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g., Mon-Fri 9AM-5PM"
          />
        </div>

        {/* Languages */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Languages Spoken
          </label>
          <input
            type="text"
            value={data.languages}
            onChange={(e) => handle("languages", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="English, Finnish, Swedish"
          />
        </div>
      </div>
    </div>
  );
}
