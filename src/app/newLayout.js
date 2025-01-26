"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

export default function NavbarFooterLayout({ children }) {
  const pathname = usePathname();

  // Lista de rutas a excluir
  const excludedRoutes = [
    "/cursos/curso-marketing/",
    "/cursos/curso-canva/",
    "/cursos/curso-ia/",
  ];

  // Verificar si la ruta actual está excluida
  const shouldRenderNavbarAndFooter = !excludedRoutes.includes(pathname);

  return (
    <div>
      {/* Renderizar Navbar si la ruta no está excluida */}
      {shouldRenderNavbarAndFooter && (
        <header>
          <Navbar />
        </header>
      )}

      {/* Contenido principal */}
      <main>{children}</main>

      {/* Renderizar Footer si la ruta no está excluida */}
      {shouldRenderNavbarAndFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}
