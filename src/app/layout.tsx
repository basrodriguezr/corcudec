import type { Metadata } from "next";
import { Carrusel, MenuNav, Footer } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143"
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body>
        {/*INICIO CABECERA*/}  
        <header className="relative overflow-hidden min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/img/violonchelista.png')]">                          
            <MenuNav/>            
            <Carrusel></Carrusel>
        </header>
        {/*FIN CABECERA*/} 

        {/*INICIO CUERPO*/} 
        {children}
        {/*FIN CUERPO*/} 

        {/*INICIO FOOTER*/} 
        <footer className='relative min-h-[70vh] bg-[url("/img/FOOTER.png")] bg-cover bg-center bg-no-repeat'>
         {/* oscurecer uniforme */}
          <div className="absolute inset-0 bg-black/40" />
          <Footer/>
        </footer>
        {/*INICIO FOOTER*/} 
      </body>
    </html>
  );
}
