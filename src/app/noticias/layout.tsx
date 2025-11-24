import type { Metadata } from "next";
import Script from "next/script";
import { MenuNav } from "../components";
import "../globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/prevencion.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Noticias",
    template: "%s | Corcudec",
  },
  description:
    "Entérate de las últimas noticias y novedades de la Corporación Cultural Universidad de Concepción.",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
  alternates: {
    canonical: "/noticias",
  },
  openGraph: {
    title: "Noticias | Corcudec",
    description:
      "Cobertura de estrenos, anuncios y comunicados oficiales de la Corporación Cultural Universidad de Concepción.",
    url: "/noticias",
    siteName: "Corcudec",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Noticias de Corcudec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias de Corcudec",
    description:
      "Novedades, anuncios y comunicados oficiales de la Corporación Cultural Universidad de Concepción.",
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
      <Script id="news-page-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Noticias de Corcudec",
          url: `${metadataBase.origin}/noticias`,
          description:
            "Noticias y comunicados de la Corporación Cultural Universidad de Concepción sobre su programación y actividades.",
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