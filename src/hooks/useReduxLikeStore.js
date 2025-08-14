import { useState, useEffect } from "react";

export default function useDoctorStore() {
  const [state, setState] = useState({
    doctors: [],
    loading: false,
    success: false,
    error: null,
  });

  // hydrate once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("registeredDoctors") || "[]");
    setState((prev) => ({ ...prev, doctors: saved }));
  }, []);

  const actions = {
    addDoctor: (doctorData) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      setTimeout(() => {
        const newDoctor = {
          ...doctorData,
          id: Date.now(),
          registrationDate: new Date().toISOString(),
          status: "pending",
        };
        const updated = [...state.doctors, newDoctor];
        localStorage.setItem("registeredDoctors", JSON.stringify(updated));
        setState({
          doctors: updated,
          loading: false,
          success: true,
          error: null,
        });

        // reset success banner
        setTimeout(
          () => setState((prev) => ({ ...prev, success: false })),
          3000
        );
      }, 1000);
    },

    clearError: () => setState((prev) => ({ ...prev, error: null })),
    getAllDoctors: () =>
      JSON.parse(localStorage.getItem("registeredDoctors") || "[]"),
  };

  return { state, actions };
}
