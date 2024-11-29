import { NavLink } from "react-router-dom";
import logo from "../../assets/icon-app.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-[#D9ED92] shadow-md h-25 overflow-hidden mb-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
        <NavLink to="/" className="w-16 h-16 rounded-full bg-[#D9ED92] flex items-center justify-center overflow-hidden mr-3">
            <img src={logo} alt="TechNova Logo" className="h-12 w-12 object-cover" />
          </NavLink>
          <div className="text-3xl font-bold text-[#184E77]">BiciStation</div>
        </div>

        <div className="space-x-8">
          <NavLink
            className={({ isActive }) =>
              `text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 border-[#184E77]" : ""
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-2xl text-[#1E6091] hover:text-[#1E6091] transition-colors ${
                isActive ? "font-bold border-b-2 border-[#184E77]" : ""
              }`
            }
            to={"/AcercaDeNosotros"}
          >
            Acerca De Nosotros
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;