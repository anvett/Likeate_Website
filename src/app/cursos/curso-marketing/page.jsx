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
import CtaWithBgImage from "@/components/ctaWithBgImage/CtaWithBgImage";
import ResumeCourse from "@/components/resumeCourse/ResumeCourse";
import LinkCourses from "@/components/linkCourses/LinkCourses";
import BenefitsCourseSlider from "@/components/benefitsCourseSlider/BenefitsCourseSlider";
import HeroBlack2 from "@/components/heroBlack/HeroBlack2";
import AudienceSection from "@/components/audienceSection/audienceSection";
import FooterLanding from "@/components/footer/footerLanding";

export default function CursosEnVivo() {
  const contentEntries = [
    {
      title: "MÓDULO 1",
      subtitle: "Bienvenida y cambio de mentalidad",
      description: "Establece las bases para aprender con la mentalidad adecuada.",
      details: [
        "Bienvenida",
        "Cambio de mentalidad",
      ],
    },
    {
      title: "MÓDULO 2",
      subtitle: "Introducción al Marketing Digital",
      description: "Comprende los fundamentos del marketing digital moderno.",
      details: [
        "Introducción al Marketing Digital",
      ],
    },
    {
      title: "MÓDULO 3",
      subtitle: "Estrategia de Marketing Digital",
      description: "Desarrolla una estrategia digital completa desde cero.",
      details: [
        "Estrategia de Marketing y Ecosistema Digital",
        "Embudo de prospección",
        "Introducción al Tráfico Orgánico y Pago",
        "Tráfico Orgánico",
        "Tráfico Pago",
        "Público Objetivo",
        "Buyer persona",
        "Método AIDA",
        "Niveles de conciencia TOFU-MOFU-BOFU",
        "Copywriting",
        "Copy con IA",
        "Gatillos Mentales",
      ],
    },
    {
      title: "MÓDULO 4",
      subtitle: "Community Manager",
      description: "Domina herramientas y estrategias para gestionar comunidades digitales.",
      details: [
        "Community Manager",
        "Herramientas de diseño",
        "Canva - Bg Remove",
        "Herramientas de publicación",
        "¿Dónde encontrar material para publicar?",
        "Tipos de contenido",
        "Planeación de contenidos (formatos)",
        "Frecuencia de publicación",
        "Programación de contenido",
        "Ecosistema de ventas",
      ],
    },
    {
      title: "MÓDULO 5",
      subtitle: "Ventas con Facebook e Instagram (Orgánico)",
      description: "Aprovecha tus redes sociales para vender sin pagar publicidad.",
      details: [
        "Instagram algoritmos y formatos",
        "Marca Personal VS Marca Comercial",
        "Optimización de perfil de Instagram",
        "Creación de Wa-link",
        "Creación de página de enlaces con beacons",
        "Historias destacadas",
        "Tipos de feed",
        "Tipos de cuentas",
        "Introducción al plan estratégico",
        "Estrategias de Historias 3V",
        "Fórmula CCV",
        "Fórmula detrás de cámaras",
        "Estrategia de testimonios",
        "Estrategia de storytelling",
        "Estrategia Lifestyle",
        "Stickers",
        "Humanización de marca y procesos",
        "Penalizaciones",
        "Tips de interacción",
        "Hashtags",
        "Buscando contenido para utilizar",
        "Importancia de anuncios pagos",
        "Facebook orgánico",
        "Estrategia de grupos en Facebook",
        "Marketplace",
      ],
    },
    {
      title: "MÓDULO 6",
      subtitle: "Ventas con Tik Tok (Orgánico)",
      description: "Conquista TikTok y aprende técnicas efectivas de venta con contenido viral.",
      details: [
        "TikTok Orgánico - ¿Qué no debemos hacer?",
        "SEO de TikTok",
        "Pasos para realizar SEO",
        "Testeo TikTok",
        "Estrategia TikTok",
        "¿Dónde descargar contenido sin marca de agua?",
      ],
    },
    {
      title: "MÓDULO 7",
      subtitle: "Facebook e Instagram ADS",
      description: "Aprende a crear campañas de anuncios pagados en Meta ADS.",
      details: [
        "META ADS",
        "Cuenta personal vs Cuenta Comercial",
        "Activos Meta ADS",
        "Fan page",
        "Orden de creación",
        "Business manager",
        "Confirmación de correo electrónico",
        "Creación de cuenta publicitaria y Método de pago",
        "Vinculación de WhatsApp Business",
        "Vinculación de activos",
        "Objetivos de campañas",
        "Estructura de campaña",
        "Presupuesto de campaña",
        "Tipos de segmentación",
        "Tipos de campañas",
        "Configuración de campañas",
        "Testeo y optimización de campañas",
        "Métricas de campañas",
        "¿Cómo evitar bloqueos en la cuenta publicitaria?",
        "Spam o Fraude",
      ],
    },
    {
      title: "MÓDULO 8",
      subtitle: "Whatsapp Marketing",
      description: "Convierte WhatsApp en una herramienta poderosa de ventas.",
      details: [
        "Introducción Whatsapp Business",
        "Estrategia de WhatsApp Business",
        "Configuración de WhatsApp Business",
        "Catálogo de WhatsApp Business",
        "Mensajes automatizados",
        "Mensajes automatizados (práctica)",
        "Estrategia de contactos",
        "Grupos de WhatsApp",
        "Listas de difusión",
        "Canal de WhatsApp",
        "¿Por qué vía hago las ventas?",
        "Estrategia de estados de WhatsApp",
        "Cierre de ventas",
      ],
    },
    {
      title: "MÓDULO 9",
      subtitle: "Inteligencia Artificial",
      description: "Incorpora IA a tu estrategia y automatiza procesos para vender más.",
      details: [
        "Introducción a la Inteligencia Artificial",
        "Importancia y utilidad de la IA",
        "Introducción a ChatGPT",
        "Funciones - Aplicaciones - Limitaciones",
        "¿Qué es un Prompt?",
        "Importancia de un buen prompt",
        "¿Cómo hacer un prompt?",
        "Creación y recorrido de ChatGPT",
        "ChatGPT para campañas en Facebook ADS",
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
      imageSrc: "/images/cursos/marketing/benefits1.jpeg",
      description: "Diseñar una estrategia digital para tu negocio",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits2.jpeg",
      description: "Aprender a realizar campañas publicitarias en Meta",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits3.jpeg",
      description: "Crear anuncios efectivos",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits4.jpeg",
      description: "Realizar inversión en publicidad pagada de una manera eficiente",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits5.jpeg",
      description: "Realizar estrategias sin pagar publicidad en Facebook, Instagram y Tik tok",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits6.jpeg",
      description: "Cerrar ventas por whatsapp",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits7.jpeg",
      description: "Crear un embudo de ventas para tu negocio",
    },
    {
      imageSrc: "/images/cursos/marketing/benefits8.jpeg",
      description: "Entender la estructura de las redes sociales",
    },
  ];

  //--------------------------------------------------------------------------------
  // FAQ Section
  //--------------------------------------------------------------------------------

  const faqEntries = [
    {
      title: "¿Qué incluye el curso?",
      subtitle: "Detalles del contenido del curso",
      details: [
        "El curso incluye 8 módulos completos.",
        "Más de 120 lecciones en video.",
        "Acceso de por vida a actualizaciones.",
        "Bonos especiales y acceso a la comunidad exclusiva.",
      ],
    },
    {
      title: "¿Cómo accedo al curso?",
      subtitle: "Pasos para el acceso",
      details: [
        "Después de la compra, recibirás un correo con las instrucciones.",
        "Puedes acceder desde cualquier dispositivo con conexión a internet.",
        "Soporte técnico disponible para resolver cualquier problema.",
      ],
    },
    {
      title: "¿Puedo obtener un reembolso?",
      subtitle: "Política de reembolsos",
      details: [
        "Sí, ofrecemos una garantía de reembolso de 7 días.",
        "Debes solicitarlo dentro de los primeros 7 días después de la compra.",
        "El reembolso se procesará en un máximo de 5 días hábiles.",
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
          targetTime={new Date("2025-04-31T23:59:59")}
          onExpire={() => console.log("Curso finalizado")}
        />
      </section>

      {/* Hero */}

      <HeroImage source="/images/cursos/marketing/backcta1.jpg" />

      {/* Benefits 1 */}

      <HeroBlack />

      {/* CTA 1 */}

      <HeroBlack2 />

      {/* Benefits 2 */}

      {/* Content Accordion */}
      <section
        id="Content"
        className="w-full flex flex-col pt-spacing-3 justify-center bg-black pb-spacing-2 px-spacing-1 sm:px-spacing-2 lg:px-spacing-3 "
      >
        <h1 className="landing-title2 text-light text-center mb-spacing-1 sm:mb-spacing-2">
          CONTENIDO DEL CURSO
        </h1>
        <AccordionContent entries={contentEntries} idPrefix="content" />
      </section>

      {/* Price offer section */}
      <section
        id="PriceOffer1"
        className="flex flex-col items-center justify-center bg-black py-spacing-2 sm:py-spacing-6"
      >
        <CtaWithBgImage
          backgroundImage="/images/cursos/marketing/back_cta2.jpeg"
          buttonText="¡COMPRA AHORA AL MEJOR PRECIO!"
          buttonLink="https://pay.hotmart.com/T95719486U?offDiscount=101297"
        />
      </section>

      {/* Bonus section */}
      <section id="Bonus" className="bg-black min-h-screen p-spacing-3 sm:p-spacing-5">
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

      {/* Curso dirigido a */}
      <AudienceSection />

      {/* Price offer 2 section */}
      <section
        id="PriceOffer2"
        className="flex flex-col items-center justify-center bg-black py-spacing-2 sm:py-spacing-3"
      >
        <CtaWithBgImage
          backgroundImage="/images/cursos/marketing/back_cta2.jpeg"
          buttonText="¡COMPRA AHORA AL MEJOR PRECIO!"
          buttonLink="https://pay.hotmart.com/T95719486U?offDiscount=101297"
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
          buttonLink="https://pay.hotmart.com/T95719486U?offDiscount=101297"
          imageSrc="/images/cursos/marketing/resume.png"
        />
      </section>

      {/* FAQ Section */}
      <section className="py-spacing-3 bg-[#FFF7F0] text-light">
        <div className="max-w-7xl mx-auto px-spacing-2 lg:px-spacing-4">
          <h2 className="text-center font-bobby landing-title text-btn-cta-yellow mb-spacing-1">
            Preguntas Frecuentes
          </h2>

          <AccordionContent entries={faqEntries} idPrefix="faq" />
        </div>
      </section>

      {/* Link Courses */}

      <section className="bg-black pt-spacing-3 pb-spacing-1 sm:pt-spacing-5 sm:pb-spacing-2">
        <LinkCourses
          backgroundImage="/images/cursos/marketing/back_cta2.jpeg"
          
        />
      </section>

      {/* Footer */}
      <FooterLanding />
    </>
  );
}
