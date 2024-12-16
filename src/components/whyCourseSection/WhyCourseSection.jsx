"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyCourseSection({ title, subtitle, items }) {
  return (
    <div className="w-full flex flex-col items-center ">
      {/* Título y Subtítulo */}
      <motion.div
        className="text-center mb-spacing-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className=" landing-title text-accent">{title}</h2>
        <p className=" font-bobby text-size-12 text-landsubtitle2">{subtitle}</p>
      </motion.div>

      {/* Contenido */}
      <div className="w-full flex flex-col items-center gap-spacing-2 px-spacing-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-11/12 border-2 border-accent rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Título del ítem */}
            <div className="bg-accent text-light text-size-3 sm:text-size-5 text-center font-bold py-spacing-2">
              {item.title}
            </div>
            {/* Descripción del ítem */}
            <div className="bg-[#FFF7F0] text-primary text-center text-size-2 sm:text-size-3 py-spacing-3 px-spacing-2">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
