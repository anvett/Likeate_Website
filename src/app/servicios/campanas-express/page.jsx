import React from 'react'
import TemplatePage from '../../../components/templatePage/TemplatePage'

export default function CampanasExpress() {
  const serviceDetails = {
    title: "Campañas Express",
    description: "Lanzamos campañas de marketing rápidamente para maximizar tu impacto en el menor tiempo posible.",
    properties: [
      "Implementación rápida",
      "Resultados efectivos",
      "Estrategias personalizadas",
      "Reportes detallados"
    ],
    mediaSrc: "/images/servicios/campanas_express.webp",
    mediaType: "image", // o "video"
    price: "$500",
    buttonText: "Contratar Ahora",
    buttonLink: "/contacto",
  };
  return (
    <TemplatePage {...serviceDetails} />
  )
}
