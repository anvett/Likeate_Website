import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-accent text-size-3 px-5 flex items-center justify-between">
      {/* Asegura que el Navbar es un flex container */}
      <div className="flex items-center space-x-4">
        {/* Asegura alineación y espaciado horizontal entre los ítems del logo y el menú */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-bg-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-spacing-1"
            >
              <path
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-64 gap-2">
            <li>
              <Link href="/">Inicio</Link>
              
            </li>
            <li>
              <Link href="/acerca-de">Acerca de</Link>
            </li>
            <li>
              <details>
                <summary>Servicios</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/servicios/campanas-express">Campañas Express</Link>
                  </li>
                  <li>
                    <Link href="/servicios/creacion-post">Creación de Post</Link>
                  </li>
                  <li>
                    <Link href="/servicios/logotipos">Logotipos</Link>
                  </li>
                  <li>
                    <Link href="/servicios/manejo-redes-sociales">Manejo de Redes Sociales</Link>
                  </li>
                  <li>
                    <Link href="/servicios/manejo-tiktok">Manejo de TikTok</Link>
                  </li>
                  <li>
                    <Link href="/servicios/manual-marca">Manual de Marca</Link>
                  </li>
                  <li>
                    <Link href="/servicios/paginas-web">Páginas Web</Link>
                  </li>
                  <li>
                    <Link href="/servicios/stickers-personalizados">Stickers Personalizados</Link>
                  </li>
                  <li>
                    <Link href="/servicios/tarjeta-digital">Tarjeta Digital</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Cursos</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/cursos/cursos-en-vivo">Cursos en Vivo</Link>
                  </li>
                  <li>
                    <Link href="/cursos/cursos-grabados">Cursos Grabados</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Asesorías</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/asesorias/asesoria-1a1">Asesoría 1 a 1</Link>
                  </li>
                  <li>
                    <Link href="/asesorias/diagnostico-cuenta">Diagnóstico de Cuenta</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/images/logo.jpg"
          width={60}
          height={60}
          alt="Logo de Likeate"
          suppressHydrationWarning
        />
        <a className="btn btn-ghost text-size-5">Likeate</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-size-2 font-semibold px-1 gap-2  ">
          <li>
          
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/acerca-de">Acerca de</Link>
          </li>
          <li>
            <details>
              <summary>Servicios</summary>
              <ul className="p-2">
                <li>
                  <Link href="/servicios/campanas-express">Campañas Express</Link>
                </li>
                <li>
                  <Link href="/servicios/creacion-post">Creación de Post</Link>
                </li>
                <li>
                  <Link href="/servicios/logotipos">Logotipos</Link>
                </li>
                <li>
                  <Link href="/servicios/manejo-redes-sociales">Manejo de Redes Sociales</Link>
                </li>
                <li>
                  <Link href="/servicios/manejo-tiktok">Manejo de TikTok</Link>
                </li>
                <li>
                  <Link href="/servicios/manual-marca">Manual de Marca</Link>
                </li>
                <li>
                  <Link href="/servicios/paginas-web">Páginas Web</Link>
                </li>
                <li>
                  <Link href="/servicios/stickers-personalizados">Stickers Personalizados</Link>
                </li>
                <li>
                  <Link href="/servicios/tarjeta-digital">Tarjeta Digital</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Cursos</summary>
              <ul className="p-2">
                <li>
                  <Link href="/cursos/cursos-en-vivo">Cursos en Vivo</Link>
                </li>
                <li>
                  <Link href="/cursos/cursos-grabados">Cursos Grabados</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Asesorías</summary>
              <ul className="p-2">
                <li>
                  <Link href="/asesorias/asesoria-1a1">Asesoría 1 a 1</Link>
                </li>
                <li>
                  <Link href="/asesorias/diagnostico-cuenta">Diagnóstico de Cuenta</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
