import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for adding a doctor
export const addDoctor = createAsyncThunk(
  'doctors/addDoctor',
  async (doctorData, { getState }) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newDoctor = {
      ...doctorData,
      id: Date.now(),
      registrationDate: new Date().toISOString(),
      status: 'pending',
      rating: 0,
      reviews: 0,
    };
    
    // Get current state and update local storage
    const currentDoctors = getState().doctors.doctors;
    const updatedDoctors = [...currentDoctors, newDoctor];
    localStorage.setItem('registeredDoctors', JSON.stringify(updatedDoctors));
    
    return newDoctor;
  }
);

// Async thunk for loading doctors from local storage
export const loadDoctorsFromStorage = createAsyncThunk(
  'doctors/loadFromStorage',
  async () => {
    const saved = localStorage.getItem('registeredDoctors');
    return saved ? JSON.parse(saved) : [];
  }
);

const initialState = {
  doctors: [],
  loading: false,
  success: false,
  error: null,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    clearSuccess: (state) => {
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateDoctorStatus: (state, action) => {
      const { id, status } = action.payload;
      const doctor = state.doctors.find(d => d.id === id);
      if (doctor) {
        doctor.status = status;
        localStorage.setItem('registeredDoctors', JSON.stringify(state.doctors));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.doctors.push(action.payload);
        // Auto-clear success after 3 seconds
        setTimeout(() => {
          state.success = false;
        }, 3000);
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadDoctorsFromStorage.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadDoctorsFromStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(loadDoctorsFromStorage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSuccess, clearError, updateDoctorStatus } = doctorSlice.actions;
export default doctorSlice.reducer;
