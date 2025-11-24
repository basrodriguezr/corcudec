"use client";

import Image from "next/image";
import { useState } from "react";
import imageLoader from "@/lib/imageLoader";

// Definimos las estructuras de datos
export interface NewsData {
    id: string;
    title: string;
    date: string;
    image: string;
    content: string;
    hidden: string;
    gallery: {
        gallery_url: string;
        gallery_alt: string;
        gallery_text: string;
    }[];
    published: boolean;
}

export const NoticiaBase = ({ news }: { news: NewsData }) => {

    const [verMasAbierto, setVerMasAbierto] = useState(false);

    // Aseguramos que el contenido oculto exista y no esté vacío
    const hasHiddenContent =
        news.hidden && news.hidden.trim() !== "";

    return (
        <>
            <section className="historia-section">
                <div className="titulo-pagina">
                    <h1 className="titulo">{news.title}</h1>
                </div>
            </section>
            <section className="historia-section">
                <h2 className="historia-titulo">
                    {/* Se convierte la fecha a string si no lo es ya */}
                    <span>{news.date}</span>
                </h2>
                {news.image && news.image.trim() !== "" && (
                    <figure>
                        <Image
                            loader={imageLoader}
                            src={news.image}
                            width={1060}
                            height={360}
                            alt={news.title}
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1060px"
                        />
                    </figure>
                )}
                <div className="historia-texto">
                    {/* Contenido principal */}
                    <div dangerouslySetInnerHTML={{ __html: news.content }} />

                    {/* Lógica de "Ver Más" */}
                    {hasHiddenContent && (
                        <>
                            {/* Contenido oculto: Se ajustan las clases para una transición suave */}
                            <div
                                id="bloque-ver-mas"
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${verMasAbierto
                                    ? "max-h-[2000px] opacity-100 mt-4"
                                    : "max-h-0 opacity-0"
                                    }`}
                                aria-hidden={!verMasAbierto}
                            >
                                <div dangerouslySetInnerHTML={{ __html: news.hidden }} />
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
                                    className={`transition-transform duration-300 ${verMasAbierto ? "rotate-180" : ""
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
        </>
    );
};