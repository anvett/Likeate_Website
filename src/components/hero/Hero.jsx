import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/images/background1.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-spacing-1 font-bold text-light text-size-10  font-primary">¡Bienvenidos!</h1>
            <h2 className="mb-spacing-1 font-semibold text-light text-size-6 font-primary">Soy Ericka</h2>
            <h3 className="mb-spacing-1 font-semibold  text-light text-size-4 font-primary">Fundadora de Likeate</h3>
            <p className="mb-spacing-1 pb-spacing-2 font-primary text-light text-size-3">
              Likeate es una empresa de marketing digital especializada en la creación de contenido
              para redes sociales.
            </p>
            <button className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom  hover:bg-accent hover:text-primary ">
              Más Información
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;