import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MenuNav } from "../components";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
};

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[url('/corcudec/img/seccion2.png')] bg-cover bg-center bg-no-repeat">
      {/*INICIO CABECERA*/}
      <header className="relative flex flex-col overflow-hidden bg-gradient-to-r from-neutral-100 via-neutral-700 to-black text-white opacity-60">
        <div className="relative z-10">
          <MenuNav />
        </div>
      </header>
      {/*FIN CABECERA*/}

      {/*INICIO CUERPO*/}
      <main>{children}</main>
      {/*FIN CUERPO*/}
    </div>
  );
}