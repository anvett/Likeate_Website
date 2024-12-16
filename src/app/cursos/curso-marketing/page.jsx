"use client";
import React from "react";
import CountdownTimer from "@/components/countdownTimer/CountdownTimer";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImage from "@/components/heroImage/heroImage";
import HeroBlack from "@/components/heroBlack/HeroBlack";
import AccordionContent from "@/components/accordionContent/AccordionContent";
import ImageGridRow from "@/components/imageGridRow/ImageGridRow";
import WhyCourseSection from "@/components/whyCourseSection/WhyCourseSection";
import BenefitsCourse from "@/components/benefitsCourse/BenefitsCourse";

export default function CursosEnVivo() {
  const entries = [
    {
      title: "MODULO 1",
      subtitle: "Bienvenida y Cambio de Mentalidad",
      description: "Establece una mentalidad positiva y lista para aprender nuevas habilidades.",
      details: [
        "Introducción al curso",
        "Importancia de la mentalidad adecuada",
        "Objetivos de aprendizaje",
      ],
    },
    {
      title: "MODULO 2",
      subtitle: "Introducción al Marketing Digital",
      description:
        "Domina los conceptos básicos del marketing digital para establecer una sólida base de conocimientos.",
      details: [
        "Conceptos clave del Marketing Digital",
        "Estrategias iniciales",
        "Plataformas y herramientas fundamentales",
      ],
    },
    {
      title: "MODULO 3",
      subtitle: "Community Manager",
      description:
        "Aprende a gestionar y crecer comunidades en redes sociales para diferentes marcas.",
      details: [
        "Roles del Community Manager",
        "Creación y gestión de contenido",
        "Manejo de crisis en redes sociales",
      ],
    },
    {
      title: "MODULO 4",
      subtitle: "Ventas con Facebook e Instagram (Orgánico)",
      description: "Optimiza tus ventas utilizando estrategias orgánicas en Facebook e Instagram.",
      details: [
        "Optimización de perfiles",
        "Creación de contenido efectivo",
        "Estrategias de engagement para ventas",
      ],
    },
    {
      title: "MODULO 5",
      subtitle: "Ventas con Tik Tok (Orgánico)",
      description:
        "Explora cómo vender de manera orgánica en Tik Tok con contenido viral y atractivo.",
      details: [
        "Introducción a Tik Tok",
        "Creación de contenido viral",
        "Estrategias de ventas en Tik Tok",
      ],
    },
    {
      title: "MODULO 6",
      subtitle: "Campañas publicitarias con Facebook e Instagram ADS",
      description:
        "Aprende a crear campañas publicitarias efectivas y optimizadas con Facebook e Instagram ADS.",
      details: [
        "Configuración de campañas",
        "Segmentación y presupuesto",
        "Optimización de anuncios",
      ],
    },
    {
      title: "MODULO 7",
      subtitle: "Whatsapp Marketing",
      description:
        "Aprovecha WhatsApp como herramienta de comunicación directa para aumentar ventas.",
      details: [
        "Estrategias de comunicación efectiva",
        "Automatización con WhatsApp Business",
        "Creación de campañas personalizadas",
      ],
    },
    {
      title: "MODULO 8",
      subtitle: "Inteligencia Artificial",
      description:
        "Descubre cómo usar la inteligencia artificial para potenciar tu estrategia de marketing.",
      details: [
        "Introducción a la IA en Marketing",
        "Herramientas de automatización",
        "Casos prácticos y estrategias avanzadas",
      ],
    },
  ];

  const items = [
    {
      title:
        "No tengo conocimientos en el mundo del marketing digital, siento que no voy a aprender.",
      description:
        "Entendemos que entrar en el mundo del marketing digital puede parecer abrumador, especialmente si no tienes conocimientos previos. ¡No necesitas experiencia previa, solo ganas de aprender y transformar tu negocio!",
    },
    {
      title: "No tengo tiempo para asistir a un curso en vivo",
      description:
        "Sabemos que el tiempo es valioso, especialmente para los emprendedores. Por eso, hemos creado Marketing Pro en un formato grabado que puedes seguir a tu propio ritmo.",
    },
    {
      title: "He intentado aprender marketing digital antes y no he tenido éxito.",
      description:
        "Es común sentirse frustrado después de intentos fallidos, pero Marketing Pro es diferente. Nuestro curso combina teoría y práctica, con estrategias comprobadas y herramientas fáciles de usar que garantizan resultados.",
    },
    {
      title: "No creo que el curso esté enfocado en mi negocio",
      description:
        "Entendemos tu preocupación, y por eso Marketing Pro está diseñado para ser altamente adaptable a diferentes tipos de negocios. Nuestro enfoque integral cubre una amplia gama de estrategias y herramientas de marketing digital que se pueden aplicar a cualquier industria.",
    },
  ];

  const benefitsData = [
    {
      imageSrc: "/images/cursos/marketing/benefits1.png",
      description: "Diseñar una estrategia digital para tu negocio",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits2.png",
      description: "Aprender a realizar campañas publicitarias en Meta",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits3.png",
      description: "Crear anuncios efectivos",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits4.png",
      description: "Realizar inversión en publicidad pagada de una manera eficiente",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits5.png",
      description: "Realizar estrategias sin pagar publicidad en Facebook, Instagram y Tik tok",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits6.png",
      description: "Cerrar ventas por whatsapp",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits7.png",
      description: "Crear un embudo de ventas para tu negocio",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits8.png",
      description: "Entender la estructura de las redes sociales",
    },
  ];

  return (
    <>
      {/* Countdown */}

      <section
        id="Countdown"
        className="flex flex-col items-center justify-center bg-black py-spacing-1 sm:py-spacing-2"
      >
        <h2 className="landing-subtitle pb-spacing-3 text-yellow-400 text-center">
          LA OFERTA DE 50% TERMINA EN
        </h2>
        <CountdownTimer
          targetTime={new Date("2024-12-31T23:59:59")}
          onExpire={() => console.log("Curso finalizado")}
        />
      </section>

      {/* Hero */}
      <HeroImage source="/images/cursos/marketing/hero-back.png" />

      {/* Benefits 1 */}
      <HeroImage source="/images/cursos/marketing/benefits-1.png" />

      {/* CTA 1 */}
      <div className="flex justify-start align-top ">
        <HeroImgBackg
          backgroundImage="/images/cursos/marketing/cta-1.jpeg"
          mainText="¡ESTE CURSO ESTA DISEÑADO PARA TI!"
          secondaryText="Domina el marketing digital desde cero y aumenta tus clientes sin necesidad de experiencia previa."
          buttonText="¡Unete al curso Ahora!"
          buttonLink="/cursos/marketing/registro"
        />
      </div>

      {/* Benefits 2 */}
      <HeroBlack />

      {/* Content Accordion */}
      <section
        id="Content"
        className="w-full flex justify-center bg-black pb-spacing-2 px-spacing-1 sm:px-spacing-2 lg:px-spacing-3"
      >
        <AccordionContent entries={entries} />
      </section>

      {/* Price offer section */}
      <section
        id="PriceOffer"
        className="flex flex-col items-center justify-center bg-black py-spacing-2 sm:py-spacing-3"
      >
        <HeroImage source="/images/cursos/marketing/price-offer.png" />
      </section>

      {/* Bonus section */}
      <section id="Bonus" className="bg-black min-h-screen p-spacing-3 sm:p-spacing-5">
        {/* Título Principal */}
        <h1 className="landing-title text-light text-center mb-spacing-1 sm:mb-spacing-4">BONOS</h1>

        <ImageGridRow
          leftImage="/images/cursos/marketing/bono1.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="E-BOOK"
        />
        <ImageGridRow
          leftImage="/images/cursos/marketing/bono2.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="PLANTILLA"
        />
        <ImageGridRow
          leftImage="/images/cursos/marketing/bono3.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="E-BOOK"
        />
      </section>

      {/* Why Buy Course Section */}
      <section id="WhyBuy" className="bg-[#FFF7F0] py-spacing-4 w-full flex flex-col items-center">
        <WhyCourseSection
          title="Esto es para ti si..."
          subtitle="Te identificas con estas frases"
          items={items}
        />
      </section>

      {/* Benefits 3 Section */}
      <section id="Benefits" className="bg-black py-spacing-3 sm:py-spacing-5">
        <BenefitsCourse
          title="Este curso 🚫"
          subtitle="NO ES PARA TI"
          message="Si no quieres conseguir los siguientes resultados"
          benefits={benefitsData}
        />
      </section>
    </>
  );
}
