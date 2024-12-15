"use client";
import React from "react";
import CountdownTimer from "@/components/countdownTimer/CountdownTimer";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImage from "@/components/heroImage/heroImage";
import HeroBlack from "@/components/heroBlack/HeroBlack";
import AccordionContent from "@/components/accordionContent/AccordionContent";

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
      description: "Domina los conceptos básicos del marketing digital para establecer una sólida base de conocimientos.",
      details: [
        "Conceptos clave del Marketing Digital",
        "Estrategias iniciales",
        "Plataformas y herramientas fundamentales",
      ],
    },
    {
      title: "MODULO 3",
      subtitle: "Community Manager",
      description: "Aprende a gestionar y crecer comunidades en redes sociales para diferentes marcas.",
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
      description: "Explora cómo vender de manera orgánica en Tik Tok con contenido viral y atractivo.",
      details: [
        "Introducción a Tik Tok",
        "Creación de contenido viral",
        "Estrategias de ventas en Tik Tok",
      ],
    },
    {
      title: "MODULO 6",
      subtitle: "Campañas publicitarias con Facebook e Instagram ADS",
      description: "Aprende a crear campañas publicitarias efectivas y optimizadas con Facebook e Instagram ADS.",
      details: [
        "Configuración de campañas",
        "Segmentación y presupuesto",
        "Optimización de anuncios",
      ],
    },
    {
      title: "MODULO 7",
      subtitle: "Whatsapp Marketing",
      description: "Aprovecha WhatsApp como herramienta de comunicación directa para aumentar ventas.",
      details: [
        "Estrategias de comunicación efectiva",
        "Automatización con WhatsApp Business",
        "Creación de campañas personalizadas",
      ],
    },
    {
      title: "MODULO 8",
      subtitle: "Inteligencia Artificial",
      description: "Descubre cómo usar la inteligencia artificial para potenciar tu estrategia de marketing.",
      details: [
        "Introducción a la IA en Marketing",
        "Herramientas de automatización",
        "Casos prácticos y estrategias avanzadas",
      ],
    },
  ];
  
  return (
    <>
      {/* Countdown */}

      <section id="Countdown" className="flex flex-col items-center justify-center bg-black py-spacing-1 sm:py-spacing-2">
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
      <section id="Content" className="w-full flex justify-center bg-black pb-spacing-2 px-spacing-1 sm:px-spacing-2 lg:px-spacing-3">
        <AccordionContent entries={entries} />
      </section>
    </>
  );
}
