"use client";

import { useState, useEffect } from "react";
import { CarruselBase, SlideData } from "../base/CarruselBase"; 
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';

const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.CARRUSELES;

// Función de Obtención de Datos
async function fetchCarrusel(): Promise<SlideData[]> {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Usamos SlideData como el tipo de retorno esperado
    const result = (await response.json()) as SlideData[]; 

    return result;

  } catch (error) {
    console.error("Error al obtener los datos de Drupal:", error);
    return [];
  }
}

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// Componente de Contenedor (Fetching)
export const Carrusel = () => {
  // Inicializa el estado con un array vacío
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [status, setStatus] = useState<FetchState>('LOADING');

  useEffect(() => {
    const loadSlides = async () => {
      setStatus('LOADING');
      try {
        const data = await fetchCarrusel();
        setSlides(data);
        setStatus('LOADED');
      } catch (error) {
        console.error(error);
        setStatus('ERROR');
        // El error es mostrado en fechCarrusel, pero seguimos el estado
      }
    };
    loadSlides();
  }, []);

  if (status === 'LOADING') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        Cargando carrusel...
      </div>
    );
  }

  if (status === 'ERROR') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
        Error al cargar los datos del carrusel.
      </div>
    );
  }
  
  return <CarruselBase slides={slides} />; 
};