'use client'

import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchNoticia, Noticias } from "@/app/components/data/Noticias";
import { AcordeonItems, AcordeonRef } from "@/app/components/base/AcordeonBase";
import { Pagina, Footer } from "@/app/components";
import { title } from "process";

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
    const linksAcordeon : AcordeonItems[] = useMemo(() => {
        return noticias.map(element => (
            {
                href: `/noticias/${element.position}`,
                target: "",
                rel: "",
                text: `${element.date} - ${element.title}`,
            }
        ));
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
                <div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
					No se pueden cargas más Noticias.
				</div>
            );
        }
        const acordeones : AcordeonRef[] = [{
            title:TITULO_SECCION,
            links:linksAcordeon,
            open:true // Por defecto abierto
        }]
        return (
            <AcordeonItems
                acordeones={acordeones}
            />
        );
    };

    // mostramos el resultado
    return (
        <>
            <main className="bg-white text-neutral-900">
                <div className="contenedor-transparencia">
                    <Pagina IdPage={PAGE_ID} IdSection={SECTION_ID} />
                    {noticias.length > 0 && renderContent()}
                </div>
            </main>

            <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 pointer-events-none" />
                <Footer />
            </footer>
        </>
    );
}