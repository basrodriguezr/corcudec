import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export interface SlideData {
  id: string;
  title: string;
  image: string;
  description: string;
  url: string;
  tag?: string;
  published: boolean;
}

// Props para el componente base
interface CarruselBaseProps {
  slides: SlideData[];
}

// Componente de Presentación
export const CarruselBase = ({ slides }: CarruselBaseProps) => {
  // Manejo de estado sin datos (si el array está vacío) - Se puede mover a este nivel para que sea más robusto
  if (slides.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        No se encontraron elementos para el carrusel.
      </div>
    );
  }

  // Renderizado del Carrusel
  return (
    <div className="relative z-0 w-full py-10 sm:py-12 -mt-15">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
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
          <SwiperSlide key={index} className="event-slide">
            <a
              href={slide.url}
              className="event-card"
              target="_blank"
              rel="noreferrer"
              aria-label={slide.tag ? `${slide.tag} - ${slide.title}` : slide.title}
            >
              <Image
                src={slide.image}
                alt={slide.tag ? `${slide.tag} - ${slide.title}` : slide.title}
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