import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icon-app.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D9ED92] shadow-md">
      <div className="container flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo y Título */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className="w-16 h-16 rounded-full bg-[#D9ED92] flex items-center justify-center overflow-hidden mr-3"
          >
            <img src={logo} alt="TechNova Logo" className="h-12 w-12 object-cover" />
          </NavLink>
          <div className="text-2xl sm:text-3xl font-bold text-[#184E77]">BiciStation</div>
        </div>

        {/* Botón de Menú (para móviles) */}
        <button
          className="text-[#184E77] sm:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-8 w-full sm:w-auto mt-4 sm:mt-0`}
        >
          <NavLink
            className={({ isActive }) =>
              `block sm:inline-block text-xl sm:text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 sm:border-none border-[#184E77]" : ""
              } p-2 sm:p-0`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `block sm:inline-block text-xl sm:text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 sm:border-none border-[#184E77]" : ""
              } p-2 sm:p-0`
            }
            to="/About"
          >
            Conócenos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
