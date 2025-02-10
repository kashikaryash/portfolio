import "./App.css";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PortfolioGrid from "./components/PortfolioGrid";
import TestimonialSection from "./components/TestimonialSection";
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
