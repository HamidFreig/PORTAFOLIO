import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowCircleRight,
} from "react-icons/fa";

const Contacto = () => {
  return (
    <section
      id="seccion5"
      className="h-[50vh] text-white flex flex-col items-center justify-center relative"
    >
      {/* Título de la sección */}
      <p className="text-2xl lg:text-3xl font-bold text-center mb-8">
        &lt; Contacto /&gt;
      </p>

      {/* Contenedor de ítems */}
      <div className="flex flex-col items-start justify-center gap-2 mt-4 mb-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-4xl lg:text-5xl text-gray-300" />
          <a
            href="mailto:hamiduc19@gmail.com"
            className="text-lg lg:text-xl hover:text-gray-400"
          >
            hamiduc19@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <FaGithub className="text-4xl lg:text-5xl text-gray-300" />
          <a
            href="https://github.com/HamidFreig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg lg:text-xl hover:text-gray-400"
          >
            HamidFreig
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-4xl lg:text-5xl text-gray-300" />
          <a
            href="https://www.linkedin.com/in/hamid-freig-0b33a926b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg lg:text-xl hover:text-gray-400"
          >
            Hamid Freig
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-4xl lg:text-5xl text-gray-300" />
          <a
            href="https://wa.me/56935974865"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg lg:text-xl hover:text-gray-400"
          >
            +569 3597 4865
          </a>
        </div>
      </div>

      {/* Flecha para redirigir a la sección 1 */}
      <a
        href="#seccion1"
        className="absolute right-6 bottom-6 flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-110"
      >
        <span className="text-lg lg:text-xl font-bold">Ir a Inicio</span>
        <FaArrowCircleRight className="text-3xl lg:text-4xl" />
      </a>
    </section>
  );
};

export default Contacto;
