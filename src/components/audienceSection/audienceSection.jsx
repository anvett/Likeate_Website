"use client";

import React from "react";
import Image from "next/image";

export default function AudienceSection() {
  return (
    <section className="bg-black text-light py-spacing-3 px-spacing-1 sm:px-spacing-4 flex flex-col items-center ">
      {/* Título */}
      <h2 className="text-size-6 sm:text-size-16 font-extrabold leading-tight  text-center">
        <span className="inline-block mr-2">⚠️</span>
        <span className="text-purple-400">ESTE CURSO</span>{" "}
        <span className="text-yellow-300">ESTÁ DIRIGIDO A:</span>
        <span className="inline-block ml-2">⚠️</span>
      </h2>

      {/* Lista */}
      <ul className="text-left list-disc pl-spacing-2 sm:pl-spacing-5 my-spacing-2 sm:my-spacing-4 text-size-3 sm:text-size-6 font-semibold space-y-2">
        <li>EMPRENDEDORES</li>
        <li>GERENTES DE PYMES</li>
        <li>COORDINADORES DE MARKETING DIGITAL</li>
        <li>CREADORES DE CONTENIDO</li>
        <li>MARCA PERSONAL</li>
        <li>DUEÑOS DE PYMES</li>
      </ul>

      {/* Íconos de redes (imagen completa) */}
      <div className="mt-spacing-1 max-w-[300px] sm:max-w-[400px] w-full">
        <Image
          src="/images/cursos/marketing/social_icons.png"
          alt="Redes Sociales"
          width={400}
          height={100}
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
    </section>
  );
}
