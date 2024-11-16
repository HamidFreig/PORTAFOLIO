import React from "react";
import SobreMi from "./components/SobreMi";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <nav>
        <ul className="text-white flex justify-center m-4 gap-2 md:gap-10 font-bold text-xl">
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
              Proyectos
            </a>
            <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative group">
            <a
              href="#seccion4"
              className="transition-transform transform duration-300 group-hover:-translate-y-2"
            >
              Contacto
            </a>
            <span className="absolute left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
        </ul>
      </nav>

      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
