import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryLinks = ({ title, subtitle, items }) => {
  return (
    <section className="py-spacing-6 bg-services text-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="h1-custom mb-spacing-3 text-center ">{title}</h1>
        <h3 className="h3-custom mb-spacing-6 text-center ">{subtitle} </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg text-center bg-gradient-primary flex flex-col justify-between h-full"
            >
              <div>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="mx-auto mb-spacing-2 object-cover rounded-lg"
                />
                <h3 className="h2-custom mb-spacing-2">{item.title}</h3>
                <p className="p-custom mb-spacing-2">{item.description}</p>
              </div>
              <div className="mt-auto pb-spacing-3">
                <Link
                  href={item.link}
                  className="inline-block bg-primary text-secondary font-secondary font-semibold px-6 py-3 rounded-full btn-custom hover:bg-secondary hover:text-primary"
                >
                  {item.linkText}
                </Link>
              </div>
              <div className="mt-auto pb-spacing-3">
                <h2 className="text-dark font-bold text-size-8 font-primary mb-spacing-2">{item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;
