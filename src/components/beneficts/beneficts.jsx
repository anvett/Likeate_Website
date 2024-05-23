import React from 'react';

const Benefits = ({ benefits, imageSrc }) => {
  return (
    <section className="py-spacing-3 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="font-primary text-size-7 text-light mb-6 text-center lg:text-left">Beneficios de Contratarnos</h2>
          <ul className="list-disc list-inside space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="font-secondary text-size-3 lg:text-left  sm:text-center   ">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={imageSrc} alt="Beneficios de Likeate" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
