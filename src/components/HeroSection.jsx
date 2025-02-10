import heroImageSrc from "../assets/hero-image.jpg"; // Use the uploaded image
import DesignSection from "./DesignSection";
import { Link } from "react-router-dom";

function HeroSection() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section className="flex flex-col items-center justify-center px-10 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-gray-900 text-xl font-semibold">Branding | Image Making</h2>
          <h1 className="text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Visual Designer
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com.
          </p>
          <Link onClick={() => scrollToSection("contact")} className="mt-6 px-6 py-1 bg-gray-900 text-white font-medium text-lg rounded hover:bg-gray-700">Contact</Link>

        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center relative mt-10 md:mt-0">
          <img src={heroImageSrc} alt="Hero" className="w-96 rounded-lg shadow-lg" />
          <div className="absolute top-8 right-4 w-12 h-12 bg-red-500 rounded-tr-lg"></div>
          <div className="absolute bottom-8 left-6 w-12 h-12 bg-green-500 rounded-bl-lg"></div>
        </div>
      </div>

      {/* Brand Logos using SVGs */}
      <div className="flex justify-center items-center gap-12 mt-12">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="Adidas" className="h-10" />
      </div>
      <DesignSection/>
    </section>
  );
}

export default HeroSection;
