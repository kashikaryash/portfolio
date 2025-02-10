import { Routes, Route } from "react-router-dom";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import PortfolioGrid from "./components/PortfolioGrid";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import AboutMe from "./components/Aboutme";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PortfolioGrid />
      <TestimonialSection/>
      <div className="mt-10 p-6">
        <AboutMe/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
