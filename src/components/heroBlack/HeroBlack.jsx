import React from "react";
import Image from "next/image";

export default function HeroBlack() {
  return (
    <div className="bg-black flex flex-col justify-center items-center py-spacing-3">
      <h1 className="text-center font-extrabold leading-tight text-size-3 sm:text-size-20 ">
        <span className="text-cyan-300 block">POTENCIA LAS VENTAS</span>
        <span className="text-purple-500 block">DE TU NEGOCIO</span>
        <span className="text-yellow-300 block">EN REDES SOCIALES</span>
      </h1>

      <div className="flex flex-col items-center mt-spacing-1 sm:mt-spacing-3 px-spacing-2 sm:px-spacing-4 ">
        <p className="text-light text-center text-size-2 sm:text-size-8 font-medium leading-relaxed  mx-auto">
          <span className="text-pink-300 font-semibold">No necesitas experiencia previa</span> para
          triunfar. Este curso está diseñado
          <span className="text-yellow-200 font-semibold">
            {" "}
            para emprendedores y dueños de negocios como tú
          </span>
          , que buscan aprender de forma
          <span className="text-pink-300 font-semibold"> práctica y sencilla</span>.
        </p>
      </div>

      {/* Imagen del mockup */}
      <div className="w-full max-w-[1100px] px-spacing-2 mt-spacing-2">
        <Image
          src="/images/cursos//marketing/hero-mockup.png" // asegúrate que esté en /public/images
          alt="Mockup curso Marketing Digital"
          width={1100}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
