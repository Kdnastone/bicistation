import { NavLink } from "react-router-dom";
import logo from "../../assets/icon-app.jpeg";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D9ED92] shadow-md h-auto">
      <div className="container flex items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className="w-16 h-16 rounded-full bg-[#D9ED92] flex items-center justify-center overflow-hidden mr-3"
          >
            <img src={logo} alt="TechNova Logo" className="h-12 w-12 object-cover" />
          </NavLink>
          <div className="text-xl md:text-3xl font-bold text-[#184E77]">BiciStation</div>
        </div>

        {/* Hamburguesa - Mobile */}
        <button
          className="block md:hidden text-[#1E6091] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              `text-lg md:text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 border-[#184E77]" : ""
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-lg md:text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 border-[#184E77]" : ""
              }`
            }
            to={"/About"}
          >
            Conócenos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
