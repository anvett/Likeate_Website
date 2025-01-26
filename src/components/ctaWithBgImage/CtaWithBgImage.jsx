"use client";

import React from "react";

const CtaWithBgImage = ({
  backgroundImage,
  title,
  subtitle,
  oldPrice,
  newPrice,
  paragraph1,
  paragraph2,
  paragraph3,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[1100px] flex items-center justify-center text-center px-spacing-4 sm:px-spacing-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-light px-spacing-2">
        <h1 className="landing-title text-landing-primary mb-spacing-1">{title}</h1>

        {/* Price Section */}
        <div className="flex items-center mb-spacing-1">
          {/* Tachado */}
          <span className="relative text-size-15 text-shadow-custom font-bobby font-bold text-purple-500 mr-spacing-2">
            {oldPrice}
            <span className="absolute top-1/2 left-0 w-full h-[4px] bg-black transform -translate-y-1/2 rotate-12"></span>
          </span>

          {/* Precio Actual */}
          <span className="text-size-30 text-shadow-custom font-bold font-bobby text-pink-600 drop-shadow-lg">
            {newPrice}
          </span>
        </div>

        {/* Subtitle */}
        <h2 className="text-size-4 sm:text-size-7 font-secondary font-semibold text-landing-primary mb-spacing-1">
          {subtitle}
        </h2>

        {/* Paragraph */}
        <p className="text-size-3 sm:text-size-5 font-secondary font-normal text-black mb-spacing-2 ">
          {paragraph1}
        </p>
        <p className="text-size-3 sm:text-size-5 font-secondary font-normal text-black mb-spacing-2 ">
          {paragraph2}
        </p>
        <p className="text-size-3 sm:text-size-5 font-secondary font-normal text-black mb-spacing-2 ">
          {paragraph3}
        </p>

        {/* Button */}
        <a href={buttonLink} className="btn-landing-yellow">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CtaWithBgImage;
