import type { Metadata } from "next";
import { Carrusel, MenuNav, Footer } from "../components";
import "../globals.css";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
};

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }> ) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white">
        {/*INICIO CABECERA*/}
        <header className="relative flex min-h-[50vh] flex-col overflow-hidden bg-[url('/img/violonchelista.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10">
            <MenuNav />
          </div>
          <div id="carrusel" className="relative z-10 flex flex-1 items-center justify-end pb-10 pt-12 sm:pb-16">
            <Carrusel />
          </div>
        </header>
        {/*FIN CABECERA*/} 

        {/*INICIO CUERPO*/} 
        <main className="bg-white text-neutral-900">
          {children}
        </main>        
        {/*FIN CUERPO*/} 

        {/*INICIO FOOTER*/} 
        <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <Footer />
        </footer>
        {/*INICIO FOOTER*/} 
      </body>
    </html>
  );
}
