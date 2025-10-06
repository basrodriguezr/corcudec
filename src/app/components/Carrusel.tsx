"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay, Keyboard} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = { src: string; alt: string; caption?: string };

const slides: Slide[] = [
  { src: "/img/VIBRA.webp",   alt: "VIBRA"   },
  { src: "/img/HABLE.webp",   alt: "HABLE"   },
  { src: "/img/GAVIOTA.webp", alt: "GAVIOTA" },
  { src: "/img/PASION.webp",  alt: "PASION"  },
];

export const Carrusel=() => {
  return (
    <div className="relative w-full py-8 h-auto">
      <Swiper
          className="event-swiper px-2"
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={24}
          loop
          loopAdditionalSlides={slides.length}   // 🔑 v11
          speed={600}
          grabCursor
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
      >
        {slides.map((e, i) => (
          <SwiperSlide key={i} className="!w-[260px] sm:!w-[320px] lg:!w-[380px]">
            <article className="rounded-[22px] overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl ring-1 ring-white/10">
              <div className="relative aspect-[4/3]">
                <Image src={e.src} alt={e.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
