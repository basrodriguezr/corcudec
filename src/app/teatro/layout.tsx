import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/violonchelista.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Teatro UdeC",
    template: "%s | Corcudec",
  },
  description:
    "Infórmate sobre la cartelera y servicios del Teatro Universidad de Concepción, administrado por la Corporación Cultural.",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
  alternates: {
    canonical: "/teatro",
  },
  openGraph: {
    title: "Teatro UdeC | Corcudec",
    description:
      "Programación y servicios del Teatro Universidad de Concepción gestionado por la Corporación Cultural.",
    url: "/teatro",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Teatro Universidad de Concepción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teatro Universidad de Concepción",
    description:
      "Funciones, servicios y experiencias en el Teatro Universidad de Concepción de la Corporación Cultural.",
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-neutral-950 text-white">
      <Script id="theater-page-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PerformingArtsTheater",
          name: "Teatro Universidad de Concepción",
          url: `${metadataBase.origin}/teatro`,
          description:
            "Cartelera y servicios del Teatro Universidad de Concepción administrado por la Corporación Cultural.",
          inLanguage: "es-CL",
        })}
      </Script>
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