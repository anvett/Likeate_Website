import React from "react";
import CategoryLinks from "../../components/categoryLinks/CategoryLinks";

export default function Cursos() {
  const cursosItems = [
    {
      imageSrc: "/images/servicios/cursos_grabados.webp",
      title: "Cursos Grabados",
      description: "Accede a nuestros cursos grabados",
      link: "/cursos/cursos-grabados",
      linkText: "Ver todos los cursos",
      price: "Desde $9.99",
    },
    {
      imageSrc: "/images/servicios/cursos_en_vivo.webp",
      title: "Cursos en Vivo",
      description: "Accede a nuestros cursos online",
      link: "/cursos/cursos-en-vivo",
      linkText: "Ver todos los cursos",
      price: "Desde $39.99",
    },
  ];
  return (
    <div>
      <CategoryLinks title="Nuestros Cursos" subtitle="Ofrecemos cursos online y grabados para que adquieras y actualices tus conocimientos" items={cursosItems} />;
    </div>
  );
}
