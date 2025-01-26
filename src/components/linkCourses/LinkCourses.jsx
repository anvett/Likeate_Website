

"use client";

import React from "react";
import Image from "next/image";

export default function LinkCourses({
  backgroundImage,
  imageSrc1,
  oldPrice1,
  newPrice1,
  buttonLink1,
  buttonText1,
  imageSrc2,
  oldPrice2,
  newPrice2,
  buttonLink2,
  buttonText2,
}) {
  return (
    <div
      className="relative bg-cover bg-center w-full h-full py-spacing-4 px-spacing-2 lg:px-spacing-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-center landing-title text-landing-primary font-bobby mb-spacing-2">
        COMPLEMENTA TU ESTRATEGIA CON
      </h1>

      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center lg:justify-between gap-spacing-4 sm:gap-spacing-8">
        {/* Primera Columna */}
        <div className="w-full lg:w-[48%] flex flex-col items-center text-light">
          <Image
            src={imageSrc1}
            alt="Resumen del Curso"
            width={700} // Tamaño ajustado para pantallas grandes
            height={450}
            className="rounded-lg shadow-lg"
          />

          <div className="flex flex-col justify-start pt-spacing-2">
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Curso Online</span>
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Diseño Publicitario</span>
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Canva y Capcut</span>
          </div>

          {/* Sección de Precios y Botón */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center mb-spacing-1">
              <span className="relative text-size-15 text-shadow-custom font-bobby font-bold text-purple-500 mr-spacing-2">
                {oldPrice1}
                <span className="absolute top-1/2 left-0 w-full h-[4px] bg-black transform -translate-y-1/2 rotate-12"></span>
              </span>
              <span className="text-size-30 text-shadow-custom font-bold font-bobby text-pink-600 drop-shadow-lg">
                {newPrice1}
              </span>
            </div>
            <a href={buttonLink1} className="btn-landing-linkCourses">
              {buttonText1}
            </a>
          </div>
        </div>

        {/* Segunda Columna */}
        <div className="w-full lg:w-[48%] flex flex-col items-center text-light">
          <Image
            src={imageSrc2}
            alt="Resumen del Curso"
            width={700} // Tamaño ajustado para pantallas grandes
            height={450}
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-start pt-spacing-3">
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Workshop</span>
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Marca y</span>
            <span className="text-black font-semibold text-size-4 sm:text-size-5 mb-2">Ventas con IA</span>
          </div>

          {/* Sección de Precios y Botón */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center mb-spacing-2">
              <span className="relative text-size-15 text-shadow-custom font-bobby font-bold text-purple-500 mr-spacing-2">
                {oldPrice2}
                <span className="absolute top-1/2 left-0 w-full h-[4px] bg-black transform -translate-y-1/2 rotate-12"></span>
              </span>
              <span className="text-size-30 text-shadow-custom font-bold font-bobby text-pink-600 drop-shadow-lg">
                {newPrice2}
              </span>
            </div>
            <a href={buttonLink2} className="btn-landing-linkCourses">
              {buttonText2}
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
