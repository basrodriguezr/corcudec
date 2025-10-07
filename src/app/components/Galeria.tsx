'use client'
import Image from 'next/image'
import Link from 'next/link'

type GaleriaItem = {
  href: string
  title: string
  image: string
  alt: string
  target?: '_self' | '_blank'
  highlight?: boolean
}

const GALERIA_ITEMS: GaleriaItem[] = [
  {
    href: '/Nav/elencos/coro',
    title: 'Nuestros elencos',
    image: '/img/Galeria/f1.png',
    alt: 'Nuestros elencos',
  },
  {
    href: 'https://www.youtube.com/@corcudec1647',
    title: 'Galería multimedia',
    image: '/img/Galeria/f2.png',
    alt: 'Galería multimedia',
    target: '_blank',
    highlight: true,
  },
  {
    href: '/Nav/teatro_udec/historia',
    title: 'Historia',
    image: '/img/Galeria/f3.png',
    alt: 'Historia',
  },
]

export const Galeria = () => {
  return (
    <section id="galeria-6" className="bg-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12">
          {GALERIA_ITEMS.map(({ href, title, image, alt, target = '_self', highlight }) => (
            <Link
              key={href}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noreferrer' : undefined}
              className="group flex flex-col items-center"
            >
              <figure className="flex flex-col items-center gap-4">
                <figcaption className="text-center uppercase tracking-[0.5px]">
                  <h3
                    className={`text-base font-extrabold md:text-lg ${highlight ? 'text-yellow-400' : 'text-white'}`}
                  >
                    {title}
                  </h3>
                </figcaption>
                <div className="w-full max-w-[280px] overflow-hidden rounded-xl">
                  <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}