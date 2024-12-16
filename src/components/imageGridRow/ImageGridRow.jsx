"use client";

import React from "react";
import Image from "next/image";

export default function ImageGridRow({ leftImage, rightImage, rightTitle }) {
  return (
    <div className="flex flex-row sm:flex-row items-center justify-center gap-spacing-2 sm:gap-spacing-2 py-spacing-3 ">
      {/* Imagen Izquierda */}
      <div className="flex justify-center w-3/4 sm:w-1/2">
        <Image
          src={leftImage}
          alt="Left Image"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full  sm:w-full max-w-md"
        />
      </div>

      {/* Imagen Derecha con Título */}
      <div className="flex flex-col items-center w-1/3 md:w-1/3 sm:w-2/4">
        <h3 className="text-size-3 font-bobby font-semibold text-light pt-spacing-1 sm:text-size-9 text-center pb-spacing-1">
          {rightTitle}
        </h3>
        <Image
          src={rightImage}
          alt="Right Image"
          width={200}
          height={200}
          className="rounded-lg object-cover w-full sm:w-full max-w-xs"
        />
      </div>
    </div>
  );
}
