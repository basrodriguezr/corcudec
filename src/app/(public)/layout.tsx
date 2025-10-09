import type { Metadata } from "next";
import { MenuNav } from "../components";
import "../globals.css";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
};

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }> ) {
  return (
    <html lang="es">
      <body className="bg-[url('/img/seccion2.png')] bg-cover bg-center bg-no-repeat h-[100vh]" >
        {/*INICIO CABECERA*/}
        <header className="relative flex flex-col overflow-hidden opacity-60 bg-gradient-to-r from-neutral-100 via-neutral-700 to-black text-white">
          <div className="relative z-10">
            <MenuNav />
          </div>
        </header>
        {/*FIN CABECERA*/} 

        {/*INICIO CUERPO*/} 
        <main>
          {children}
        </main>        
        {/*FIN CUERPO*/} 
      </body>
    </html>
  );
}
