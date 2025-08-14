import React from "react";

export default function AdditionalStep({ data, onChange }) {
  const handle = (field, val) => onChange("additionalInfo", field, val);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

      <div className="space-y-6">
        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Professional Description
          </label>
          <textarea
            rows="4"
            value={data.description}
            onChange={(e) => handle("description", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Tell patients about your expertise..."
          />
        </div>

        {/* Achievements */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Achievements & Certifications
          </label>
          <textarea
            rows="3"
            value={data.achievements}
            onChange={(e) => handle("achievements", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Awards, certifications, publications..."
          />
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Services Offered
          </label>
          <textarea
            rows="3"
            value={data.services}
            onChange={(e) => handle("services", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            placeholder="Specific treatments you provide..."
          />
        </div>
      </div>
    </div>
  );
}
