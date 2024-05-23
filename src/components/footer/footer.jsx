import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Limpieza de Hogares</a>
          <a className="link link-hover">Limpieza de Oficinas</a>
          <a className="link link-hover">Car express</a>
          <a className="link link-hover">Limpieza de vidrios y alfombras</a>
        </nav>
        <nav>
          <h6 className="footer-title">EcuaCleaner</h6>
          <a className="link link-hover">Acerca de nosotros</a>
          <a className="link link-hover">Contacto</a>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Términos de uso</a>
          <a className="link link-hover">Políticas de privacidad</a>
          <a className="link link-hover">Políticas de manejo de cookies</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img src="/path/to/logo.png" alt="Ecuacleaner Logo" className="h-12 w-auto" />
          <p>
            Ecuacleaner <br />
            Proporcionando servicios confiables desde 2009
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://facebook.com">
              <img src="/path/to/facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="https://twitter.com">
              <img src="/path/to/twitter.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="https://instagram.com">
              <img src="/path/to/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com">
              <img src="/path/to/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
