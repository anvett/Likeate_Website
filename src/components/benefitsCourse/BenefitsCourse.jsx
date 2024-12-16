// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const BenefitsCourse = ({ title, subtitle, message, benefits = [] }) => {
//   return (
//     <section className="py-spacing-6 bg-black ">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Título y Subtítulo */}
//         <h1 className="font-bobby text-size-12 sm:text-size-22 text-accent mb-spacing-1 text-center">{title}</h1>
//         <h1 className="text-landsubtitle2 text-size-14 sm:text-size-23 font-bold mb-spacing-1 text-center">{subtitle}</h1>
//         <p className="text-light text-size-10 sm:text-size-14 text-center mb-spacing-6">{message}</p>

//         {/* Grilla de Ítems */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {benefits.map((item, index) => (
//             <motion.div
//               key={index}
//               className="border p-4 rounded-lg shadow-lg text-center bg-accent flex flex-col justify-between h-full"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div >
//                 {/* Imagen */}
//                 <Image
//                   src={item.imageSrc || "/images/default-image.jpg"} // Imagen por defecto
//                   alt={item.title || "Descripción"}
//                   width={300}
//                   height={200}
//                   className="mx-auto mb-spacing-2 object-cover rounded-lg"
//                 />

//                 {/* Descripción */}
//                 <p className="text-light text-center font-semibold text-size-2 sm:text-size-4 mb-spacing-2">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsCourse;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BenefitsCourse = ({ title, subtitle, message, benefits = [] }) => {
  return (
    <section className="py-spacing-6 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título y Subtítulo */}
        <h1 className="font-bobby text-size-12 sm:text-size-22 text-accent mb-spacing-1 text-center">
          {title}
        </h1>
        <h2 className="text-landsubtitle2 text-size-14 sm:text-size-23 font-bold mb-spacing-1 text-center">
          {subtitle}
        </h2>
        <p className="text-light text-size-10 sm:text-size-14 text-center mb-spacing-6">
          {message}
        </p>

        {/* Grilla de Ítems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="border rounded-lg shadow-lg bg-accent flex flex-col items-center justify-between p-4 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen con tamaño fijo */}
              <div className="w-full aspect-w-16 aspect-h-14 mb-spacing-2">
                <Image
                  src={item.imageSrc || "/images/default-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Descripción */}
              <div className="flex-grow text-center">
                <p className="text-light font-semibold text-size-3 sm:text-size-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCourse;
