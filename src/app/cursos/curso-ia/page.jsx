"use client";
import React from "react";
import CountdownTimer from "@/components/countdownTimer/CountdownTimer";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImage from "@/components/heroImage/heroImage";
import HeroBlack from "@/components/heroBlack/HeroBlack";
import AccordionContent from "@/components/accordionContent/AccordionContent";
import ImageGridRow from "@/components/imageGridRow/ImageGridRow";
import WhyCourseSection from "@/components/whyCourseSection/WhyCourseSection";
import CtaWithBgImage from "@/components/ctaWithBgImage/CtaWithBgImage";
import ResumeCourse from "@/components/resumeCourse/ResumeCourse";
import LinkCourses from "@/components/linkCourses/LinkCourses";
import BenefitsCourseSlider from "@/components/benefitsCourseSlider/BenefitsCourseSlider";
import Image from "next/image";
import HeroImgBackgWithLogo from "@/components/heroImgBackgWithLogo/HeroImgBackgWithLogo";


export default function CursosEnVivo() {

  //--------------------------------------------------------------------------------
  // Course Content 
  //--------------------------------------------------------------------------------
  const contentEntries = [
    {
      title: "MÓDULO 1",
      subtitle: "Bienvenida y Cambio de Mentalidad",
      description: "Establece una mentalidad positiva y lista para aprender nuevas habilidades.",
      details: [
        "Introducción al curso",
        "Importancia de la mentalidad adecuada",
        "Objetivos de aprendizaje",
      ],
    },
    {
      title: "MÓDULO 2",
      subtitle: "Introducción al Marketing Digital",
      description: "Domina los conceptos básicos del marketing digital para establecer una sólida base de conocimientos.",
      details: [
        "Conceptos clave del Marketing Digital",
        "Estrategias iniciales",
        "Plataformas y herramientas fundamentales",
      ],
    },
    {
      title: "MÓDULO 3",
      subtitle: "Community Manager",
      description: "Aprende a gestionar y crecer comunidades en redes sociales para diferentes marcas.",
      details: [
        "Roles del Community Manager",
        "Creación y gestión de contenido",
        "Manejo de crisis en redes sociales",
      ],
    },
    {
      title: "MÓDULO 4",
      subtitle: "Ventas con Facebook e Instagram (Orgánico)",
      description: "Optimiza tus ventas utilizando estrategias orgánicas en Facebook e Instagram.",
      details: [
        "Optimización de perfiles",
        "Creación de contenido efectivo",
        "Estrategias de engagement para ventas",
      ],
    },
    {
      title: "MÓDULO 5",
      subtitle: "Ventas con TikTok (Orgánico)",
      description: "Explora cómo vender de manera orgánica en TikTok con contenido viral y atractivo.",
      details: [
        "Introducción a TikTok",
        "Creación de contenido viral",
        "Estrategias de ventas en TikTok",
      ],
    },
    {
      title: "MÓDULO 6",
      subtitle: "Campañas publicitarias con Facebook e Instagram ADS",
      description: "Aprende a crear campañas publicitarias efectivas y optimizadas con Facebook e Instagram ADS.",
      details: [
        "Configuración de campañas",
        "Segmentación y presupuesto",
        "Optimización de anuncios",
      ],
    },
    {
      title: "MÓDULO 7",
      subtitle: "WhatsApp Marketing",
      description: "Aprovecha WhatsApp como herramienta de comunicación directa para aumentar ventas.",
      details: [
        "Estrategias de comunicación efectiva",
        "Automatización con WhatsApp Business",
        "Creación de campañas personalizadas",
      ],
    },
    {
      title: "MÓDULO 8",
      subtitle: "Inteligencia Artificial",
      description: "Descubre cómo usar la inteligencia artificial para potenciar tu estrategia de marketing.",
      details: [
        "Introducción a la IA en Marketing",
        "Herramientas de automatización",
        "Casos prácticos y estrategias avanzadas",
      ],
    },
  ];
  
  //--------------------------------------------------------------------------------
  // Why Buy Section
  //--------------------------------------------------------------------------------

  const items = [
    {
      title: "Prompts personalizados para maximizar resultados",
      description:
        "Aprenderás a crear prompts efectivos en ChatGPT y otras herramientas de IA para alcanzar objetivos específicos de tu negocio y conectar profundamente con tu audiencia.",
    },
    {
      title: "Estrategias de marketing y branding optimizadas con IA",
      description:
        "Descubre cómo construir una identidad de marca sólida, redactar anuncios y copys persuasivos, y crear campañas impactantes que ahorren tiempo y recursos mientras aumentas tu alcance.",
    },
    {
      title: "Plan de contenidos y calendario estratégico",
      description:
        "Diseñarás un plan de contenidos mensual y un calendario de publicaciones estratégicas que optimicen tu visibilidad y organización en redes sociales.",
    },
    {
      title: "Control completo de tu contenido y campañas",
      description:
        "Desde la planificación hasta el análisis de resultados, dominarás cada aspecto del marketing digital para impulsar el crecimiento continuo de tu negocio.",
    },
  ];
  
  //--------------------------------------------------------------------------------
  // Benefits Section
  //--------------------------------------------------------------------------------

  const benefitsData = [
    {
      imageSrc: "/images/cursos/curso-ia/benefits1.jpeg",
      description: "Ahorro de tiempo en la creación de contenido gracias a herramientas automatizadas",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits2.jpeg",
      description: "Capacidad de crear contenido personalizado y relevante para tu audiencia",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits3.jpeg",
      description: "Mejora en la eficiencia de las campañas de marketing",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits4.jpeg",
      description: "Construcción de una marca poderosa y diferenciada",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits5.jpeg",
      description: "Estrategias efectivas sin necesidad de invertir en publicidad paga en Facebook, Instagram y TikTok",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits6.jpeg",
      description: "Habilidad para cerrar ventas directamente por WhatsApp",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits7.jpeg",
      description: "Creación de un embudo de ventas para maximizar conversiones",
    },
    {
      imageSrc: "/images/cursos/curso-ia/benefits8.jpeg",
      description: "Entendimiento claro de la estructura de las redes sociales y cómo aprovecharlas",
    },
  ];
  

  //--------------------------------------------------------------------------------
  // FAQ Section
  //--------------------------------------------------------------------------------

  const faqEntries = [
    {
      title: "¿Cómo accedo al producto?",
      subtitle: "Detalles sobre el acceso",
      details: [
        "Recibirás el acceso por correo electrónico después de la compra.",
        "Podrás acceder al contenido o descargarlo en cualquier dispositivo: computadora, smartphone o tablet.",
        "También puedes ingresar al producto desde la página de Hotmart, iniciando sesión y yendo a 'Mis compras'.",
      ],
    },
    {
      title: "¿Tengo acceso para siempre?",
      subtitle: "Acceso al contenido",
      details: [
        "Sí, el acceso es de por vida, incluyendo todas las actualizaciones futuras.",
        "No necesitas realizar pagos mensuales adicionales después de la compra.",
      ],
    },
    {
      title: "¿Es un solo pago?",
      subtitle: "Estructura de pagos",
      details: [
        "Sí, el curso tiene un único pago que te otorga acceso completo.",
        "Si compras en oferta y el curso se actualiza, tendrás los mismos derechos sin pagar más.",
      ],
    },
    {
      title: "¿Qué incluye el curso?",
      subtitle: "Detalles del contenido",
      details: [
        "8 módulos completos con más de 120 lecciones.",
        "Acceso de por vida al curso y a sus actualizaciones.",
        "Bonos especiales y acceso a la comunidad exclusiva.",
      ],
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
          targetTime={new Date("2025-01-31T23:59:59")}
          onExpire={() => console.log("Curso finalizado")}
        />
      </section>

      {/* Hero */}
      <HeroImage source="/images/cursos/curso-ia/hero.png" />

      {/* Benefits 1 */}
      <HeroImage source="/images/cursos/curso-ia/benefits-1.png" />

      {/* CTA 1 */}
      <div className="flex flex-col justify-start align-top ">
        <HeroImgBackgWithLogo
          backgroundImage="/images/cursos/marketing/cta-1.jpeg"
          mainText="¡ESTE CURSO ESTA DISEÑADO PARA TI!"
          secondaryText="Dirigido a emprendedores, creadores de contenido y profesionales marketing que buscan innovar, crecer diferenciarse con IA."
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
        <AccordionContent entries={contentEntries} idPrefix="content" />
      </section>

      {/* Price offer section */}
      <section
        id="PriceOffer1"
        className="flex flex-col items-center justify-center bg-black py-spacing-2 sm:py-spacing-3"
      >
        <CtaWithBgImage
          backgroundImage="/images/cursos/marketing/back_cta2.jpeg"
          title="TODO ESTO LO LLEVARÁS AL PRECIO ESPECIAL"
          subtitle="SOLO POR SER PARTE DEL LANZAMIENTO"
          oldPrice="$34"
          newPrice="$17"
          paragraph1="Esta oferta estará disponible solo por 24 horas. Después de esa fecha, "
          paragraph2="¡El precio regresará a la normalidad!"
          paragraph3="¡Luego no digas que no te lo dije!"
          buttonText="Compra ahora al mejor precio"
          buttonLink="#"
        />
      </section>

      {/* Bonus section */}
      <section id="Bonus" className="bg-black min-h-screen p-spacing-3 sm:p-spacing-5">
        <h1 className="landing-title text-light text-center mb-spacing-1 sm:mb-spacing-4">BONOS</h1>

        <ImageGridRow
          leftImage="/images/cursos/curso-ia/bono1.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="E-BOOK"
        />
        <ImageGridRow
          leftImage="/images/cursos/curso-ia/bono2.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="PLANTILLA"
        />
        <ImageGridRow
          leftImage="/images/cursos/curso-ia/bono3.png"
          rightImage="/images/cursos/marketing/gift.png"
          rightTitle="E-BOOK"
        />
      </section>

      {/* Why Buy Course Section */}
      <section id="WhyBuy" className="bg-[#FFF7F0] py-spacing-4 w-full flex flex-col items-center">
        <WhyCourseSection
          title="¿QUÉ GANARÁS AL UNIRTE A ESTE WORKSHOP?"
          // subtitle="Te identificas con estas frases"
          items={items}
        />
      </section>

      {/* Benefits 3 Section */}
      <section id="Benefits" className="bg-black py-spacing-3 sm:py-spacing-5">
        <BenefitsCourseSlider
          title="BENEFICIOS DE USAR"
          subtitle="IA PARA TU NEGOCIO"
          message="Si no quieres conseguir los siguientes resultados"
          benefits={benefitsData}
        />
      </section>

      {/* Price offer 2 section */}
      <section
        id="PriceOffer2"
        className="flex flex-col items-center justify-center bg-black py-spacing-2 sm:py-spacing-3"
      >
        <CtaWithBgImage
          backgroundImage="/images/cursos/marketing/back_cta2.jpeg"
          title="TODO ESTO LO LLEVARÁS AL PRECIO ESPECIAL"
          subtitle="SOLO POR SER PARTE DEL LANZAMIENTO"
          oldPrice="$34"
          newPrice="$17"
          paragraph1="Esta oferta estará disponible solo por 24 horas. Después de esa fecha, "
          paragraph2="¡El precio regresará a la normalidad!"
          paragraph3="¡Luego no digas que no te lo dije!"
          buttonText="Compra ahora al mejor precio"
          buttonLink="#"
        />
      </section>

      {/* Course Resume */}
      <section id="CourseResume" className="bg-black py-spacing-3 sm:py-spacing-5 ">
        <ResumeCourse
          title="EN RESUMEN, CON EL CURSO"
          subtitle="RECIBIRÁS:"
          bulletPoints={[
            "8 módulos completos con más de 120 lecciones.",
            "Acceso al curso y actualizaciones para toda la vida.",
            "Acceso a la comunidad exclusiva.",
            "Todos los bonos especiales mencionados anteriormente.",
          ]}
          buttonText="¡COMPRA AHORA!"
          buttonLink="/compra"
          imageSrc="/images/cursos/marketing/resume.png"
        />
      </section>

      {/* FAQ Section */}
      <section className="py-spacing-6 bg-[#FFF7F0] text-light">
        <div className="max-w-7xl mx-auto px-spacing-2 lg:px-spacing-4">
          <h2 className="text-center font-bobby landing-title text-btn-cta-yellow mb-spacing-6">
            Preguntas Frecuentes
          </h2>

          <AccordionContent entries={faqEntries} idPrefix="faq" />
        </div>
      </section>

      {/* Link Courses */}

      {/* <section className="bg-black py-spacing-3 sm:py-spacing-5">
        <LinkCourses
          backgroundImage="/images/cursos/marketing/link-courses-back.jpeg"
          imageSrc1="/images/cursos/marketing/link-course1.png"
          oldPrice1="$74"
          newPrice1="$37"
          buttonLink1="/compra"
          buttonText1="¡COMPRA AHORA AL MEJOR PRECIO!"
          imageSrc2="/images/cursos/marketing/link-course2.png"
          oldPrice2="$34"
          newPrice2="$17"
          buttonLink2="/compra"
          buttonText2="¡COMPRA AHORA AL MEJOR PRECIO!"
        />
      </section> */}
    </>
  );
}
