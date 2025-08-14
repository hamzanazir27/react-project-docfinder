import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoctor, clearSuccess, clearError } from "../../store/doctorSlice";
import StepIndicator from "./StepIndicator";
import PersonalStep from "./steps/PersonalStep";
import ProfessionalStep from "./steps/ProfessionalStep";
import AdditionalStep from "./steps/AdditionalStep";

const initialFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    profileImage: "",
  },
  professionalInfo: {
    specialty: "",
    experience: "",
    qualification: "",
    medicalLicense: "",
    hospitalAffiliation: "",
    consultationFee: "",
    availableHours: "",
    languages: "",
  },
  additionalInfo: {
    description: "",
    achievements: "",
    services: "",
  },
};

function DoctorRegistration() {
  const dispatch = useDispatch();
  const { loading, success, error, doctors } = useSelector(
    (state) => state.doctors
  );
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Clear success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
    if (errors[`${section}.${field}`]) {
      setErrors((prev) => ({ ...prev, [`${section}.${field}`]: "" }));
    }
  };

  const validateStep = (step) => {
    const e = {};
    if (step === 1) {
      if (!formData.personalInfo.firstName)
        e["personalInfo.firstName"] = "Required";
      if (!formData.personalInfo.lastName)
        e["personalInfo.lastName"] = "Required";
      if (!formData.personalInfo.email) e["personalInfo.email"] = "Required";
      if (!formData.personalInfo.phone) e["personalInfo.phone"] = "Required";
      if (!formData.personalInfo.city) e["personalInfo.city"] = "Required";
    }
    if (step === 2) {
      if (!formData.professionalInfo.specialty)
        e["professionalInfo.specialty"] = "Required";
      if (!formData.professionalInfo.experience)
        e["professionalInfo.experience"] = "Required";
      if (!formData.professionalInfo.qualification)
        e["professionalInfo.qualification"] = "Required";
      if (!formData.professionalInfo.medicalLicense)
        e["professionalInfo.medicalLicense"] = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () =>
    validateStep(currentStep) && setCurrentStep((s) => s + 1);
  const handlePrev = () => setCurrentStep((s) => s - 1);
  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      dispatch(addDoctor(formData));
      setCurrentStep(1); // reset wizard
      setFormData(initialFormData);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalStep
            data={formData.personalInfo}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <ProfessionalStep
            data={formData.professionalInfo}
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <AdditionalStep
            data={formData.additionalInfo}
            onChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Simple navbar (same as before) */}
      <nav className="bg-white shadow-lg border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">HealthFinder</div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {success && (
          <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
            Registration Successful!
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
            Error: {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Register as a Doctor
            </h1>
            <p className="text-xl text-gray-600">
              Join our platform and connect with patients
            </p>
          </div>

          <StepIndicator current={currentStep} />

          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 flex items-center"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Debug list */}
        {doctors.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              Registered Doctors ({doctors.length})
            </h3>
            <div className="space-y-3">
              {doctors.map((d) => (
                <div key={d.id} className="bg-gray-50 p-3 rounded">
                  Dr. {d.personalInfo.firstName} {d.personalInfo.lastName} -{" "}
                  {d.professionalInfo.specialty} ({d.status})
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorRegistration;
