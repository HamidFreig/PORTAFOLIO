import React from "react";

const experiencias = [
  {
    logo: "https://talentportugal.com/wp-content/uploads/2022/07/Management-solutions-talent-portugal-emprego-estagios-recrutamento-logo-1024x1024.png",
    title: "Business Consultant",
    date: "Septiembre 2023 - Actualidad",
    description:
      "Como Business Consultant, me especialicé en la gestión de problemas de entidades, ayudando a las empresas a resolver conflictos y optimizar procesos internos mediante un enfoque estratégico en la toma de decisiones y la implementación de soluciones adaptadas a sus necesidades comerciales.",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEC5XSVRVtCcw/company-logo_200_200/company-logo_200_200/0/1706544437787/socius_arquitectura_y_plataformas_tecnologicas_logo?e=2147483647&v=beta&t=xk1SFrwwHYyQoeV445KGMzYu2KaccVlAy4dyY6KTK18",
    title: "Practica Profesional FullStack",
    date: "Enero 2023 - Abril 2023",
    description:
      "Como Desarrollador Fullstack, me encargué de crear soluciones web completas, trabajando tanto en el frontend como en el backend. Utilicé React para desarrollar interfaces de usuario interactivas y dinámicas, y NestJS para construir APIs robustas y escalables. Integré estas soluciones con bases de datos MySQL para gestionar y procesar información de manera eficiente, asegurando una experiencia de usuario fluida y un manejo eficaz de los datos.",
  },
  {
    logo: "https://grupoaxo.com/images/legacy/grupo-axo.jpg",
    title: "Retail Manager",
    date: "Septiembre 2021 - Septiembre 2024",
    description:
      "Como Retail Manager, fui responsable de la supervisión y optimización de operaciones en el punto de venta, gestionando equipos y recursos para asegurar una experiencia de cliente excepcional. Mi enfoque se centró en el análisis de ventas, la gestión de inventarios y la implementación de estrategias comerciales efectivas para maximizar el rendimiento y la rentabilidad de las tiendas. Además, trabajé estrechamente con los equipos de marketing y operaciones para garantizar la alineación de las estrategias con los objetivos comerciales generales.",
  },
];

export const Experiencia = () => {
  return (
    <section
      id="seccion3"
      className="flex min-h-screen w-full justify-center items-center  text-white overflow-auto"
    >
      <div className=" font-sans flex-col font-semibold justify-center items-center w-full max-w-4xl">
        {/* Título de la sección */}
        <p className="text-xl lg:text-4xl font-bold mb-4 text-center p-2 w-full lg:w-[1000px]">
          &lt; Experiencia /&gt;
        </p>

        <ul className="flex flex-col justify-center items-center w-full">
          {experiencias.map((experiencia, index) => (
            <li
              key={index}
              className="mt-4 p-4 rounded-xl shadow-lg w-full"
              style={{ height: "auto", minHeight: "250px" }}
            >
              <div className="flex flex-col sm:flex-row justify-center items-center h-full">
                {/* Contenedor de la imagen, ajustado para pantalla grande y pequeña */}
                <div className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] flex justify-center mb-4 sm:mb-0 sm:mr-6">
                  <img
                    src={experiencia.logo}
                    alt={experiencia.title}
                    className="object-cover w-full h-full rounded-full border-2 border-solid border-white"
                  />
                </div>

                {/* Texto a la derecha del logo en pantallas grandes, debajo en pantallas pequeñas */}
                <div className="text-center sm:text-left w-full sm:w-[60%] p-6">
                  <p className="text-lg font-bold">{experiencia.title}</p>
                  <p className="text-md font-bold">{experiencia.date}</p>
                  <p
                    className="mt-4 text-justify"
                    style={{ whiteSpace: "pre-line" }} // Mantener formato de salto de línea
                  >
                    {experiencia.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
