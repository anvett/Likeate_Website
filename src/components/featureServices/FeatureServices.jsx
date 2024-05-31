import React from "react";

const FeaturedServices = ({ services }) => {
  return (
    <section className="py-spacing-6 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-primary text-size-7 font-bold text-dark mb-6 text-center py-spacing-2">
          Servicios Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-1">
          {services.map((service, index) => (
            <div key={index} className="bg-primary shadow-md rounded-lg p-spacing-1 flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-spacing-14 h-spacing-14 rounded mb-4"
                />
                <h3 className="font-secondary font-bold text-size-3 text-light mb-spacing-1">
                  {service.title}
                </h3>
                <p className="font-secondary text-size-1 text-secondary mb-4 pb-spacing-2">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href={service.link}
                  className="inline-block bg-accent text-primary font-bold px-6 py-3 rounded-full btn-custom hover:bg-secondary hover:text-primary"
                >
                  Añadir al carrito
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-spacing-4">
          <button className="bg-primary text-light text-size-1 sm:text-size-2 font-bold px-6 py-3 rounded-full btn-custom hover:bg-secondary hover:text-primary">
            <a href="/servicios">Ver todos los productos y servicios</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
