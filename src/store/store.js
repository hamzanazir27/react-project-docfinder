import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./doctorSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["doctors/addDoctor/fulfilled"],
        ignoredPaths: ["doctors.doctors"],
      },
    }),
});
