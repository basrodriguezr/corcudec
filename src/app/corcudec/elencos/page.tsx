import { SolicitudPagina } from "@/app/components/PaginaPlana";
// Componente principal de la vista, ahora usa el componente reutilizable
export default function MostrarPagina() {
	// Código Página 
	const IdPagina = "92";
	const section = "elencos";
	//mostramos el resultado
	return <SolicitudPagina IdPage={IdPagina} IdSection={section}/>;
}