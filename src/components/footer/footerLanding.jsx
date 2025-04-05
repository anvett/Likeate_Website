import React from "react";
import Image from "next/image";

export default function FooterLanding() {
  return (
    <footer className="bg-black text-light text-center px-spacing-2 sm:px-spacing-2 py-spacing-4 flex flex-col items-center">
      {/* Logo */}
      <div className="mb-spacing-2">
        <Image
          src="/images/logo-footer.png"
          alt="Logo Likeate"
          width={300}
          height={200}
          className="mx-auto w-[250px] sm:w-[300px] h-auto object-contain"
        />
      </div>

      {/* Texto Legal */}
      <p className="text-size-2 sm:text-size-4 font-medium leading-relaxed max-w-7xl">
        © 2024 – Likeate | Todos los derechos reservados |{" "}
        <span className="underline">Políticas de Privacidad</span> <br />
        <span className="block">Descargo de Responsabilidad</span>
        <br />
        Este sitio no es parte del sitio web de Facebook o Facebook Inc. Adicionalmente, este sitio
        no está respaldado por Facebook de ninguna manera.{" "}
        <strong>FACEBOOK es una marca registrada de Facebook, Inc.</strong>
        <br />
        <span className="block mt-spacing-2 font-semibold">
          2025 | LIKEATE | TODOS LOS DERECHOS RESERVADOS.
        </span>
      </p>
    </footer>
  );
}
