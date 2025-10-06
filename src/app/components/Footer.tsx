import Link from 'next/link';
import React from 'react'

const navigation = [
  {
    title: "Corporación",
    items: [
      { label: "Quiénes somos", href: "#" },
      { label: "Equipo", href: "#" },
      { label: "Alianzas", href: "#" },
    ],
  },
  {
    title: "Elencos",
    items: [
      { label: "Orquesta Sinfónica UdeC", href: "#" },
      { label: "Coro Sinfónico UdeC", href: "#" },
      { label: "Directores invitados", href: "#" },
    ],
  },
  {
    title: "Programación",
    items: [
      { label: "Temporada sinfónica", href: "#programacion" },
      { label: "Lunes cinematográficos", href: "#" },
      { label: "Ópera UdeC", href: "#" },
    ],
  },
];

const contact = [
  "Corporación Cultural Universidad de Concepción",
  "Víctor Lamas 1290, Concepción",
  "+56 41 220 5080",
  "contacto@corcudec.cl",
];

export const Footer = () => {
    return (
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 text-white">
      <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Somos el corazón cultural de la Universidad de Concepción
          </h2>
          <p className="max-w-xl text-base text-white/80">
            Trabajamos todo el año acercando la música sinfónica, el canto coral y las artes escénicas a toda la región del Biobío.
            Síguenos en redes sociales y entérate primero de cada estreno.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="https://www.instagram.com/corcudec"
              className="rounded-full border border-white/30 px-4 py-2 transition hover:border-amber-300 hover:text-amber-200"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/corcudec"
              className="rounded-full border border-white/30 px-4 py-2 transition hover:border-amber-300 hover:text-amber-200"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/corcudec"
              className="rounded-full border border-white/30 px-4 py-2 transition hover:border-amber-300 hover:text-amber-200"
            >
              YouTube
            </Link>
          </div>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-black/50 p-10 backdrop-blur">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-300/80">Contacto</span>
          <ul className="space-y-2 text-sm text-white/85">
            {contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href="mailto:contacto@corcudec.cl"
            className="inline-flex w-max items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-300"
          >
            Escríbenos
            <span aria-hidden className="text-lg">→</span>
          </Link>
        </div>
      </div>

      <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {navigation.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/90">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-amber-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/90">
            Horarios Boletería
          </h3>
          <p className="text-sm text-white/75">
            Lunes a viernes de 10:00 a 14:00 y de 15:00 a 18:00 hrs.
            Sábados desde las 15:00 hrs. en días de función.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Corporación Cultural Universidad de Concepción. Todos los derechos reservados.</p>
        <p>Desarrollado con Next.js + Tailwind CSS.</p>
      </div>
    </div>
  )
}


