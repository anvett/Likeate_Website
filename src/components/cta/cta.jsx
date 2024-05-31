import React from 'react';

const CallToAction = ({ ctaText, buttonText, buttonLink }) => {
  return (
    <section className="py-spacing-6 bg-dark text-light text-center">
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-primary text-size-4 mb-spacing-2 sm:text-size-7">{ctaText}</h2>
        <a href={buttonLink} className="bg-secondary text-primary font-bold px-6 py-3 rounded-full btn-custom  hover:bg-accent hover:text-primary ">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
