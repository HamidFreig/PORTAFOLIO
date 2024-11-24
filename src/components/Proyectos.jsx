// src/components/Section3.js
import React from "react";
import PDVimg from "../img/PDVImage.png";
import ClothesImage from "../img/ClothesImage.png";
import ClimaImage from "../img/ClimaImage.png";
import ComingSoon from "../img/comingsoon.png";
import { IoLogoGithub } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";

const projects = [
  {
    title: "Punto de Venta",
    description:
      "Desarrollé un sistema de punto de venta (PDV) completo que integra el control de inventario, gestión de empleados y monitoreo de ventas. La solución permite a los usuarios realizar transacciones de venta, actualizar automáticamente el inventario, gestionar las operaciones de los empleados (como horarios y comisiones) y generar informes detallados sobre el rendimiento de ventas y el stock.",
    image: PDVimg,
    github: "https://github.com/HamidFreig/PDV",
    liveDemo: "https://pdv-unab.vercel.app/",
  },
  {
    title: "Tienda Virtual De Ropa",
    description:
      "Desarrollé una tienda virtual que ofrece una experiencia de compra en línea fluida, donde los usuarios pueden explorar una variedad de productos de ropa, agregar artículos al carrito, modificar la cantidad de productos y realizar el pago. La plataforma permite a los usuarios ver detalles de cada producto, como su nombre, precio y una imagen, todo desde una interfaz intuitiva.",
    image: ClothesImage,
    github: "https://github.com/HamidFreig/SSJCLOTHES",
    liveDemo: "https://ssjclothess-mmsw-hamidfreigs-projects.vercel.app/",
  },
  {
    title: "Software Para La Visualización Del Clima",
    description:
      "Desarrollé un software completo que proporciona información en tiempo real sobre el clima en diversas ciudades de Sudamérica. La plataforma permite a los usuarios seleccionar ciudades de su interés y visualizar los datos de manera clara y precisa. Además, la interfaz intuitiva facilita la navegación, permitiendo acceder rápidamente a las previsiones y detalles climáticos, todo en una sola herramienta para una experiencia de usuario eficiente y accesible.",
    image: ClimaImage,
    github: "https://github.com/HamidFreig/WHEATER-APP",
    liveDemo: "https://wheater-app-pearl-omega.vercel.app/",
  },
  {
    title: "Catalogo Web De Productos Publicitarios",
    description:
      "Estoy desarrollando un catálogo web interactivo que reunirá una amplia variedad de productos publicitarios, incluyendo artículos ficticios para campañas promocionales y productos decorativos para el hogar y el jardín. La plataforma está siendo diseñada para permitir a los usuarios explorar un portafolio diverso, seleccionando categorías de interés y accediendo a información detallada sobre cada producto. Con una interfaz moderna e intuitiva, buscamos garantizar una navegación rápida y sencilla, ofreciendo una experiencia visual atractiva y una búsqueda eficiente.",
    image: ComingSoon,
    github: null,
    liveDemo: null,
  },
];

const Proyectos = () => {
  return (
    <section
      id="seccion4"
      className="h-auto text-white p-6 flex flex-col items-center"
    >
      <p className="text-xl lg:text-4xl font-bold mb-4 text-center  p-2 w-full lg:w-[1000px]">
        &lt; Mis Proyectos /&gt;
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center w-full mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center w-[90%] max-w-[1000px] border border-white rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 hover:opacity-70"
          >
            {/* Imagen a la izquierda */}
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <img
                className="w-full h-full object-cover rounded-md"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Título y Descripción a la derecha */}
            <div className="flex flex-col p-4 items-center text-center">
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-md mt-2 mb-4">{project.description}</p>

              {/* Enlaces de GitHub y Software */}
              <div className="flex gap-4 justify-center items-center">
                <div className="flex gap-2">
                  <IoLogoGithub className="w-[30px] h-[30px]" />
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      GitHub ➔
                    </a>
                  ) : (
                    <span className="text-lg font-bold text-gray-500">
                      No disponible
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <IoLinkOutline className="w-[30px] h-[30px]" />
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      Ver Software ➔
                    </a>
                  ) : (
                    <span className="text-lg font-bold text-gray-500">
                      No disponible
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
