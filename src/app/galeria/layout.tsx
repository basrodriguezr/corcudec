import type { Metadata } from "next";
import { MenuNav } from "../components";
import "../globals.css";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
};

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }> ) {
  return (    
      <div className="bg-neutral-950 text-white">
        {/*INICIO CABECERA*/}
        <header className="relative flex flex-col bg-white bg-nubes-multiple">
          <div className="relative">
            <MenuNav />
          </div>
        </header>
        {/*FIN CABECERA*/}

        {/*INICIO CUERPO*/}
        {children}
        {/*FIN CUERPO*/}
      </div>    
  );
}
