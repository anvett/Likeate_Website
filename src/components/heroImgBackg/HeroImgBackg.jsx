import React from "react";
import Link from "next/link";

export default function HeroImgBackg({
  backgroundImage,
  typeProduct,
  mainText,
  secondaryText,
  buttonText,
  buttonLink,
}) {
  return (
    <>
      <div
        className="hero min-h-[60vh] sm:min-h-[75vh] lg:min-h-[100vh] bg-cover bg-center pb-spacing-3"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-neutral-content px-2 py-8 sm:py-20 lg:py-26 ">
          <div className="lg:max-w-3x4 ">
            <h1 className="landing-product text-dark text-center">{typeProduct}</h1>
            <h1 className="landing-title text-dark text-center">{mainText}</h1>
            <div className="flex justify-center items-center mt-4 pb-spacing-2">
              <Link className="btn-landing mt-4" href={buttonLink}>
                {buttonText}
              </Link>
            </div>
            <p className="landing-subtitle text-dark text-center">{secondaryText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
