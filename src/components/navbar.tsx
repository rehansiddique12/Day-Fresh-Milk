import { Menu } from "lucide-react";
import logo from "../assets/images/df-ogo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-6 relative z-10">
      
      <Link to="/"><img src={logo} alt="Logo" className="h-16 cursor-pointer"/></Link>
      <nav className="flex gap-3">
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer">
          Products
        </button>
        <button className="px-6 py-2 bg-black/20 text-white rounded-full font-medium hover:bg-black/30 transition cursor-pointer">
          Contact
        </button>
      </nav>
      <button className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/30 transition cursor-pointer">
        <Menu size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
