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

export default function CursosEnVivo() {
  const contentEntries = [
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
          targetTime={new Date("2025-01-31T23:59:59")}
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
          oldPrice="$140"
          newPrice="$70"
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
        <BenefitsCourseSlider
          title="Este curso 🚫"
          subtitle="NO ES PARA TI"
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
          oldPrice="$140"
          newPrice="$70"
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

      <section className="bg-black py-spacing-3 sm:py-spacing-5">
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
      </section>
    </>
  );
}
