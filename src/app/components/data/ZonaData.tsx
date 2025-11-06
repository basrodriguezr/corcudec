import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";

// 1. Tipos: Definimos las estructuras de datos
export interface ZonaItem {
	id: number;
	title: string;
	image: string;
	alt: string;
	href: string;
	target: string;
	published: boolean;
}

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.ZONA;

// 2. Función de Obtención de Datos
export const fetchZona = async (): Promise<ZonaItem[]> => {
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};
	try {
		const response = await fetch(API_URL, requestOptions);

		if (!response.ok) {
			throw Error(`HTTP error! status: ${response.status}`);
		}
		// Asumimos que la API retorna un ÚNICO objeto MultimediaData
		const result = (await response.json()) as ZonaItem[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		// Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
		return [];
	}
}
