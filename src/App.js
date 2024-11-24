import React, { useState } from "react";
import SobreMi from "./components/SobreMi";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Experiencia from "./components/Experiencia";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className=" text-white p-4">
        <div className="max-w-7xl mx-auto flex  items-center justify-center">
          <ul className="hidden md:flex gap-8 font-bold text-xl">
            <li className="relative group">
              <a
                href="#seccion1"
                className="transition-transform transform duration-300 group-hover:-translate-y-2"
              >
                Inicio
              </a>
              <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <a
                href="#seccion2"
                className="transition-transform transform duration-300 group-hover:-translate-y-2"
              >
                Sobre Mi
              </a>
              <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <a
                href="#seccion3"
                className="transition-transform transform duration-300 group-hover:-translate-y-2"
              >
                Experiencia
              </a>
              <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <a
                href="#seccion4"
                className="transition-transform transform duration-300 group-hover:-translate-y-2"
              >
                Proyectos
              </a>
              <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <a
                href="#seccion5"
                className="transition-transform transform duration-300 group-hover:-translate-y-2"
              >
                Contacto
              </a>
              <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          </ul>

          {/* Botón del menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-6 p-6 bg-white text-black font-bold rounded-lg mt-4 md:hidden ">
            <li>
              <a href="#seccion1" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#seccion2" onClick={toggleMenu}>
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#seccion3" onClick={toggleMenu}>
                Experiencia
              </a>
            </li>
            <li>
              <a href="#seccion4" onClick={toggleMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#seccion5" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Secciones */}
      <Inicio />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
