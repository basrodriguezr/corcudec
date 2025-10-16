
import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";

// 1. Tipos: Definimos las estructuras de datos
export interface PageData {
	id: string;
	title: string;
	text: string;
	image: string;
	content: string;
	hidden: string;
	published: boolean; // 💡 Corrección: Usar 'boolean' con minúscula
}

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

// URL de la API (definida fuera del componente)
const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.PAGINA;

// 2. Función de Obtención de Datos
export const fetchPaginas = async (value : string) => {
	// export async function fetchPaginas(): Promise<PageData[]> {
	// 	const requestOptions = {
	// 		method: "GET",
	// 		headers: { "Content-Type": "application/json" }
	// 	};
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};
	try {
		const response = await fetch(API_URL + value, requestOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// Asumimos que la API retorna un ÚNICO objeto MultimediaData
		const result = (await response.json()) as PageData[];

		return result;
	} catch (error) {
		console.error("Error al obtener los datos de Drupal:", error);
		// Corrección: Devuelve 'undefined' explícitamente si falla (o throw error)
		return [];
	}
}
