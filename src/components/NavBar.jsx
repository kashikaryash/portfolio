import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-20 w-50 object-contain" />
      </div>

      {/* Right: Navigation Links */}
      <div className="space-x-6 text-lg font-medium">
        <Link onClick={() => scrollToSection("aboutMe")} className="hover:text-blue-400">About</Link>
        <Link onClick={() => scrollToSection("portfolio")}  className="hover:text-blue-400">Work</Link>
        <Link onClick={() => scrollToSection("contact")} className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
