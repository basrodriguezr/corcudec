'use client'
import { Footer } from "@/app/components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';

// 1. Tipos: Definimos las estructuras de datos
interface PageData {
  id: string;
  title: string;
  text: string;
  image: string;
  content: string;
  published: boolean; // 💡 Corrección: Usar 'boolean' con minúscula
}

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.PAGINAS;

// 2. Función de Obtención de Datos
async function fetchPaginas(): Promise<PageData[]> {
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
    const result = (await response.json()) as PageData[];

    return result;

  } catch (error) {
    console.error("Error al obtener los datos de Drupal:", error);
    // Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
    return []; 
  }
}

export default function MostrarPagina() {
  const [pagina, setPagina] = useState<PageData[]>([]);
  const [status, setStatus] = useState<FetchState>('LOADING');

  useEffect(() => {
    const loadPaginas = async () => {
      setStatus('LOADING');
      try {
        const data = await fetchPaginas();
        setPagina(data); // data puede ser un objeto o undefined
        setStatus('LOADED');
      } catch (error) {
        setStatus('ERROR');
        // No es necesario loguear aquí, ya se hace en fetchCarrusel
      }
    };
    loadPaginas();
  }, []); // CORRECTO: El array vacío [] asegura que se ejecute solo al montar.

  // ## Manejo de Estados de Carga y Error
  
  if (status === 'LOADING') {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
        Cargando Pagina...
      </div>
    );
  }

  // 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
  if (status === 'ERROR' || !pagina) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-500">
        No se pudo cargar la Pagina.
      </div>
    );
  }

  const currentPage = pagina.find(page => page.title === "Modelo de Prevencion del Delito");
  if (!currentPage) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-orange-500">
        El contenido Modelo de Prevencion del Delito no fue encontrado en la API.
      </div>
    );
  }

  return (
    <>
          <div className="contenedor-transparencia">
            
            <section className="historia-section">
              <div className="titulo-pagina">
                <h1 className="titulo">{currentPage.title}</h1>
              </div>
              <h2 className="historia-titulo"><span>{currentPage.text}</span></h2>
                  <figure>
                      <Image src={currentPage.image} width={1060} height={360} alt="Transparencia"/>
                  </figure>
                  <div className="historia-texto">
                    <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                </div>
            </section>
          </div>
          <footer className="relative min-h-[60vh] bg-[url('/corcudec/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
              <div className="absolute inset-0 pointer-events-none" />
              <Footer />
          </footer>
        </> 
  )
}
