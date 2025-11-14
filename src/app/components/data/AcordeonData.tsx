"use client";

import { useCallback, useEffect, useState } from "react";
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";
import { AcordeonItems, AcordeonRef } from "../base/AcordeonBase";

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.ACORDEON;

// Función de Obtención de Datos
async function fetchAcordeon(value: string): Promise<AcordeonRef[]> {
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};
	try {
		const response = await fetch(API_URL + value, requestOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = (await response.json()) as AcordeonRef[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		return [];
	}
}

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const Acordeon = ({ IdSection }: { IdSection: string }) => {
	const [acordeon, setAcordeon] = useState<AcordeonRef[]>([]);
	const [status, setStatus] = useState<FetchState>("LOADING");

	const loadAcordeon = useCallback(async (id: string) => {
		setStatus("LOADING");
		try {
			const data = await fetchAcordeon(id);

			if (data.length > 0) {
				setAcordeon(data); // data puede ser un objeto o undefined
				setStatus("LOADED");
			} else setStatus("ERROR");
		} catch (error) {
			console.error(error);
			setStatus("ERROR");
		}
	}, []);

	useEffect(() => {
		loadAcordeon(IdSection);
	}, [IdSection, loadAcordeon]);

	if (acordeon.length > 0) {
		// Manejo de Estados de Carga y Error
		if (status === "LOADING") {
			return (
				<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
					Cargando elementos...
				</div>
			);
		}

		// Si el estado es ERROR o si el contenido es undefined después de cargar
		if (status === "ERROR" || !acordeon) {
			return (
				<div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
					No se pudo cargar los elementos.
				</div>
			);
		}

		return (
			<AcordeonItems acordeones={acordeon}/>
		);
	}
};
