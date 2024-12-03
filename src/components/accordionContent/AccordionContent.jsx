import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AccordionContent = ({ entries }) => {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  const slideDown = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const zoomOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="w-full flex flex-col items-center mx-auto">
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          className="w-full max-w-6xl p-2 "  // Asegura que el contenedor se ajuste al ancho completo
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="collapse collapse-arrow border border-base-300 rounded-md bg-light"
            variants={zoomOnHover}
          >
            <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />
            <label
              htmlFor={`toggle-${index}`}
              className="collapse-title text-base  block cursor-pointer accordion-landing-title whitespace-normal break-words text-accent font-bold"
            >
             <strong>{entry.title}</strong>  -  {entry.subtitle}
            </label>

            <AnimatePresence>
              <motion.div
                className="collapse-content peer-checked:block hidden bg-gradient-primary text-light accordion-detail text-xs sm:text-sm md:text-base lg:text-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideDown}
              >
                <ul className="list-disc pl-5">
                  {entry.details.map((detail, detailIndex) => (
                    <li className="py-spacing-1 sm:py-spacing-2" key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default AccordionContent;

