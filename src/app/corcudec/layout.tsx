import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/seccion3.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Sobre Corcudec",
    template: "%s | Corcudec",
  },
  description:
    "Conoce la misión, historia y gestión cultural de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/corcudec",
  },
  openGraph: {
    title: "Sobre Corcudec | Corporación Cultural Universidad de Concepción",
    description:
      "Información institucional sobre la Corporación Cultural Universidad de Concepción, su equipo y su impacto artístico.",
    url: "/corcudec",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Corporación Cultural Universidad de Concepción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Corcudec",
    description:
      "Misión, trayectoria y gestión cultural de la Corporación Cultural Universidad de Concepción.",
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
      <Script id="about-corcudec-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Sobre Corcudec",
          url: `${metadataBase.origin}/corcudec`,
          description:
            "Página institucional de la Corporación Cultural Universidad de Concepción con información de su misión y gestión.",
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
