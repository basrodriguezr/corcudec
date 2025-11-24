import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const metadataBase = new URL("https://www.corcudec.cl");
const defaultImage = "/img/public/violonchelista.webp";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Corporación Cultural Universidad de Concepción",
    template: "%s | Corcudec",
  },
  description:
    "Corporación Cultural Universidad de Concepción promueve la programación artística, la formación y el acceso a la cultura en la región del Biobío.",
  icons: "https://www.udec.cl/pexterno/sites/default/files/favicon.ico",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corporación Cultural Universidad de Concepción",
    description:
      "Vive la cartelera de espectáculos, conciertos y experiencias culturales de la Corporación Cultural Universidad de Concepción.",
    url: "/",
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
    title: "Corporación Cultural Universidad de Concepción",
    description:
      "Descubre la programación cultural, educativa y artística que ofrece la Corporación Cultural Universidad de Concepción.",
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Script id="corcudec-organization-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PerformingArtsOrganization",
            name: "Corporación Cultural Universidad de Concepción",
            url: metadataBase.toString(),
            logo: `${metadataBase.origin}/img/public/logoudec.png`,
            description:
              "Institución cultural de la Universidad de Concepción que promueve experiencias artísticas, educativas y patrimoniales en Chile.",
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}