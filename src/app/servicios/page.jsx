import React from "react";
import CategoryLinks from "../../components/categoryLinks/CategoryLinks";

export default function ServicesPage() {
  //----------------------------------------------
  // This is the data that will be used to render the services page
  //----------------------------------------------

  const serviciosItems = [
    {
      imageSrc: "/images/servicios/campanas_express.webp",
      title: "Campañas Express",
      description:
        "Lanzamos campañas de marketing rápidamente para maximizar tu impacto en el menor tiempo posible.",
      link: "/servicios/campanas-express",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/creacion_posts2.webp",
      title: "Creación de Post",
      description: "Desarrollamos contenido atractivo y relevante para tus redes sociales.",
      link: "/servicios/creacion-post",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/manual_marca.webp",
      title: "Manual de marca",
      description:
        "Creamos manuales de marca personalizados para garantizar una identidad visual coherente.",
      link: "/servicios/manual-marca",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/manejo_redes1.webp",
      title: "Manejo de Redes Sociales",
      description: "Gestionamos tus cuentas de redes sociales para aumentar tu presencia en línea.",
      link: "/servicios/manejo-redes-sociales",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/logotipos.webp",
      title: "Logotipos",
      description:
        "Diseñamos logotipos únicos y memorables que representan la identidad de tu marca.",
      link: "/servicios/logotipos",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/stickers.webp",
      title: "Stickers Personalizados",
      description: "Creación de stickers personalizados para promociones y branding.",
      link: "/servicios/stickers-personalizados",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/paginas_web.webp",
      title: "Páginas Web",
      description: "Desarrollamos páginas web profesionales y optimizadas.",
      link: "/servicios/paginas-web",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/manejo_tiktok.webp",
      title: "Manejo de TikTok",
      description: "Estrategias para hacer crecer tu cuenta de TikTok.",
      link: "/servicios/manejo-tiktok",
      linkText: "Ver más",
    },
    {
      imageSrc: "/images/servicios/tarjeta_digital.webp",
      title: "Tarjeta Digital",
      description: "Creamos tarjetas de presentación digitales innovadoras.",
      link: "/servicios/tarjeta-digital",
      linkText: "Ver más",
    },
  ];

  return (
    <div className="bg-services"
      
    >
      <CategoryLinks
        title="Nuestros Servicios"
        subtitle="Somos especialistas con varios años de experiencia"
        items={serviciosItems}
      />
      ;
    </div>
  );
}
