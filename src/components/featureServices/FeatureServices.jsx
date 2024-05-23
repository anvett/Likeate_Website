import React from 'react';


const FeaturedServices = ({ services }) => {
  return (
    <section className="py-spacing-2 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-primary text-size-7 font-bold text-dark mb-6 text-center py-spacing-2">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-1">
          {services.map((service, index) => (
            <div key={index} className="bg-primary shadow-md rounded-lg p-spacing-1 text-center">
              <div className="flex justify-center mb-4">
                <img src={service.icon} alt={`${service.title} icon`} className="w-spacing-4 h-spacing-4 " />
              </div>
              <h3 className="font-secondary font-bold text-size-3 text-accent mb-spacing-1">{service.title}</h3>
              <p className="font-secondary text-size-1 text-secondary mb-4 pb-spacing-2">{service.description}</p>
              <a href={service.link} className="inline-block bg-accent text-primary font-bold py-2 px-4 rounded-full hover:bg-dark">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
