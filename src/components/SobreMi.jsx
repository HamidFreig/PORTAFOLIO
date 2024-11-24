import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiPython, SiPowerbi, SiTailwindcss } from "react-icons/si";

const Section3 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

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
    { name: "HTML", icon: <DiHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS", icon: <DiCss3 className="text-4xl text-blue-600" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-4xl text-white-500" />,
    },
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
    <section
      id="seccion2"
      className="flex min-h-screen w-full justify-center items-center p-4 text-white overflow-auto"
    >
      <div className="grid md:grid-cols-1 gap-6 p-4 max-w-[1000px]">
        {/* Título Sobre Mí */}
        <div>
          <div className="p-4">
            <p className="text-xl lg:text-4xl font-bold mb-2 text-center">
              &lt; Sobre Mí /&gt;
            </p>
            <p className="text-md text-justify  p-6 font-sans font-semibold">
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
        </div>

        {/* Título Skills */}
        <div className="flex flex-col justify-between space-y-8">
          <p className="text-xl lg:text-4xl font-bold  text-center  p-2">
            &lt; Skills /&gt;
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg transition-all duration-300
              hover:shadow-xl ${
                hoverIndex === index
                  ? "scale-110 shadow-2xl"
                  : hoverIndex !== null
                  ? "opacity-50"
                  : ""
              }`}
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
