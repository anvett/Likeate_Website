import React from "react";
import Image from "next/image";

export default function HeroImage({source} ) {
  return (
    <div className="w-full">
      <Image
        src={source}
        alt="Curso Marketing Digital"
        layout="responsive"
        width={1920}
        height={1080}
        className="object-cover"
        priority
      />
    </div>
  );
}
