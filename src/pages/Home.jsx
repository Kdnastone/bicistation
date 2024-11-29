import Header from "../components/basics/Header";
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container mx-auto mt-6">
      <Header />
        <div className="mt-8 flex justify-center space-x-6 mb-6">
        <NavLink 
          to="/Parking" 
          className="px-10 py-4 bg-[#184E77] text-white rounded-lg hover:bg-[#B5E48C] hover:text-[#1E6091] transition-colors text-xl">
          Parquear
        </NavLink>
        
        <NavLink 
          to="/Rent" 
          className="px-10 py-4 bg-[#B5E48C] text-[#184E77] rounded-lg hover:bg-[#184E77] hover:text-white transition-colors text-xl">
          Alquilar
        </NavLink>
      </div>
      <div className="bg-[#D9ED92] shadow-lg rounded-lg p-6 mt-6 max-w-3xl mx-auto mb-6">
        <p className="text-lg text-gray-700 text-center">
          Esta es una aplicación desarrollada por el equipo de TechNova Girls para
          BiciRoads. El proyecto permite a los usuarios de bicicletas
          geolocalizar estaciones de parqueo y puntos de alquiler, facilitando su
          acceso según la ciudad en la que se encuentren. De esta manera, se
          fomenta el uso de la bicicleta como una alternativa de transporte
          ecológica, contribuyendo a la reducción del impacto ambiental y
          promoviendo una movilidad más sostenible.
        </p>
      </div>
     
    </div>
  );
};

export default Home;