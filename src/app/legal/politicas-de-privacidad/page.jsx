import React from "react";

export default function PoliticasDePrivacidad() {
  return (
    <div className="container mx-auto px-spacing-3 pt-spacing-6 pb-spacing-6 bg-light text-dark sm:px-spacing-2 ">
      <h1 className="h1-custom">Políticas de Privacidad</h1>
      <p className="p-custom">
        En Likeate, nos comprometemos a proteger su privacidad. Esta política de privacidad describe
        cómo recopilamos, usamos y compartimos su información personal.
      </p>

      <h2 className="h2-custom">Información que Recopilamos</h2>
      <p className="p-custom">
        Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de
        correo electrónico, número de teléfono y otros datos de contacto cuando se registra en
        nuestro sitio web, se suscribe a nuestros servicios o se comunica con nosotros.
      </p>

      <h2 className="h2-custom">Uso de la Información</h2>
      <p className="p-custom">Utilizamos la información recopilada para:</p>
      <ul className="list-disc ml-6 mt-2 pb-spacing-1">
        <li>Proveer, operar y mantener nuestros servicios</li>
        <li>Mejorar, personalizar y expandir nuestros servicios</li>
        <li>Comprender y analizar cómo utiliza nuestro sitio web</li>
        <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
        <li>Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios</li>
        <li>Para enviarle correos electrónicos</li>
        <li>Encontrar y prevenir el fraude</li>
      </ul>

      <h2 className="h2-custom">Compartir Información</h2>
      <p className="p-custom">
        No compartimos su información personal con terceros, excepto en las siguientes
        circunstancias:
      </p>
      <ul className="list-disc ml-6 mt-2 pb-spacing-1">
        <li>Con su consentimiento</li>
        <li>Para cumplir con leyes y regulaciones</li>
        <li>Para proteger nuestros derechos y propiedad</li>
        <li>Para investigar fraudes o problemas de seguridad</li>
      </ul>

      <h2 className="h2-custom">Seguridad de la Información</h2>
      <p className="p-custom">
        Tomamos medidas razonables para proteger su información personal contra pérdida, robo, uso
        indebido y acceso no autorizado, divulgación, alteración y destrucción.
      </p>

      <h2 className="h2-custom">Cambios en esta Política de Privacidad</h2>
      <p className="p-custom">
        Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en
        nuestras prácticas o por otras razones operativas, legales o reglamentarias.
      </p>

      <h2 className="h2-custom">Contacto</h2>
      <p className="p-custom">
        Si tiene preguntas o inquietudes sobre nuestra política de privacidad, contáctenos a través
        de:
      </p>
      <p className="p-custom">
        Email:{" "}
        <a href="mailto:info@likeatedigital.com" className="text-accent hover:underline">
          info@likeatedigital.com
        </a>
        <br />
        Teléfono: +593 9 92542248
      </p>
    </div>
  );
}
