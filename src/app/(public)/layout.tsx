import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { MenuNav } from "../components";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/seccion2.png";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Información pública",
    template: "%s | Corcudec",
  },
  description:
    "Accede a información pública, programas de abonos y contacto de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Información pública | Corcudec",
    description:
      "Trámites, programas de abonos y datos de contacto de la Corporación Cultural Universidad de Concepción.",
    url: "/",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Sección pública de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Información pública | Corcudec",
    description:
      "Información útil para asistentes, abonos y canales de contacto de la Corporación Cultural Universidad de Concepción.",
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[url('/img/seccion2.png')] bg-cover bg-center bg-no-repeat">
      <Script id="public-section-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Información pública de Corcudec",
          url: metadataBase.toString(),
          description:
            "Portal de información pública, abonos y servicios de atención de la Corporación Cultural Universidad de Concepción.",
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