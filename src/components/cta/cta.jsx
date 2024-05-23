import React from 'react';

const CallToAction = ({ ctaText, buttonText, buttonLink }) => {
  return (
    <section className="py-spacing-3 bg-dark text-light text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-primary text-size-7 mb-spacing-2">{ctaText}</h2>
        <a href={buttonLink} className="btn btn-lg bg-primary hover:bg-accent-hover text-light px-8 py-3 rounded-full">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
