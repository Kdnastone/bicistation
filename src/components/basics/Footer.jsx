import {
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-[#B5E48C] bg-[#184E77]">
      <div className="container mx-auto text-center">
        {/* Información del sitio */}
        <div className="mb-6">
          <p className="text-lg font-bold">BiciStation</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} - Todos los derechos reservados.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-10 mb-6">
          <div className="flex items-center justify-center mt-2 sm:mt-0">
            <FaPhone className="mr-2" />
            <span>(+57) 3128020086</span>
          </div>
          <div className="flex items-center justify-center mt-2 sm:mt-0">
            <FaEnvelope className="mr-2" />
            <span>bicistation@correo.com</span>
          </div>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href="https://github.com/Kdnastone/bicistation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B69A]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://facebook.com/bicistation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B69A]"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://wa.me/573128020086?text=¡Hola%20Leslye!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B69A]"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com/petshop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B69A]"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
