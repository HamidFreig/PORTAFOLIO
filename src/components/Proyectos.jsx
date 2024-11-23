// src/components/Section3.js
import React from "react";
import PDVimg from "../img/PDVImage.png";
import CltohesImage from "../img/ClothesImage.png";
import ClimaImage from "../img/ClimaImage.png";
import { IoLogoGithub } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";

const Proyectos = () => {
  return (
    <section id="seccion4" className="h-screen text-white">
      <div className="h-auto">
        <p
          className="text-xl lg:text-4xl font-bold text-center p-[30px]"
          h-auto
        >
          &lt; Mis Proyectos /&gt;
        </p>
        <div className="flex flex-col items-center p-[20px] gap-4 w-full">
          <div className="flex justify-center w-full gap-4">
            <li className="flex w-full max-w-[1000px] h-[300px] border border-white rounded-md list-none">
              {/* Imagen a la izquierda */}
              <div className="w-[400px] h-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={PDVimg}
                  alt="Punto de Venta"
                />
              </div>

              {/* Título y Descripción a la derecha */}
              <div className="flex flex-col justify-between p-[20px] w-full">
                <h4 className="text-xl font-bold">Punto de Venta</h4>
                <p className="text-md mt-2 mb-4 ">
                  Desarrollé un sistema de punto de venta (PDV) completo que
                  integra el control de inventario, gestión de empleados y
                  monitoreo de ventas. La solución permite a los usuarios
                  realizar transacciones de venta, actualizar automáticamente el
                  inventario, gestionar las operaciones de los empleados (como
                  horarios y comisiones) y generar informes detallados sobre el
                  rendimiento de ventas y el stock. Esta herramienta mejora la
                  eficiencia y facilita la toma de decisiones en tiempo real.
                </p>

                {/* Enlaces de GitHub y Software */}
                <div className="flex gap-4 justify-around">
                  <div className="flex gap-2">
                    <IoLogoGithub className="w-[30px] h-[30px]" />
                    <a
                      href="https://github.com/HamidFreig/PDV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      GitHub ➔
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <IoLinkOutline className="w-[30px] h-[30px]" />
                    <a
                      href="https://pdv-unab.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      Ver Software ➔
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </div>

          <div className="flex justify-center w-full gap-4">
            <li className="flex w-full max-w-[1000px] h-[300px] border border-white rounded-md list-none">
              {/* Imagen a la izquierda */}
              <div className="w-[400px] h-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={CltohesImage}
                  alt="Punto de Venta"
                />
              </div>

              {/* Título y Descripción a la derecha */}
              <div className="flex flex-col justify-between p-[20px] w-full">
                <h4 className="text-xl font-bold">Tienda Virtual De Ropa</h4>
                <p className="text-md mt-2 mb-4 ">
                  Desarrollé una tienda virtual completa que ofrece una
                  experiencia de compra en línea fluida, donde los usuarios
                  pueden explorar una variedad de productos de ropa, agregar
                  artículos al carrito, modificar la cantidad de productos y
                  realizar el pago. La plataforma permite a los usuarios ver
                  detalles de cada producto, como su nombre, precio y una
                  imagen, todo desde una interfaz intuitiva.
                </p>

                {/* Enlaces de GitHub y Software */}
                <div className="flex gap-4 justify-around">
                  <div className="flex gap-2">
                    <IoLogoGithub className="w-[30px] h-[30px]" />
                    <a
                      href="https://github.com/HamidFreig/PDV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      GitHub ➔
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <IoLinkOutline className="w-[30px] h-[30px]" />
                    <a
                      href="https://pdv-unab.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      Ver Software ➔
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </div>

          <div className="flex justify-center w-full gap-4">
            <li className="flex w-full max-w-[1000px] h-[300px] border border-white rounded-md list-none">
              {/* Imagen a la izquierda */}
              <div className="w-[400px] h-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={ClimaImage}
                  alt="Punto de Venta"
                />
              </div>

              {/* Título y Descripción a la derecha */}
              <div className="flex flex-col justify-between p-[20px] w-full">
                <h4 className="text-xl font-bold">
                  Software Para La Visualización Del Clima
                </h4>
                <p className="text-md mt-2 mb-4 ">
                  Desarrollé un software completo que proporciona información en
                  tiempo real sobre el clima en diversas ciudades de Sudamérica.
                  La plataforma permite a los usuarios seleccionar ciudades de
                  su interés y visualizar los datos de manera clara y precisa.
                  Además, la interfaz intuitiva facilita la navegación,
                  permitiendo acceder rápidamente a las previsiones y detalles
                  climáticos, todo en una sola herramienta para una experiencia
                  de usuario eficiente y accesible.
                </p>

                {/* Enlaces de GitHub y Software */}
                <div className="flex gap-4 justify-around">
                  <div className="flex gap-2">
                    <IoLogoGithub className="w-[30px] h-[30px]" />
                    <a
                      href="https://github.com/HamidFreig/WHEATER-APP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      GitHub ➔
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <IoLinkOutline className="w-[30px] h-[30px]" />
                    <a
                      href="https://wheater-app-pearl-omega.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline"
                    >
                      Ver Software ➔
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
