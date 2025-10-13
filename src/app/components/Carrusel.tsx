"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

type Slide = {
  src: string;
  alt: string;
  href: string;
  tag?: string;
};

const slides: Slide[] = [
  {
    src: "/img/HABLE.webp",
    alt: "Hable con ella",
    href: "https://ticketplus.cl/events/hable-con-ella",
    tag: "Temporada 2025",
  },
  {
    src: "/img/VIBRA.webp",
    alt: "Vibra con la orquesta",
    href: "https://ticketplus.cl/events/vibra-con-la-orquesta",
    tag: "Temporada popular",
  },
  {
    src: "/img/GAVIOTA.webp",
    alt: "La gaviota",
    href: "https://ticketplus.cl/events/la-gaviota",
    tag: "Teatro musical",
  },
  {
    src: "/img/PASION.webp",
    alt: "Pasión y ritmo",
    href: "https://ticketplus.cl/events/pasion-y-ritmo",
    tag: "Gira nacional",
  },
  {
    src: "/img/VIBRA.webp",
    alt: "Vibra con la orquesta",
    href: "https://ticketplus.cl/events/vibra-con-la-orquesta-octubre",
    tag: "Temporada popular",
  },
  {
    src: "/img/HABLE.webp",
    alt: "Hable con ella",
    href: "https://ticketplus.cl/events/hable-con-ella-octubre",
    tag: "Temporada 2025",
  },
  {
    src: "/img/GAVIOTA.webp",
    alt: "La gaviota",
    href: "https://ticketplus.cl/events/la-gaviota-noviembre",
    tag: "Teatro musical",
  },
  {
    src: "/img/PASION.webp",
    alt: "Pasión y ritmo",
    href: "https://ticketplus.cl/events/pasion-y-ritmo-noviembre",
    tag: "Gira nacional",
  },
];

export const Carrusel = () => {
  return (
    <div className="relative z-0 w-full py-10 sm:py-12 -mt-20">
      <Swiper
        modules={[EffectCoverflow]}
        className="event-swiper"
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2, slideShadows: false }}
        spaceBetween={56}
        loop
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        breakpoints={{
          0: { spaceBetween: 28 },
          640: { spaceBetween: 40 },
          1024: { spaceBetween: 56 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.href} className="event-slide">
            <a
              href={slide.href}
              className="event-card"
              target="_blank"
              rel="noreferrer"
              aria-label={slide.tag ? `${slide.tag} - ${slide.alt}` : slide.alt}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="event-card__image"
                priority={index < 3}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};