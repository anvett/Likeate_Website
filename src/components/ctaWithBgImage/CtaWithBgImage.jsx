"use client";

import React from "react";
import Image from "next/image";

const CtaWithBgImage = ({ backgroundImage, buttonText, buttonLink }) => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[920px] sm:h-[1700px] lg:h-[1600px] px-spacing-2 sm:px-spacing-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-light py-spacing-3 sm:py-spacing-6">
        {/* Título */}
        <h1 className="text-size-4 sm:text-size-14 lg:text-size-20 font-extrabold  text-yellow-300 leading-tight drop-shadow-[3px_3px_0px_#000000] sm:drop-shadow-[4px_4px_0px_#000000]">
          TODO ESTO LO LLEVARÁS AL PRECIO ESPECIAL
        </h1>

        {/* Precios */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-spacing-1">
          <span className="text-size-10 sm:text-size-15  font-bold line-through text-purple-600 drop-shadow-[3px_3px_0px_#000000] sm:drop-shadow-[4px_4px_0px_#000000] relative">
            $140
            <span className="absolute top-1/2 left-0 w-full h-[5px] bg-black transform -translate-y-1/2 rotate-12" />
          </span>
          <span className="text-size-20 sm:text-size-30  font-extrabold text-pink-400 drop-shadow-[3px_3px_0px_#000000] sm:drop-shadow-[4px_4px_0px_#000000]">
            $70
          </span>
        </div>

        {/* Subtítulo */}
        <p className="text-yellow-300 drop-shadow-[3px_3px_0px_#000000] sm:drop-shadow-[4px_4px_0px_#000000] text-size-4 sm:text-size-10 font-bold mt-spacing-1">
          SOLO POR SER PARTE DEL LANZAMIENTO
        </p>

        {/* Párrafo explicativo */}
        <div className="max-w-2xl mt-spacing-1">
          <p className="text-black text-size-2 sm:text-size-7 font-medium">
            Esta oferta estará disponible solo por 24 horas. <br />
            Después de esa fecha, <br />
            <strong>¡el precio regresará a la normalidad!</strong> <br />
            ¡Luego no digas que no te lo dije!
          </p>
        </div>

        {/* Botón */}
        <div className="mt-spacing-3">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-landing-yellow"
          >
            {buttonText}
          </a>
        </div>

        {/* Imagen de medios de pago */}
        <div className="mt-spacing-3 max-w-[500px] w-full">
          <Image
            src="/images/cursos/marketing/price-offer.png"
            alt="Medios de pago"
            width={500}
            height={100}
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CtaWithBgImage;
