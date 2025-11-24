"use client";

import { useState, useEffect } from "react";
import { MultimediaBase, MultimediaData } from "../base/MultimediaBase";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';

const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.MULTIMEDIA;

// Función de Obtención de Datos
async function fetchMultimedia(): Promise<MultimediaData[] | undefined> {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 300 }
  };

  try {
    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Asumimos que la API retorna un elemento de MultimediaData
    const result = (await response.json()) as MultimediaData[];

    return result;

  } catch (error) {
    console.error("Error al obtener los datos de Drupal:", error);
    return undefined;
  }
}

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// Componente Principal (Contenedor)
export const Multimedia = () => {
  const [contenido, setContenido] = useState<MultimediaData[] | undefined>(undefined);
  const [status, setStatus] = useState<FetchState>('LOADING');

  useEffect(() => {
    const loadMultimedia = async () => {
      setStatus('LOADING');
      try {
        const data = await fetchMultimedia();
        // Si data es undefined (error de fetch) o un array vacío (no hay contenido)
        if (!data || data.length === 0) {
            setStatus('ERROR');
        } else {
            setContenido(data); 
            setStatus('LOADED');
        }
      } catch (error) {
        console.error(error);
        setStatus('ERROR');
      }
    };
    loadMultimedia();
  }, []); // El array vacío asegura que se ejecute solo al montar.

  if (status === 'LOADING') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        Cargando contenido multimedia...
      </div>
    );
  }

  // Si el estado es ERROR o si el contenido es undefined o un array vacío
  if (status === 'ERROR' || !contenido || contenido.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
        No se pudo cargar el contenido multimedia.
      </div>
    );
  }

  // Usamos el primer elemento del array para renderizar.
  const firstContent = contenido[0];

  return (
    // Renderiza el componente base con los datos
    <MultimediaBase content={firstContent} />
  );
}