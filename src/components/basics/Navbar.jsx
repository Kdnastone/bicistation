import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/technova.jpg';

const Navbar = () => {
  return (
     
    <nav className='bg-[#f0ead2] shadow-md h-25 overflow-hidden'>
      <div className='container flex items-center justify-between mx-auto'>
        
      <div className='flex items-center'>
          <img src={logo} alt="TechNova Logo" className="h-40 mr-3 -my-4" />
          <div className='text-4xl font-bold text-[#6b8e23]'>TECHNOVA</div>
        </div>
     
        <div className='space-x-8'>
          <NavLink 
            className={({ isActive }) => 
              `text-[2rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/"}// Dirección de la ruta para Home
          >
            Home 
          </NavLink>          
          <NavLink
            className={({ isActive }) => 
              `text-[2rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/AcercaDeNosotros"}// Dirección de la ruta 
          >
            Acerca De Nosotros
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;