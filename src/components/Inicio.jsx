// src/components/Section2.js
import { React, useEffect, useState } from "react";
import fotoPerfil from "../img/foto-perfil2.jpg";
import Typewriter from "react-typewriter-effect";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

const Section2 = () => {
  const [fontSize, setFontSize] = useState("3rem"); // Tamaño por defecto

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize("2rem"); // sm:text-xl
      } else if (window.innerWidth < 1024) {
        setFontSize("2rem"); // md:text-3xl
      } else {
        setFontSize("3rem"); // lg:text-5xl
      }
    };

    handleResize(); // Establece el tamaño inicial
    window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar
    };
  }, []);

  return (
    <section id="seccion1" className="h-screen text-white">
      <div className="grid h-screen lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="flex flex-col justify-center items-center bg-black text-white px-6 sm:px-4">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-xl lg:text-3xl m-4">&lt; Hola Mundo /&gt;</p>
            <p className="text-3xl lg:text-5xl">Soy Hamid Freig,</p>
            <Typewriter
              textStyle={{
                fontFamily: "Arial",
                color: "#fff",
                fontSize: fontSize, // Usa el tamaño calculado
                fontWeight: "bold",
              }}
              startDelay={100}
              cursorColor="white"
              multiText={["FrontEnd.", "Backend.", "FullStack."]}
              multiTextLoop={true} // Asegura que el loop esté activado
              multiTextDelay={1500} // Tiempo de espera entre textos
              typeSpeed={100} // Velocidad de escritura
              deleteSpeed={80} // Velocidad de borrado
              textSizeClass="text-3xl sm:text-xl lg:text-5xl"
            />
          </div>
          <div className="inline-flex justify-center items-center mt-4">
            <a
              href="https://github.com/HamidFreig" // Coloca aquí tu enlace de GitHub
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Añade seguridad cuando usas target="_blank"
            >
              <VscGithub className="text-[40px] lg:text-[60px] cursor-pointer hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamid-freig-0b33a926b/" // Coloca aquí tu enlace de LinkedIn
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Añade seguridad cuando usas target="_blank"
            >
              <CiLinkedin className="text-[50px] ml-2 lg:text-[80px] cursor-pointer hover:text-gray-500" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="rounded-full w-[300px] sm:w-[250px] md:w-[350px] lg:w-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
