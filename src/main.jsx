import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopDoctors from "./components/TopDoctors";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <TopDoctors />
    <Reviews />
    <Footer />
  </StrictMode>
);
