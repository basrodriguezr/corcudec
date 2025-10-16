'use client'
import { Footer } from "@/app/components";
import { Acordeon } from "@/app/components/Acordeon";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from '@/config/global';
import { fetchPaginas, PageData } from "@/app/components/Pagina";

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.PAGINAS;

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

  const currentPage = pagina.find(page => page.title === "Transparencia");
  if (!currentPage) {
    return (
      <div className="flex justify-center items-center h-48 text-lg font-semibold text-orange-500">
        El contenido Transparencia no fue encontrado en la API.
      </div>
    );
  }

  return (
    <>
      <main className="contenedor-transparencia">
        <section className="historia-section">
          <div className="titulo-pagina">
            <h1 className="titulo">{currentPage.title}</h1>
          </div>
          <h2 className="historia-titulo"><span>{currentPage.text}</span></h2>
          <figure>
            <Image src={currentPage.image} width={1060} height={360} alt="Transparencia" />
          </figure>
          <div className="historia-texto">
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </div>
        </section>
        <section className="relative w-full max-w-full mx-auto mt-auto">
          <Acordeon />
        </section>
      </main>
      <footer className="relative min-h-[60vh] bg-[url('/corcudec/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
        <div className="absolute inset-0 pointer-events-none" />
        <Footer />
      </footer>
    </>

  )
}
