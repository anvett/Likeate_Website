"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ResumeCourse = ({ title, subtitle, bulletPoints = [], buttonText, buttonLink, imageSrc }) => {
  return (
    <section className="py-spacing-2 bg-black items-start justify-between text-light  ">
      <div className="w-full px-spacing-2 lg:px-spacing-4 flex flex-col lg:flex-row items-center">
        {/* Columna Izquierda: Textos y Botón */}
        <motion.div
          className="w-full lg:w-1/2 mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Título */}
          <h1 className="text-landing-primary text-size-8 sm:text-size-14  font-bold mb-spacing-1 text-center sm:text-left ">
            {title}
          </h1>

          {/* Subtítulo */}
          <h2 className="text-btn-cta-yellow  text-size-6 sm:text-size-14 font-bold mb-spacing-3 sm:mb-spacing-1 text-left">
            {subtitle}
          </h2>

          {/* Lista con Viñetas */}
          <ul className="text-light list-disc pl-6 mb-spacing-6">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-light text-size-3 sm:text-size-5 mb-2">
                {point}
              </li>
            ))}
          </ul>

          {/* Botón */}
          <Link
            href={buttonLink}
            className="inline-block btn-landing-yellow text-size-6 sm:text-size-8 font-bold px-spacing-3 py-spacing-2 rounded-full border-2 border-dotted border-light hover:bg-light hover:text-dark transition-transform duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Link>
        </motion.div>

        {/* Columna Derecha: Imagen */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-full lg:max-w-[800px] h-[300px] sm:h-[500px] lg:h-[600px]">
            <Image
              src={imageSrc}
              alt="Resumen del Curso"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCourse;
