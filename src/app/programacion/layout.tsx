import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/abonos.png";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Programación",
    template: "%s | Corcudec",
  },
  description:
    "Consulta la programación cultural, fechas y horarios de los espectáculos de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/programacion",
  },
  openGraph: {
    title: "Programación | Corcudec",
    description:
      "Calendario de conciertos, obras y actividades organizadas por la Corporación Cultural Universidad de Concepción.",
    url: "/programacion",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Programación de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programación cultural | Corcudec",
    description:
      "Fechas y horarios de la programación cultural de la Corporación Cultural Universidad de Concepción.",
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
      <Script id="schedule-page-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventSeries",
          name: "Programación cultural de Corcudec",
          url: `${metadataBase.origin}/programacion`,
          description:
            "Calendario de espectáculos, conciertos y actividades educativas de la Corporación Cultural Universidad de Concepción.",
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