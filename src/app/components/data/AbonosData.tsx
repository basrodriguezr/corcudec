"use client"

import { useCallback, useEffect, useState } from "react";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";
import { AbonoPage, SolicitudAbonos } from "../base/AbonosBase";

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.ABONOS;

// Función de Obtención de Datos
async function fetchPaginas(): Promise<AbonoPage[]> {
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

		const result = (await response.json()) as AbonoPage[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		return [];
	}
};

// Estados para seguimiento de carga y posibles errores
type FetchState = 'LOADING' | 'LOADED' | 'ERROR';

export const DatosAbonos = () =>{
	const [pagina, setPagina] = useState<AbonoPage[]>([]);
	const [status, setStatus] = useState<FetchState>('LOADING');

	const loadPaginas = useCallback(async () => {
		setStatus("LOADING");
		try {
			const data = await fetchPaginas();

			if (data.length > 0) {
				setPagina(data); // data puede ser un objeto o undefined
				setStatus("LOADED");
			} else setStatus("ERROR");
		} catch (error) {
			console.error(error);
			setStatus("ERROR");
		}
	},[]);

	useEffect(() => {
		loadPaginas();
	}, [loadPaginas]);

	// Manejo de Estados de Carga y Error
	if (status === "LOADING") {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
				Cargando Pagina...
			</div>
		);
	}

	// Si el estado es ERROR o si el contenido es undefined después de cargar
	if (status === "ERROR" || !pagina) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
				No se pudo cargar la Pagina.
			</div>
		);
	}

	return <SolicitudAbonos pagina={pagina} />;
};