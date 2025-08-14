import React from "react";

const labels = ["Personal Info", "Professional Info", "Additional Info"];

export default function StepIndicator({ current }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${
                  step <= current
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
            >
              {step}
            </div>
            {step < 3 && (
              <div
                className={`w-20 h-1 ${
                  step < current ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2 text-sm text-gray-600">
        {labels.map((l, idx) => (
          <span key={idx} className="mx-4">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
