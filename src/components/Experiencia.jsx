import React from "react";

export const Experiencia = () => {
  return (
    <section
      id="seccion3"
      className="h-screen text-white w-full flex items-center justify-center"
    >
      <div className="p-4 font-sans flex-col font-semibold  justify-center ">
        <p className="text-xl lg:text-4xl font-bold mb-4 text-center border-b-4 p-2 w-[1000px]">
          &lt; Experiencia /&gt;
        </p>
        <ul className="flex-col justify-center w-[1000px]">
          <li className="w-full mt-6">
            <div className="grid grid-cols-10 items-center gap-4">
              <div className="col-span-3 flex justify-center">
                <img
                  src="https://talentportugal.com/wp-content/uploads/2022/07/Management-solutions-talent-portugal-emprego-estagios-recrutamento-logo-1024x1024.png"
                  alt="Management Solutions Logo"
                  className="w-full max-w-[150px] object-contain rounded-full border-solid border-2 border-white"
                />
              </div>
              {/* Columna del texto (70%) */}
              <div className="col-span-7">
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
              </div>
            </div>
          </li>
          <li className="w-full mt-6">
            <div className="grid grid-cols-10 items-center gap-4">
              <div className="col-span-3 flex justify-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQEC5XSVRVtCcw/company-logo_200_200/company-logo_200_200/0/1706544437787/socius_arquitectura_y_plataformas_tecnologicas_logo?e=2147483647&v=beta&t=xk1SFrwwHYyQoeV445KGMzYu2KaccVlAy4dyY6KTK18"
                  alt="Socius Logo"
                  className="w-full max-w-[150px] object-contain rounded-full border-solid border-2 border-white"
                />
              </div>

              <div className="col-span-7">
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
              </div>
            </div>
          </li>
          <li className="w-full mt-6">
            <div className="grid grid-cols-10 items-center gap-4">
              <div className="col-span-3 flex justify-center">
                <img
                  src="https://grupoaxo.com/images/legacy/grupo-axo.jpg"
                  alt="Axo Logo"
                  className="w-full max-w-[150px] object-contain rounded-full border-solid border-2 border-white"
                />
              </div>

              <div className="col-span-7">
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
