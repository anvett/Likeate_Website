import React from "react";

const PoliticasDeCookies = () => {
  return (
    <div className="container mx-auto px-spacing-3 pt-spacing-6 pb-spacing-6 bg-light text-dark sm:px-spacing-2 ">
      <h1 className="h1-custom">Política de Cookies</h1>
      <p className="p-custom">
        En Likeate, utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta
        política de cookies explica qué son las cookies, cómo las utilizamos y cómo puedes gestionar
        tus preferencias de cookies.
      </p>

      <h2 className="h2-custom">¿Qué son las cookies?</h2>
      <p className="p-custom">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
        un sitio web. Estos archivos permiten que el sitio web recuerde tus acciones y preferencias
        (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización)
        durante un período de tiempo, por lo que no tienes que volver a configurarlas cada vez que
        vuelves al sitio o navegas de una página a otra.
      </p>

      <h2 className="h2-custom">¿Cómo utilizamos las cookies?</h2>
      <p className="p-custom">Utilizamos cookies para los siguientes propósitos:</p>
      <ul className="list-disc list-inside mb-4 p-custom">
        <li>Autenticación: Para reconocer si has iniciado sesión en nuestro sitio web.</li>
        <li>
          Seguridad: Para apoyar las funciones de seguridad y detectar actividades maliciosas.
        </li>
        <li>Preferencias: Para recordar tus configuraciones y preferencias.</li>
        <li>
          Análisis: Para entender cómo utilizas nuestro sitio web y cómo podemos mejorar tu
          experiencia.
        </li>
      </ul>

      <h2 className="h2-custom">Gestión de cookies</h2>
      <p className="p-custom">
        Puedes controlar y/o eliminar las cookies como desees. Para obtener más detalles, visita
        aboutcookies.org. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes
        configurar la mayoría de los navegadores para evitar que se almacenen. Sin embargo, si haces
        esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que
        visites un sitio y que algunos servicios y funcionalidades no funcionen.
      </p>

      <h2 className="h2-custom">Cambios en esta política de cookies</h2>
      <p className="p-custom">
        Podemos actualizar nuestra política de cookies de vez en cuando. Te notificaremos sobre
        cualquier cambio publicando la nueva política de cookies en esta página.
      </p>

      <h2 className="h2-custom">Contacto</h2>
      <p className="p-custom">
        Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos a través de{" "}
        <a href="mailto:info@likeatedigital.com" className="text-accent hover:underline">
          info@likeatedigital.com
        </a>
        .
      </p>
    </div>
  );
};

export default PoliticasDeCookies;
