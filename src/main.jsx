import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="finddoctor" element={<FindDoctor />} />
      {/* <Route path='contact' element={<Contact />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
