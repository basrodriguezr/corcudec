"use client";

import { useState, useEffect } from "react"; // 💡 useEffect es necesario para el fetching de datos
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';

import "swiper/css";
import "swiper/css/effect-coverflow";

// 1. Definición de Tipos
interface RawSlideData {
  id: string;
  title: string;
  image: string;
  description: string;
  url: string;
  tag?: string;
  published: boolean;
}

const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.CARRUSELES;

// 2. Función de Obtención de Datos
async function fetchCarrusel(): Promise<RawSlideData[]> {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = (await response.json()) as RawSlideData[];

    return result;

  } catch (error) {
    console.error("Error al obtener los datos de Drupal:", error);
    return []; // Devolver un array vacío en caso de error
  }
}

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// 3. Componente Principal
export const Carrusel = () => {
  // Inicializa el estado con un array vacío y usa nombres claros
  const [slides, setSlides] = useState<RawSlideData[]>([]);
  const [status, setStatus] = useState<FetchState>('LOADING');

  // 💡 Lógica Corregida: Usar useEffect para hacer el fetching
  useEffect(() => {
    // La función que se ejecuta al montar el componente
    const loadSlides = async () => {
      setStatus('LOADING');
      try {
        const data = await fetchCarrusel();
        setSlides(data);
        setStatus('LOADED');
      } catch (error) {
        setStatus('ERROR');
        // El error es mostrado en fechCarrusel, pero seguimos el estado
      }
    };
    loadSlides();
  }, []);

  // Manejo del estado de carga (mientras slides es null)
  if (status === 'LOADING') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        Cargando carrusel...
      </div>
    );
  }

  // Manejo de estado sin datos (si el array está vacío)
  if (status === 'ERROR' || slides.length === 0) {
    // Show a general error if the fetch failed OR if data was loaded but the array is empty
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-500">
        No se encontraron elementos para el carrusel.
      </div>
    );
  }

  // Renderizado del Carrusel
  return (
    <div className="relative z-0 w-full py-10 sm:py-12 -mt-20">
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
          <SwiperSlide key={index+slide.url} className="event-slide">
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