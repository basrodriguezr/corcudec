"use client";

import { useState, useEffect } from "react";
// Asumo que estos imports están disponibles y correctamente definidos
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';

// 1. Tipos: Definimos las estructuras de datos
interface MultimediaData {
  id: string;
  title: string;
  url: string;
  url_title: string;
  text: string;
  published: boolean; // 💡 Corrección: Usar 'boolean' con minúscula
}

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.MULTIMEDIA;

// 2. Función de Obtención de Datos
async function fetchCarrusel(): Promise<MultimediaData[] | undefined> {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Asumimos que la API retorna un ÚNICO objeto MultimediaData
    const result = (await response.json()) as MultimediaData[];

    return result;

  } catch (error) {
    console.error("Error al obtener los datos de Drupal:", error);
    // Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
    return undefined;
  }
}

// 3. Componente Principal
export const Multimedia = () => {
  // Tipado: El estado puede ser MultimediaData o null/undefined.
  // Lo inicializamos en 'undefined' para indicar que aún no hay datos.
  const [contenido, setContenido] = useState<MultimediaData[] | undefined>(undefined);
  const [status, setStatus] = useState<FetchState>('LOADING');

  useEffect(() => {
    const loadMultimedia = async () => {
      setStatus('LOADING');
      try {
        const data = await fetchCarrusel();
        setContenido(data); // data puede ser un objeto o undefined
        setStatus('LOADED');
      } catch (error) {
        setStatus('ERROR');
        // No es necesario loguear aquí, ya se hace en fetchCarrusel
      }
    };
    loadMultimedia();
  }, []); // CORRECTO: El array vacío [] asegura que se ejecute solo al montar.

  // ## Manejo de Estados de Carga y Error

  if (status === 'LOADING') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        Cargando contenido multimedia...
      </div>
    );
  }

  // 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
  if (status === 'ERROR' || !contenido) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-500">
        No se pudo cargar el contenido multimedia.
      </div>
    );
  }

  // ## Renderizado Final (Cuando el status es 'LOADED' y 'contenido' existe)

  // Optimización: Usamos desestructuración para evitar el operador ?.
  const { url, url_title, text, published } = contenido[0];
  // Lógica de Clase: Determinamos si mostrar u ocultar la sección
  const displayClass = published ? "" : "hidden";

  return (
    // Se usa 'url' directamente porque ya confirmamos que 'contenido' existe.
    <div className={`multimedia bg-[url("/img/seccion3.webp")] ${displayClass}`}>
      <div className="video-contenedor">
        {/* Se usa el || '' para asegurar que src y title sean strings válidos */}
        <iframe className="video" src={url || undefined} title={url_title || ''} allowFullScreen></iframe>
      </div>
      <div className="texto-contenedor">
        {/* 💡 Renderizamos el texto si existe */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}