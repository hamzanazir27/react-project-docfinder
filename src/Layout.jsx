import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
