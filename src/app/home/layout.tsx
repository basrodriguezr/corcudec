import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Carrusel, MenuNav, Footer } from "../components";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/violonchelista.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Inicio",
    template: "%s | Corcudec",
  },
  description:
    "Explora las próximas funciones, conciertos y experiencias destacadas de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/home",
  },
  openGraph: {
    title: "Inicio | Corporación Cultural Universidad de Concepción",
    description:
      "Descubre la cartelera, noticias recientes y los elencos artísticos de la Corporación Cultural Universidad de Concepción.",
    url: "/home",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Inicio de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inicio | Corcudec",
    description:
      "Programación cultural, noticias y experiencias destacadas de la Corporación Cultural Universidad de Concepción.",
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Script id="home-webpage-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Inicio | Corcudec",
          url: `${metadataBase.origin}/home`,
          description:
            "Página principal de la Corporación Cultural Universidad de Concepción con programación, noticias y accesos rápidos.",
          inLanguage: "es-CL",
        })}
      </Script>
      {/*INICIO CABECERA*/}
      <header className="relative flex min-h-[50vh] flex-col overflow-hidden bg-[url('/img/violonchelista.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-100">
          <MenuNav />
        </div>
        <div id="carrusel" className="relative z-10 flex flex-1 items-center pb-10 pt-12 sm:pb-16">
          <Carrusel />
        </div>
      </header>
      {/*FIN CABECERA*/}

      {/*INICIO CUERPO*/}
      <main className="bg-white text-neutral-900">{children}</main>
      {/*FIN CUERPO*/}

      {/*INICIO FOOTER*/}
      <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 pointer-events-none bg-black/10" />
        <Footer />
      </footer>
      {/*INICIO FOOTER*/}
    </div>
  );
}