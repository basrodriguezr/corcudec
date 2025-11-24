import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/seccion2.png";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Elencos",
    template: "%s | Corcudec",
  },
  description:
    "Conoce los elencos artísticos y agrupaciones que forman parte de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/elencos",
  },
  openGraph: {
    title: "Elencos | Corcudec",
    description:
      "Descubre las agrupaciones y proyectos musicales que representan a la Corporación Cultural Universidad de Concepción.",
    url: "/elencos",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Elencos de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elencos de Corcudec",
    description:
      "Información sobre los elencos y agrupaciones de la Corporación Cultural Universidad de Concepción.",
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
      <Script id="ensembles-page-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Elencos de Corcudec",
          url: `${metadataBase.origin}/elencos`,
          description:
            "Listado de elencos y agrupaciones artísticas gestionadas por la Corporación Cultural Universidad de Concepción.",
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