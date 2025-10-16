"use client";
import { Footer } from "@/app/components";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { fetchPaginas, PageData } from "@/app/components/Pagina";

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const SolicitudPagina = ({ IdPage }: { IdPage: string }) => {
    const [pagina, setPagina] = useState<PageData[]>([]);
    const [status, setStatus] = useState<FetchState>("LOADING");
    const [verMasAbierto, setVerMasAbierto] = useState(false);

    const loadPaginas = useCallback(async (id: string) => {
        setStatus("LOADING");
        try {
            const data = await fetchPaginas(id);
            setPagina(data); // data puede ser un objeto o undefined
            setStatus("LOADED");
        } catch (error) {
            setStatus("ERROR");
            // No es necesario loguear aquí, ya se hace en fetchCarrusel
        }
    }, []);

    useEffect(() => {
        loadPaginas(IdPage);
    }, [IdPage, loadPaginas]); // CORRECTO: El array vacío [] asegura que se ejecute solo al montar.

    // ## Manejo de Estados de Carga y Error

    if (status === "LOADING") {
        return (
            <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
                Cargando Pagina...
            </div>
        );
    }

    // 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
    if (status === "ERROR" || !pagina) {
        return (
            <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-500">
                No se pudo cargar la Pagina.
            </div>
        );
    }

    const currentPage = pagina.find(
        (page) => page.title === "Modelo de Prevencion del Delito"
    );
    if (!currentPage) {
        return (
            <div className="flex justify-center items-center h-48 text-lg font-semibold text-orange-500">
                El contenido Modelo de Prevencion del Delito no fue encontrado en la
                API.
            </div>
        );
    }

    const pageContent = pagina[0];
    const hasHiddenContent =
        pageContent.hidden !== null && pageContent.hidden.trim() !== "";

    return (
        <>
            <div className="contenedor-transparencia">
                <section className="historia-section">
                    <div className="titulo-pagina">
                        <h1 className="titulo">{currentPage.title}</h1>
                    </div>
                    <h2 className="historia-titulo">
                        <span>{currentPage.text}</span>
                    </h2>
                    <figure>
                        <Image
                            src={currentPage.image}
                            width={1060}
                            height={360}
                            alt="Transparencia"
                        />
                    </figure>
                    <div className="historia-texto">
                        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
                        {hasHiddenContent && (
                            <>
                                {/* Contenido oculto: Se ajustan las clases para una transición suave */}
                                <div
                                    id="bloque-ver-mas"
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        verMasAbierto
                                            ? "max-h-[2000px] opacity-100 mt-4"
                                            : "max-h-0 opacity-0"
                                    }`}
                                    aria-hidden={!verMasAbierto}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{ __html: pageContent.hidden }}
                                    />
                                </div>

                                {/* Botón para alternar la visibilidad */}
                                <button
                                    type="button"
                                    onClick={() => setVerMasAbierto((v) => !v)}
                                    className="ver-mas-btn inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    aria-expanded={verMasAbierto}
                                    aria-controls="bloque-ver-mas"
                                >
                                    {verMasAbierto ? "Ver menos" : "Ver más"}
                                    <span
                                        className={`transition-transform duration-300 ${
                                            verMasAbierto ? "rotate-180" : ""
                                        }`}
                                        aria-hidden
                                    >
                                        ▼
                                    </span>
                                </button>
                            </>
                        )}
                    </div>
                </section>
            </div>
            <footer className="relative min-h-[60vh] bg-[url('/corcudec/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 pointer-events-none" />
                <Footer />
            </footer>
        </>
    );
}
