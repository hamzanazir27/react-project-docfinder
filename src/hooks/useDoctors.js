import { useSelector, useDispatch } from 'react-redux';
import { loadDoctorsFromStorage } from '../store/doctorSlice';

export const useDoctors = () => {
  const dispatch = useDispatch();
  const { doctors: registeredDoctors, loading, success, error } = useSelector((state) => state.doctors);

  // Transform registered doctors to match the expected format
  const transformRegisteredDoctors = (doctors) => {
    return doctors.map(doctor => ({
      id: doctor.id,
      name: `Dr. ${doctor.personalInfo.firstName} ${doctor.personalInfo.lastName}`,
      specialty: doctor.professionalInfo.specialty,
      city: doctor.personalInfo.city,
      gender: doctor.personalInfo.gender,
      experience: doctor.professionalInfo.experience,
      rating: doctor.rating || 0,
      reviews: doctor.reviews || 0,
      description: doctor.additionalInfo.description || "Newly registered doctor. Profile details coming soon.",
      image: doctor.personalInfo.profileImage || "https://via.placeholder.com/150",
      isRegistered: true,
      status: doctor.status,
      registrationDate: doctor.registrationDate,
    }));
  };

  // Load doctors from local storage
  const loadDoctors = () => {
    dispatch(loadDoctorsFromStorage());
  };

  return {
    registeredDoctors,
    transformedDoctors: transformRegisteredDoctors(registeredDoctors),
    loading,
    success,
    error,
    loadDoctors,
  };
};
