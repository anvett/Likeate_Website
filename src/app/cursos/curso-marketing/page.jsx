"use client";
import React from "react";
import CountdownTimer from "@/components/countdownTimer/CountdownTimer";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImage from "@/components/heroImage/heroImage";
import HeroBlack from "@/components/heroBlack/HeroBlack";

export default function CursosEnVivo() {
  return (
    <>
      {/* Countdown */}

      <div className="flex flex-col items-center justify-center bg-black py-spacing-1 sm:py-spacing-2">
        <h2 className="landing-subtitle pb-spacing-3 text-yellow-400 text-center">
          LA OFERTA DE 50% TERMINA EN
        </h2>
        <CountdownTimer
          targetTime={new Date("2024-12-31T23:59:59")}
          onExpire={() => console.log("Curso finalizado")}
        />
      </div>

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
    </>
  );
}
