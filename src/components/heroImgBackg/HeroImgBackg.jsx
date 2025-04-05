// import React from "react";
// import Link from "next/link";

// export default function HeroImgBackg({
//   backgroundImage,
//   typeProduct,
//   mainText,
//   secondaryText,
//   buttonText,
//   buttonLink,
// }) {
//   return (
//     <>
//       <div
//         className="hero min-h-[80vh] sm:min-h-[80vh] lg:min-h-[100vh] bg-cover bg-center pb-spacing-3 layout-responsive"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <div className="hero-overlay bg-opacity-10"></div>
//         <div className="hero-content text-neutral-content px-2 py-8 sm:py-20 lg:py-26 ">
//           <div className="lg:max-w-3x4 ">
//             <h1 className="landing-product text-dark text-center">{typeProduct}</h1>
//             <h1 className="landing-title text-dark text-center">{mainText}</h1>
//             <div className="flex justify-center items-center mt-4 pb-spacing-2">
//               <Link className="btn-landing mt-4" href={buttonLink}>
//                 {buttonText}
//               </Link>
//             </div>
//             <p className="landing-subtitle text-dark text-center mb-spacing-5">{secondaryText}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroImage({ backgroundImage, buttonText, buttonLink }) {
  return (
    <div className="relative w-full">
      {/* Imagen de fondo full width y responsive */}
      <Image
        src={backgroundImage}
        alt="Curso Marketing Digital"
        layout="responsive"
        width={1920}
        height={1080}
        className="object-cover"
        priority
      />

      {/* Botón centrado en la parte inferior */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 px-spacing-2 pt-spacing-3">
        <Link href={buttonLink} className="btn-landing2 text-center">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
