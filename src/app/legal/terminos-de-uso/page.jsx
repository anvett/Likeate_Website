import React from "react";

export default function TerminosDeUso() {
  return (
    <div className="container mx-auto px-spacing-3 pt-spacing-6 pb-spacing-6 bg-light text-dark sm:px-spacing-2 ">
      <h1 className="h1-custom">Términos de Uso</h1>
      <p className="p-custom">
        Bienvenido a Likeate. Al utilizar nuestro sitio web, usted acepta cumplir con los siguientes
        términos y condiciones de uso.
      </p>

      <h2 className="h2-custom">Uso del Sitio Web</h2>
      <p className="p-custom">
        Usted se compromete a utilizar nuestro sitio web solo con fines legales y de una manera que
        no infrinja los derechos de, ni restrinja o inhiba el uso y disfrute de este sitio web por
        parte de cualquier tercero.
      </p>

      <h2 className="h2-custom">Propiedad Intelectual</h2>
      <p className="p-custom">
        Todo el contenido presente en este sitio web, incluidos textos, gráficos, logotipos, iconos,
        imágenes, clips de audio y software, es propiedad de Likeate o de sus proveedores de
        contenido y está protegido por las leyes de derechos de autor internacionales.
      </p>

      <h2 className="h2-custom">Política de Privacidad</h2>
      <p className="p-custom">
        Su privacidad es muy importante para nosotros. Nuestra política de privacidad explica cómo
        recopilamos, utilizamos y protegemos su información personal.
      </p>

      <h2 className="h2-custom">Limitación de Responsabilidad</h2>
      <p className="p-custom">
        En la medida permitida por la ley, Likeate no será responsable de ninguna pérdida o daño
        directo, indirecto, incidental, consecuente o punitivo que surja de su acceso o uso de este
        sitio web.
      </p>

      <h2 className="h2-custom">Enlaces a Otros Sitios Web</h2>
      <p className="p-custom">
        Nuestro sitio web puede contener enlaces a sitios web de terceros que no son operados por
        nosotros. No tenemos control sobre el contenido y las prácticas de estos sitios y no
        asumimos ninguna responsabilidad por sus políticas de privacidad.
      </p>

      <h2 className="h2-custom">Cambios en los Términos de Uso</h2>
      <p className="p-custom">
        Nos reservamos el derecho de modificar estos términos de uso en cualquier momento. Le
        notificaremos de cualquier cambio publicando los nuevos términos en nuestro sitio web.
      </p>

      <h2 className="h2-custom">Contacto</h2>
      <p className="p-custom">
        Si tiene alguna pregunta sobre estos términos de uso, contáctenos a través de:
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
