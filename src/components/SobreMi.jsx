// src/components/Section3.js
import React from "react";

const Section3 = () => {
  return (
    <section id="seccion2" className="h-screen text-white p-4">
      {/* Grid con 2 columnas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-between space-y-8">
          {/* Título Sobre Mí */}
          <div>
            <p className="text-xl lg:text-4xl font-bold mb-4">
              &lt; Sobre Mí /&gt;
            </p>
            <p className="text-md text-justify">
              Soy un profesional con estudios en ingeniería informática y
              experiencia en consultoría empresarial. Me he especializado en el
              análisis y optimización de procesos empresariales, con un enfoque
              en la implementación de soluciones tecnológicas y la gestión de
              proyectos. Me apasiona ayudar a las empresas a mejorar su
              eficiencia y adaptarse a los desafíos del entorno digital.
            </p>
          </div>

          {/* Título Experiencia */}
          <div>
            <p className="text-xl lg:text-4xl font-bold mb-4">
              &lt; Experiencia /&gt;
            </p>
            <ul className="flex-col">
              <li className="w-full ">
                <p className="text-lg font-bold">Business Consultant</p>
                <p className="text-md font-bold">
                  Septiembre 2023 - Actualidad
                </p>
                <p className="mt-4 text-justify">
                  Como Business Consultant, me especialicé en la gestión de
                  problemas de entidades, ayudando a las empresas a resolver
                  conflictos y optimizar procesos internos mediante un enfoque
                  estratégico en la toma de decisiones y la implementación de
                  soluciones adaptadas a sus necesidades comerciales.
                </p>
              </li>
              <li className="w-full mt-4">
                <p className="text-lg font-bold">
                  Practica Profesional FullStack
                </p>
                <p className="text-md font-bold">Enero 2023 - Abril 2023</p>
                <p className="mt-4 text-justify">
                  Como Desarrollador Fullstack, me encargué de crear soluciones
                  web completas, trabajando tanto en el frontend como en el
                  backend. Utilicé React para desarrollar interfaces de usuario
                  interactivas y dinámicas, y NestJS para construir APIs
                  robustas y escalables. Integré estas soluciones con bases de
                  datos MySQL para gestionar y procesar información de manera
                  eficiente, asegurando una experiencia de usuario fluida y un
                  manejo eficaz de los datos.
                </p>
              </li>
              <li className="w-full mt-4">
                <p className="text-lg font-bold">Retail Manager</p>
                <p className="text-md font-bold">
                  Septiembre 2021 - Septiembre 2024
                </p>
                <p className="mt-4 text-justify">
                  Como Retail Manager, fui responsable de la supervisión y
                  optimización de operaciones en el punto de venta, gestionando
                  equipos y recursos para asegurar una experiencia de cliente
                  excepcional. Mi enfoque se centró en el análisis de ventas, la
                  gestión de inventarios y la implementación de estrategias
                  comerciales efectivas para maximizar el rendimiento y la
                  rentabilidad de las tiendas. Además, trabajé estrechamente con
                  los equipos de marketing y operaciones para garantizar la
                  alineación de las estrategias con los objetivos comerciales
                  generales.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna derecha: Skills */}
        <div className="flex flex-col justify-between space-y-8">
          {/* Título Skills */}
          <div>
            <p className="text-xl lg:text-4xl font-bold mb-4">
              &lt; Skills /&gt;
            </p>
            <ul className="text-lg space-y-4">
              <li>React</li>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>MySQL</li>
              <li>JavaScript</li>
              <li>CSS/Tailwind CSS</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
