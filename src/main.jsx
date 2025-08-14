import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopDoctors from "./components/TopDoctors";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import DocterRegistrationPage from "./pages/DocterRegistrationPage";
import DoctorDetail from "./pages/DoctorDetail";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/about";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="finddoctor" element={<FindDoctor />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="docterregistration" element={<DocterRegistrationPage />} />
      <Route path="doctor/:id" element={<DoctorDetail />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
