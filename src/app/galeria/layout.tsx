import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/Galeria/f1.png";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Galería",
    template: "%s | Corcudec",
  },
  description:
    "Recorre la galería multimedia de la Corporación Cultural Universidad de Concepción con imágenes y momentos destacados.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galería | Corcudec",
    description:
      "Fotografías y registros audiovisuales de los espectáculos y actividades de la Corporación Cultural Universidad de Concepción.",
    url: "/galeria",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Galería de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería de Corcudec",
    description:
      "Material audiovisual de los conciertos, obras de teatro y actividades educativas de Corcudec.",
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
      <Script id="gallery-page-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MediaGallery",
          name: "Galería de Corcudec",
          url: `${metadataBase.origin}/galeria`,
          description:
            "Colección multimedia de eventos y espectáculos producidos por la Corporación Cultural Universidad de Concepción.",
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