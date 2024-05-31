import React from 'react';
import CategoryLinks from '../../components/categoryLinks/CategoryLinks';

const asesoriasItems = [
  {
    imageSrc: "/images/servicios/asesoria1a1.webp",
    title: "Asesoría 1 a 1",
    description: "Preguntas y respuestas en tiempo real.",
    link: "/asesorias/asesoria-1a1",
    linkText: "Agenda una fecha",
    price: "$14.99",
  },
  {
    imageSrc: "/images/servicios/diagnostico_cuenta.webp",
    title: "Diagnóstico de Cuenta",
    description: "Análisis detallado de tu perfil",
    link: "/asesorias/diagnostico-cuenta",
    linkText: "Agenda una fecha",
    price: "$50.00",
  },
];

const Asesorias = () => {
  return <CategoryLinks title="Nuestras Asesorías" subtitle="Brindamos asesorías personalizadas" items={asesoriasItems} />;
};

export default Asesorias;
