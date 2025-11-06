"use client";

import { useState, useEffect } from "react";
import { NoticiaBase, NewsData } from "../base/NoticiaBase";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.NOTICIA;

// Función de Obtención de Datos
async function fetchNews(value : string): Promise<NewsData[]> {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };

    try {
        const response = await fetch(API_URL + value, requestOptions);

        if (!response.ok) {
            // Si la respuesta no es 200, lanzamos un error HTTP
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Asumimos que la API retorna un array de NewsData
        const result = (await response.json()) as NewsData[];

        return result;

    } catch (error) {
        // Registramos el error y retornamos un array vacío para manejo en el componente
        console.error("Error al obtener los datos de Drupal:", error);
        return [];
    }
}

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const Noticia = ({ IdNews }: { IdNews: string }) => { 
    // Inicializamos newsContent a null y tipamos para permitir null
    const [newsContent, setNewsContent] = useState<NewsData | null>(null);
    const [status, setStatus] = useState<FetchState>("LOADING"); // Tipamos el estado

    useEffect(() => {
        // Si no hay ID, marcamos error o cargado si ese es el comportamiento deseado.
        if (!IdNews) {
            setStatus("ERROR");
            setNewsContent(null);
            return;
        }

        const loadNews = async (id : string) =>{
            setStatus("LOADING");
            setNewsContent(null); // Limpiar contenido al iniciar una nueva carga

            try {
                // Aquí se usaría el ID real
                const data = await fetchNews(id);
                // La API retorna un array, tomamos el primer elemento (si existe)
                const singlePage = data.length > 0 ? data[0] : null;

                if (singlePage) {
                    setNewsContent(singlePage);
                    setStatus("LOADED");
                } else {
                    setStatus("ERROR"); 
                }
            } catch (error) {
                // Si el fetch falló (error de red o HTTP != 200)
                console.error(error);
                setStatus("ERROR");
                setNewsContent(null);
            }
        };
        
        loadNews(IdNews);
    }, [IdNews]); 

    // Manejo de Estados de Carga
    if (status === "LOADING") {
        return (
            <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
                Cargando Noticia...
            </div>
        );
    }

    // Manejo de Estado de Error o No Encontrado
    if (status === "ERROR" || !newsContent) {
        return (
            <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
                No se pudo cargar la Noticia.
            </div>
        );
    }

    // Renderizado del componente base con los datos
    return <NoticiaBase news={newsContent} />; 
};