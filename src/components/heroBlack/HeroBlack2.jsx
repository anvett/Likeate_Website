import React from "react";
import Image from "next/image";

export default function HeroSocialSection() {
  return (
    <div className="bg-black flex flex-col justify-center items-center py-spacing-2">
      {/* Títulos */}
      <h1 className="text-center font-extrabold leading-tight text-size-3 sm:text-size-16 px-spacing-1 sm:px-spacing-4">
        <span className="text-purple-400 block">APRENDE ESTRATEGIAS DIGITALES EFECTIVAS</span>
        <span className="text-light block">Y COMPROBADAS EN ESTE CURSO</span>
        <span className="text-pink-400 block ">100% ONLINE</span>
      </h1>

      {/* Imagen única con redes sociales */}
      <div className="w-full max-w-[500px] sm:max-w-[700px] mt-spacing-2 sm:mt-spacing-4 px-spacing-2">
        <Image
          src="/images/cursos/marketing/social_icons.png" // Imagen combinada con todas las redes
          alt="Redes sociales"
          width={700}
          height={200}
          className="w-full h-auto object-contain mx-auto"
        />
      </div>

      {/* Descripción */}
      <div className="flex flex-col items-center mt-spacing-1 sm:mt-spacing-3 px-spacing-2 sm:px-spacing-4">
        <p className="text-light text-center text-size-2 sm:text-size-8 font-medium leading-relaxed mx-auto">
          Domina el <span className="font-semibold">marketing digital desde cero</span> y aumenta tus clientes sin necesidad de experiencia previa. 🚀
        </p>
      </div>

      {/* Botón externo */}
      <div className="mt-spacing-2 sm:mt-spacing-4 ">
        <a
          href="https://pay.hotmart.com/T95719486U?offDiscount=101297"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-landing"
        >
          ¡COMPRA AHORA! <span className="text-size-2">👉</span>
        </a>
      </div>
    </div>
  );
}
