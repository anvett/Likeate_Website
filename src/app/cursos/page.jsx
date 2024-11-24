import React from "react";
import CategoryLinks from "../../components/categoryLinks/CategoryLinks";

export default function Cursos() {
  const cursosItems = [
    {
      imageSrc: "/images/cursos/curso_marketing.png",
      title: "Curso de Marketing Desde Cero",
      description: "Aprende a crear estrategias de marketing digital",
      link: "/cursos/curso-marketing",
      linkText: "Ver detalles del curso",
      price: "Desde $59.99",
    },
    {
      imageSrc: "/images/cursos/curso_canva_capcut.png",
      title: "Curso de Canva y Capcut",
      description: "Aprende a crear contenido visual y audiovisual",
      link: "/cursos/curso-canva",
      linkText: "Ver detalles del curso",
      price: "Desde $39.99",
    },
    {
      imageSrc: "/images/cursos/curso_ia.png",
      title: "Workshop de Marca y Ventas con IA",
      description: "Aprende a utilizar la inteligencia artificial en tu estrategia de marketing",
      link: "/cursos/curso-ia",
      linkText: "Ver detalles del curso",
      price: "Desde $39.99",
    },
  ];
  return (
    <div>
      <CategoryLinks title="Nuestros Cursos" subtitle="Ofrecemos cursos online y grabados para que adquieras y actualices tus conocimientos" items={cursosItems} />;
    </div>
  );
}
