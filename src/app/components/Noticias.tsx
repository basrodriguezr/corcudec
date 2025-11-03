import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";

// 1. Tipos: Definimos las estructuras de datos
export interface Noticias {
	id: string;
	title: string;
	date: Date;
	published: boolean; // 💡 Corrección: Usar 'boolean' con minúscula
}

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.NOTICIAS;

// 2. Función de Obtención de Datos
export const fetchNoticia = async (): Promise<Noticias[]> => {
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
		const result = (await response.json()) as Noticias[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		// Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
		return [];
	}
}
