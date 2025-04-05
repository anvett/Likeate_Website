"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const LinkCourses = ({ backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-full px-spacing-2 sm:px-spacing-4 py-spacing-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-light">
        {/* Título */}
        <h2 className="text-size-4 sm:text-size-14 lg:text-size-20 font-extrabold text-yellow-300 leading-tight drop-shadow-[3px_3px_0px_#000000] sm:drop-shadow-[4px_4px_0px_#000000] mb-spacing-3 max-w-4xl w-full">
          COMPLEMENTA TU ESTRATEGIA CON:
        </h2>

        {/* Grilla responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-spacing-4 sm:gap-spacing-10 w-full max-w-7xl">
          {/* Curso Canva y Capcut */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/cursos/marketing/link-course1.png"
              alt="Curso Canva y Capcut"
              width={500}
              height={300}
              className="w-full h-auto object-contain"
            />

            <p className="text-black text-size-4 sm:text-size-7 font-semibold mt-spacing-2">
              Curso Online <br /> Diseño Publicitario <br /> Canva y Capcut
            </p>

            {/* Precios */}
            <div className="flex items-center justify-center gap-4 mt-spacing-1">
              <span className="text-size-10 sm:text-size-15 font-bold line-through text-purple-600 drop-shadow-[3px_3px_0px_#000000] relative">
                $74
                <span className="absolute top-1/2 left-0 w-full h-[5px] bg-black transform -translate-y-1/2 rotate-12" />
              </span>
              <span className="text-size-20 sm:text-size-30 font-extrabold text-pink-400 drop-shadow-[4px_4px_0px_#000000]">
                $37
              </span>
            </div>

            <p className="text-black text-size-2 sm:text-size-6 font-semibold mt-spacing-1">
              ¡ÚNICO PAGO DE POR VIDA!
            </p>

            <Link
              href="https://pay.hotmart.com/V97594756L"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-landing-linkCourses mt-spacing-2"
            >
              IR AL CURSO
            </Link>
          </div>

          {/* Workshop IA */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/cursos/marketing/link-course2.png"
              alt="Workshop IA"
              width={500}
              height={300}
              className="w-full h-auto object-contain"
            />

            <p className="text-black text-size-4 sm:text-size-7 font-semibold mt-spacing-1 sm:mt-spacing-1">
              Workshop <br /> Marca y ventas <br /> con IA
            </p>

            {/* Precios */}
            <div className="flex items-center justify-center gap-4 mt-spacing-1">
              <span className="text-size-10 sm:text-size-15 font-bold line-through text-purple-600 drop-shadow-[3px_3px_0px_#000000] relative">
                $34
                <span className="absolute top-1/2 left-0 w-full h-[5px] bg-black transform -translate-y-1/2 rotate-12" />
              </span>
              <span className="text-size-20 sm:text-size-30 font-extrabold text-pink-400 drop-shadow-[4px_4px_0px_#000000]">
                $17
              </span>
            </div>

            <p className="text-black text-size-2 sm:text-size-6 font-semibold mt-spacing-1 sm:mt-spacing-1">
              ¡ÚNICO PAGO DE POR VIDA!
            </p>

            <Link
              href="https://pay.hotmart.com/B97751726V?offDiscount=1012ia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-landing-linkCourses mt-spacing-2"
            >
              IR AL CURSO
            </Link>
          </div>
        </div>

        {/* Medios de pago */}
        <div className="mt-spacing-4 max-w-[450px] w-full">
          <Image
            src="/images/cursos/marketing/price-offer.png"
            alt="Medios de pago"
            width={450}
            height={80}
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkCourses;
