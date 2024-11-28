import { FaGithub, FaWhatsapp, FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg font-bold">BiciStation</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
        <div className="flex items-center justify-center mt-2">
          <FaPhone className="mr-2" /> 
          <span>(+57) 3128020086</span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <FaEnvelope className="mr-2" />
          <span>bicistation@gmail.com</span>
        </div>
          <a
            href="https://github.com/Kdnastone/bicistation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://facebook.com/bicistation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://wa.me/573128020086?text=¡Hola%20Leslye!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWhatsapp size={24} />
          </a>
          <a 
            href="https://instagram.com/petshop" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6b8e23] hover:text-gray-700"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
