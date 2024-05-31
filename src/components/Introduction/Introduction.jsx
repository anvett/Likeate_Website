import React from "react";

export default function Introduction({ text }) {
  return (
    <section className="py-spacing-3 bg-primary">
      <div className="max-w-7xl mx-auto px-spacing-4 py-spacing-4">
        <h2 className="font-primary text-size-7 font-bold text-light mb-6 text-center sm:text-size-4 lg:text-size-7 py-spacing-1">
          Sobre Nosotros
        </h2>
        <p className="font-secondary  text-light text-size-2 text-center sm:px-spacing-2 sm:text-center sm:text-size-3 lg:text-size-3 lg:text-center lg:px-spacing-3   ">
          {text}
        </p>
      </div>
    </section>
  );
}
