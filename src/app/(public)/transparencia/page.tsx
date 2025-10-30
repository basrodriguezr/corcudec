'use client'
import { SolicitudPagina } from "@/app/components/PaginaPlana";
import { Footer } from "@/app/components";
import { Acordeon, AcordeonRef } from "@/app/components/Acordeon";

const PAGE_ID = "82";
const SECTION_ID = "transparencia";

// Componente principal de la vista, ahora usa el componente reutilizable
export default function MostrarPagina() {
	const listaLinks: AcordeonRef[] = [
		{
			href: "https://www.corcudec.cl/archivos/otros-aportes-enero-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "OTROS APORTES ENERO 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/otros-aportes-febrero-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "OTROS APORTES FEBRERO 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/estatutos-corcudec.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Estatutos corcudec (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/ingreso-fondos-publicos.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Ingreso Fondos Públicos (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/estructura-organica-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Estructura Orgánica 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/otros-aportes-marzo-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Otros Aportes Marzo 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/responsable-gestion-y-administracion.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Responsable Gestión y Administración (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/composicion-directorio-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Composición directorio 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/rex-578-aprueba-convenio-corcudec-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "REX N° 578 Aprueba Convenio Corcudec 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/certificado-declaracion-de-intereses.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Certificado Declaración de Intereses (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/procedimiento-contratacion-personal-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Procedimiento contratación personal 2025 (.PDF)"
		},
		{
			href: "https://www.corcudec.cl/archivos/recurso-humanos-mincap-abril-2025.pdf",
			target: "_blank",
			rel: "noopener noreferrer",
			text: "Recurso Humanos MINCAP abril 2025 (.PDF)"
		}
	];
	const titulo = "Transparencia 2025";
	//mostramos el resultado
	return (
		<>
		<main className="bg-white text-neutral-900">
			<div className="contenedor-transparencia">
				<SolicitudPagina IdPage={PAGE_ID} IdSection={SECTION_ID}/>
				<Acordeon links={listaLinks} texto={titulo}/>
			</div>
		</main>
		
		<footer className="relative min-h-[60vh] bg-[url('/corcudec/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
			<div className="absolute inset-0 pointer-events-none" />
			<Footer/>
		</footer>
		</>
	);
}