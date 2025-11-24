"use client"

import { useCallback, useEffect, useState } from "react";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";
import { SeccionData, SolicitudSeccion } from "../base/SeccionesBase";

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.SECCIONES;

// 2. Función de Obtención de Datos
export const fetchSecciones = async (value : string) => {
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		next: { revalidate: 300 }
	};
	try {
		const response = await fetch(API_URL + value, requestOptions);

		if (!response.ok) {
			throw Error(`HTTP error! status: ${response.status}`);
		}
		// Asumimos que la API retorna un ÚNICO objeto MultimediaData
		const result = (await response.json()) as SeccionData[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		// Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
		return [];
	}
}

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const Seccion = ({ IdSeccion }: { IdSeccion : string }) => {
	const [seccion, setSeccion] = useState<SeccionData[]>([]);
	const [status, setStatus] = useState<FetchState>("LOADING");

	const loadSecciones = useCallback(async (id: string) => {
		setStatus("LOADING");
		try {
			const data = await fetchSecciones(id);

			if (data) {
				setSeccion(data); // data puede ser un objeto o undefined
				setStatus("LOADED");
			} else setStatus("ERROR");
		} catch (error) {
			console.error(error);
			setStatus("ERROR");
			// No es necesario loguear aquí, ya se hace en fetchCarrusel
		}
	}, []);

	useEffect(() => {
		loadSecciones(IdSeccion);
	}, [IdSeccion, loadSecciones]); // CORRECTO: El array vacío [] asegura que se ejecute solo al montar.
	
	// Manejo de Estados de Carga y Error
	if (status === "LOADING") {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
				Cargando Sección...
			</div>
		);
	}

	// 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
	if (status === "ERROR" || !seccion) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
				No se pudo cargar la Sección.
			</div>
		);
	}

	return(
		<SolicitudSeccion seccion={seccion} />
	)
};
