// src/components/Section3.js
import React from "react";

const Proyectos = () => {
  return (
    <section id="seccion4" className="h-screen  text-white">
      <div className="h-auto">
        <p className="text-xl lg:text-4xl font-bold  text-center  p-[30px] ">
          &lt; Proyectos /&gt;
        </p>
        <div className="flex-row p-[20px]">
          <li className="w-[800px] h-[250px] border border-yellow-300 fkex justify-start m-[10px] "></li>
          <li className="w-[800px] h-[250px] border border-yellow-300 justify-end m-[10px]"></li>
          <li className="w-[800px] h-[250px] border border-yellow-300 fkex justify-start m-[10px] "></li>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
