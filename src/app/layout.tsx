import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporación Cultural Universidad de Concepción",
  description: "CORPORACIÓN",
  icons: "https://www.corcudec.cl/favicon/favicon-32x32.png?ver=202306091143",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}