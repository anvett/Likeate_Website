import React from "react";
import PaymentMethods from "../paymentMethods/PaymentMethods";

function Footer() {
  //----------------------------------------------
  // Payment methods array
  //----------------------------------------------

  const paymentMethods = [
    {
      name: "Visa / MasterCard",
      logo: "/images/payment/visa_mastercard.png",
      link: "https://www.visa.com",
    },

    {
      name: "PayPal",
      logo: "/images/payment/paypal.png",
      link: "https://www.paypal.com",
    },
    {
      name: "American Express",
      logo: "/images/payment/amex.png",
      link: "https://www.americanexpress.com",
    },
    {
      name: "PayPhone",
      logo: "/images/payment/payphone.jpg",
      link: "https://www.payphone.com",
    },
  ];
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover" href="/servicios/campanas-express">
            Campañas Express
          </a>
          <a className="link link-hover" href="/servicios/creacion-post">
            Creación de Post
          </a>
          <a className="link link-hover" href="/servicios/manual-marca">
            Manual de Marca
          </a>
          <a className="link link-hover" href="/servicios/manejo-redes-sociales">
            Manejo de Redes Sociales
          </a>
          <a className="link link-hover" href="/servicios/manejo-tiktok">
            Manejo de TikTok
          </a>
          <a className="link link-hover" href="/servicios/logotipos">
            Logotipos
          </a>
          <a className="link link-hover" href="/servicios/paginas-web">
            Páginas Web
          </a>
          <a className="link link-hover" href="/servicios/stickers-personalizados">
            Stickers Personalizados
          </a>
          <a className="link link-hover" href="/servicios/tarjeta-digital">
            Tarjeta Digital
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Cursos</h6>
          <a className="link link-hover" href="/cursos/cursos-en-vivo">
            Cursos en Vivo
          </a>
          <a className="link link-hover" href="/cursos/cursos-grabados">
            Cursos Grabados
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Asesorías</h6>
          <a className="link link-hover" href="/asesorias/asesoria-1a1">
            Asesoría 1 a 1
          </a>
          <a className="link link-hover" href="/asesorias/diagnostico-cuenta">
            Diagnóstico de Cuenta
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Likeate</h6>
          <a className="link link-hover" href="/acerca-de">
            Acerca de Nosotros
          </a>
          <a className="link link-hover" href="/contacto">
            Contacto
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover" href="/legal/terminos-de-uso">
            Términos de Uso
          </a>
          <a className="link link-hover" href="/legal/politicas-de-privacidad">
            Políticas de Privacidad
          </a>
          <a className="link link-hover" href="/legal/politicas-de-cookies">
            Políticas de Manejo de Cookies
          </a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-accent text-base-content border-base-300 flex  flex-col lg:flex-row justify-between items-center">
        <nav className="w-full lg:w-auto md:place-self-center md:justify-self-end px-spacing-3 sm:px-spacing-10 mb-6 lg:mb-0">
          <h2 className="font-primary text-size-3 text-dark mb-spacing-1 text-center sm:text-start sm:text-size-4">Síguenos</h2>
          <div className="grid grid-flow-col gap-4 justify-center lg:justify-start">
            <a href="https://facebook.com">
              <img
                src="/icons/facebook_p.png"
                alt="Facebook"
                className="h-spacing-3 w-spacing-3 rounded-full"
              />
            </a>
            <a href="https://twitter.com">
              <img
                src="/icons/instagram_p.png"
                alt="Instagram"
                className="h-spacing-3 w-spacing-3 rounded-full"
              />
            </a>
            <a href="https://instagram.com">
              <img
                src="/icons/tiktok_p.png"
                alt="Tik Tok"
                className="h-spacing-3 w-spacing-3 rounded-full"
              />
            </a>
          </div>
        </nav>
        <div className="w-full lg:w-auto">
          <PaymentMethods methods={paymentMethods} />
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-accent text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img src="/images/logo.jpg" alt="Likeate Logo" className="h-12 w-auto" />
          <p>
            Likeate <br />
            Proporcionando servicios de marketing digital desde 2024
          </p>
        </aside>
      </footer>
      <footer className="text-center p-spacing-3 bg-primary text-sm text-base-content">
        <p className="text-size-1 text-accent font-semibold  ">
          &copy; 2024 Anvetcorp SAS. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
