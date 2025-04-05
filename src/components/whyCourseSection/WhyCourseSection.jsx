

// "use client";

// import React, { useState } from "react";

// export default function WhyCourseSection({ title, subtitle, items }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerPage = window.innerWidth >= 640 ? 2 : 1; // 2 items in large screens, 1 in small screens

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / itemsPerPage));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(items.length / itemsPerPage)) % Math.ceil(items.length / itemsPerPage));
//   };

//   return (
//     <div className="w-full flex flex-col items-center bg-[#FFF7F0]">
//       {/* Título y Subtítulo */}
//       <div className="text-center mb-6">
//         <h2 className="landing-title text-accent">{title}</h2>
//         <p className="font-bobby text-size-9 sm:text-size-12 text-landsubtitle2">{subtitle}</p>
//       </div>

//       {/* Slider Container */}
//       <div className="relative w-full sm:w-4/5 overflow-hidden ">
//         <div
//           className="flex transition-transform duration-700 "
//           style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="w-full sm:w-1/2 flex-shrink-0 flex justify-center bg-[#FFF7F0]"
//             >
//               <div className="w-[90%] sm:w-[80%] max-w-lg border-2 border-accent rounded-lg bg-[#FFF7F0] p-4 sm:p-6 shadow-lg">
//                 {/* Título del ítem */}
//                 <h3 className="bg-accent text-light text-size-3 sm:text-size-5 text-center font-bold py-spacing-2">
//                   {item.title}
//                 </h3>
//                 {/* Descripción del ítem */}
//                 <p className="bg-[#FFF7F0] text-primary text-center text-size-2 sm:text-size-3 py-spacing-3 px-spacing-2">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Botones de navegación */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={handlePrev}
//           className="btn btn-circle bg-black text-white"
//         >
//           ❮
//         </button>
//         <button
//           onClick={handleNext}
//           className="btn btn-circle bg-black text-white"
//         >
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";

export default function WhyCourseSection({ title, subtitle, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Configuración inicial y respuesta a cambios de tamaño de pantalla
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 640 ? 2 : 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Determinar los elementos visibles para la página actual
  const visibleItems = items.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="w-full flex flex-col items-center bg-[#FFF7F0]">
      {/* Título y Subtítulo */}
      <div className="text-center mb-6">
        <h2 className="text-size-6 font-bold text-center  pb-2 sm:text-size-18 px-spacing-3 sm:px-spacing-3 text-accent">{title}</h2>
        <p className=" text-size-4 sm:text-size-10 px-2 text-dark font-semibold">
          {subtitle}
        </p>
      </div>

      {/* Contenedor del slider */}
      <div className="relative w-full sm:w-4/5 overflow-hidden">
        <div className="flex transition-transform duration-700">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 flex-shrink-0 flex justify-center"
            >
              <div className="w-[90%] sm:w-[80%] max-w-lg border-2 border-accent rounded-lg bg-[#FFF7F0] p-4 sm:p-6 shadow-lg text-center h-[400px] sm:h-[500px] ">
                {/* Título del ítem */}
                <h3 className="bg-accent text-light text-size-3 sm:text-size-5 font-bold py-2">
                  {item.title}
                </h3>
                {/* Descripción del ítem */}
                <p className="text-primary text-size-2 sm:text-size-3 py-2 px-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="btn btn-circle bg-black text-white"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-black text-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
