'use client'

import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchNoticia, Noticias } from "@/app/components/Noticias"; 
import { Acordeon, AcordeonRef } from "@/app/components/Acordeon";
import { SolicitudPagina } from "@/app/components/PaginaPlana";
import { Footer } from "@/app/components";

const PAGE_ID = "102";
const SECTION_ID = "noticias-principal";
const TITULO_SECCION = "Noticias Recientes";

export default function MostrarNoticias() {
    // Estados: Se añade estado para la carga (loading) y el error.
    const [noticias, setNoticias] = useState<Noticias[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadNoticias = useCallback(async () => {
        setIsLoading(true); // Inicia la carga
        setError(null);    // Limpia errores previos
        
        try {
            // Se asume que fetchNoticia puede devolver un array vacío o null/undefined si hay un problema
            const data = await fetchNoticia();

            if (Array.isArray(data) && data.length > 0) {
                setNoticias(data);
            } else {
                // Manejo de caso en que los datos no son el formato esperado
                setError("La estructura de los datos de noticias no es válida.");
                setNoticias([]);
            }
        } catch (err) {
            console.error("Error al cargar noticias:", err);
            setError("Error al cargar las noticias. Inténtelo de nuevo.");
            setNoticias([]);
        } finally {
            setIsLoading(false); // Finaliza la carga, sin importar el resultado
        }
    }, []);

    // useEffect: Se ejecuta una sola vez al montar el componente para cargar los datos.
    useEffect(() => {
        loadNoticias();
    }, [loadNoticias]); // Dependencia: loadNoticias es estable gracias a useCallback

    // useMemo: Se utiliza para calcular el array de enlaces solo cuando el array 'noticias' cambia.
    // Esto previene recálculos innecesarios en cada render si otras partes del estado cambiaran.
    const linksAcordeon = useMemo(() => {
        return noticias.map(element => ({
            href: `/noticias/${element.id}`,
            target: "",
            rel: "",
            text: `${element.date} - ${element.title}`,
        } as AcordeonRef));
    }, [noticias]);

    // Renderizado Condicional: Estructura más clara para mostrar estados.
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
                    Cargando más Noticias...
                </div>
            );
        }
        if (error) {
            return (
                <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-500">
					No se pueden cargas más Noticias.
				</div>
            );
        }
        return (
            <Acordeon 
                links={linksAcordeon} 
                texto={TITULO_SECCION} 
                abierto={true} // Por defecto abierto
            />
        );
    };

    // mostramos el resultado
    return (
        <>
            <main className="bg-white text-neutral-900">
                <div className="contenedor-transparencia">
                    <SolicitudPagina IdPage={PAGE_ID} IdSection={SECTION_ID} />
                    {renderContent()}
                </div>
            </main>

            <footer className="relative min-h-[60vh] bg-[url('/corcudec/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 pointer-events-none" />
                <Footer />
            </footer>
        </>
    );
}