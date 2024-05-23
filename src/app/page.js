import Introduction from "@/components/Introduction/Introduction";
import Benefits from "@/components/beneficts/beneficts";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  //----------------------------------------------
  // Texto de intoducción
  //----------------------------------------------

  const introductionText = `
  Likeate es una empresa de marketing digital especializada en la creación de contenido para redes sociales.
  `;

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
      icon: "/images/campañas-express.webp",
      title: "Campañas Express",
      description: "Lanzamos campañas de marketing rápidamente para maximizar tu impacto en el menor tiempo posible.",
      link: "/servicios/campañas-express",
    },
    {
      icon: "/images/creacion-post.webp",
      title: "Creación de Post",
      description: "Desarrollamos contenido atractivo y relevante para tus redes sociales.",
      link: "/servicios/creacion-post",
    },
    {
      icon: "/images/logotipos.webp",
      title: "Diseño de Logotipos",
      description: "Creamos logotipos únicos que representan la identidad de tu marca.",
      link: "/servicios/logotipos",
    },
    {
      icon: "/images/manejo-redes-sociales.webp",
      title: "Manejo de Redes Sociales",
      description: "Gestionamos tus cuentas de redes sociales para aumentar tu presencia en línea.",
      link: "/servicios/manejo-redes-sociales",
    },
  ];

  //----------------------------------------------
  // Beneficts array y src img
  //----------------------------------------------

  const benefits = [
    "Equipo profesional y capacitado",
    "Uso de productos de limpieza ecológicos",
    "Horarios flexibles y adaptables",
    "Resultados garantizados",
    "Atención al cliente excepcional",
    "Precios competitivos",
  ];

  const imageSrc = "/images/benefits.webp";

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
      name: "Carlos Pérez",
      photo: "/images/test1.webp",
      text: "El servicio de Ecuacleaner es excepcional. Mi oficina nunca ha estado tan limpia y ordenada.",
    },
    {
      name: "María Gómez",
      photo: "/images/test2.webp",
      text: "Contraté Ecuacleaner para la limpieza de mi hogar y quedé muy satisfecha con los resultados. ¡Muy recomendados!",
    },
    {
      name: "Jorge Martínez",
      photo: "/images/test3.webp",
      text: "Los mejores en el negocio. Mi auto quedó impecable después del servicio de limpieza express de Ecuacleaner.",
    },
  ];

  return (
    <main className="">
      <Hero />
      <Introduction text={introductionText} />
      <FeaturedServices services={services} />
      <Benefits benefits={benefits} imageSrc={imageSrc} />
      <Testimonials testimonials={testimonials} />
      <CallToAction
        ctaText="¿Listo para una limpieza impecable?"
        buttonText="Contáctanos"
        buttonLink="/contacto"
      />
    </main>
  );
}
