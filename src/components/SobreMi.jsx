// src/components/Section3.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiPython, SiPowerbi } from "react-icons/si";

const Section3 = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-4xl text-yellow-500" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-4xl text-white-500" />,
    },
    { name: "MySQL", icon: <FaDatabase className="text-4xl text-gray-500" /> },
    {
      name: "Git/GitHub",
      icon: <FaGitAlt className="text-4xl text-red-500" />,
    },
    { name: "CSS", icon: <DiCss3 className="text-4xl text-blue-600" /> },
    { name: "HTML", icon: <DiHtml5 className="text-4xl text-orange-500" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-yellow-500" />,
    },
    { name: "Python", icon: <SiPython className="text-4xl text-blue-500" /> },
    {
      name: "Power BI",
      icon: <SiPowerbi className="text-4xl text-yellow-600" />,
    },
  ];

  return (
    <section id="seccion2" className="h-screen text-white p-4 w-full">
      {/* Grid con 2 columnas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-between space-y-2">
          {/* Título Sobre Mí */}
          <div className="p-4">
            <p className="text-xl lg:text-4xl font-bold mb-4 text-center   ">
              &lt; Sobre Mí /&gt;
            </p>
            <p className="text-md text-justify border-t-4 p-2 font-sans font-semibold">
              Ingeniero Civil Informático egresado de la Universidad Andrés
              Bello, con residencia en Santiago, Chile. A lo largo de mi
              formación y experiencia profesional, me he destacado por ser una
              persona altamente responsable, proactiva y con una clara
              orientación hacia el cumplimiento de objetivos. Mi motivación
              constante por afrontar nuevos desafíos me impulsa a mejorar de
              manera continua y a buscar soluciones innovadoras que generen
              valor.
            </p>
          </div>

          {/* Título Experiencia */}
          <div className="p-4 font-sans font-semibold">
            <p className="text-xl lg:text-4xl font-bold mb-4 text-center border-b-4 p-2">
              &lt; Experiencia /&gt;
            </p>
            <ul className="flex-col">
              <li className="w-full ">
                <p className="text-lg font-bold ">Business Consultant</p>
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
          <p className="text-xl lg:text-4xl font-bold mb-4 text-center border-b-4 p-2">
            &lt; Skills /&gt;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
