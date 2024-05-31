import Introduction from "@/components/Introduction/Introduction";
import Benefits from "@/components/beneficts/beneficts";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import PaymentMethods from "@/components/paymentMethods/PaymentMethods";
import Testimonials from "@/components/testimonials/Testimonials";
import TwoCards from "@/components/twoCards/TwoCards";
import Image from "next/image";

export default function Home() {
  //----------------------------------------------
  // Texto de intoducción
  //----------------------------------------------

  const introductionText = `
  Nuestra misión es ayudarte a alcanzar tus objetivos de marketing digital.
  `;

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
      icon: "/images/servicios/campanas_express1.webp",
      title: "Campañas Express",
      description: "Lanzamos campañas de marketing rápidamente para maximizar tu impacto en el menor tiempo posible.",
      link: "/servicios/campanas-express",
    },
    {
      icon: "/images/servicios/creacion_posts.webp",
      title: "Creación de Post",
      description: "Desarrollamos contenido atractivo y relevante para tus redes sociales.",
      link: "/servicios/creacion-post",
    },
    {
      icon: "/images/servicios/manual_marca.webp",
      title: "Manual de marca",
      description: "Creamos manuales de marca personalizados para garantizar una identidad visual coherente.",
      link: "/servicios/manual-marca",
    },
    {
      icon: "/images/servicios/manejo_redes1.webp",
      title: "Manejo de Redes Sociales",
      description: "Gestionamos tus cuentas de redes sociales para aumentar tu presencia en línea.",
      link: "/servicios/manejo-redes-sociales",
    },
  ];

  //----------------------------------------------
  // Beneficts array y src img
  //----------------------------------------------

  const benefits = [
    "Equipo profesional y capacitado en marketing digital",
    "Estrategias personalizadas para cada cliente",
    "Uso de herramientas y tecnologías de última generación",
    "Resultados medibles y optimización continua",
    "Atención al cliente excepcional y soporte constante",
    "Precios competitivos con alto retorno de inversión",
];


  const imageSrc = "/images/benefits.webp";

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
      name: "Luis Sánchez",
      photo: "/images/test1.webp",
      text: "El equipo de Likeate transformó nuestra presencia en redes sociales. Hemos visto un aumento significativo en la interacción con nuestros clientes.",
    },
    {
      name: "Ana Torres",
      photo: "/images/test2.webp",
      text: "Gracias a Likeate, nuestra estrategia de marketing digital está más enfocada y eficiente. Las campañas de publicidad han sido un éxito.",
    },
    {
      name: "Pedro Ramírez",
      photo: "/images/test3.webp",
      text: "La creación de contenido y manejo de nuestras redes sociales por parte de Likeate ha sido excepcional. Su creatividad y profesionalismo son inigualables.",
    },
  ];

  

  //----------------------------------------------

  return (
    <main className="">
      <Hero />
      <Introduction text={introductionText} />
      <FeaturedServices services={services} />
      <Benefits benefits={benefits} imageSrc={imageSrc} />
      <TwoCards />
      <Testimonials testimonials={testimonials} />
      <CallToAction
        ctaText="¿Listo para hacer crecer tu negocio a través de las redes sociales?"
        buttonText="Contáctanos"
        buttonLink="/contacto"
      />
      
    </main>
  );
}
