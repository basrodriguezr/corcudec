"use client";

import Image from "next/image";
import { useState } from "react";
import { SolicitudSeccion } from "@/app/components/Secciones";

// Definimos las estructuras de datos
export interface PageData {
	id: string;
	title: string;
	text: string;
	image: string;
	content: string;
	hidden: string;
	gallery: {
		gallery_url: string;
		gallery_alt: string;
		gallery_text: string;
	}[];
	published: boolean;
}

// Componente de Presentación
export const SolicitudPagina = ({
	pagina,
	IdSection = ""
}: {
	pagina: PageData[];
	IdSection?: string;
}) => {
	const [verMasAbierto, setVerMasAbierto] = useState(false);

	// Manejo de estado sin datos (si el array está vacío) - Se puede mover a este nivel para que sea más robusto
	if (pagina.length === 0) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
				No se encontraron los elementos de la página.
			</div>
		);
	}

	const pageContent = pagina[0];
	const hasHiddenContent =
		pageContent.hidden !== null && pageContent.hidden.trim() !== "";
	// buscamos las secciones según su identificador.
	const sectionContent = (
		<SolicitudSeccion IdSeccion={IdSection}></SolicitudSeccion>
	);
	// si no existen secciones no se muestran en la página.
	const hasSectionContent = sectionContent !== null;

	return (
		<>
			<section className="historia-section">
				<div className="titulo-pagina">
					<h1 className="titulo">{pageContent.title}</h1>
				</div>
				<h2 className="historia-titulo">
					<span>{pageContent.text}</span>
				</h2>
				{pageContent.image !== null && pageContent.image.trim() !== "" && (
					<figure>
						<Image
							src={pageContent.image}
							width={1060}
							height={360}
							alt={pageContent.title}
						/>
					</figure>
				)}
				<div className="historia-texto">
					<div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
					{hasHiddenContent && (
						<>
							{/* Contenido oculto: Se ajustan las clases para una transición suave */}
							<div
								id="bloque-ver-mas"
								className={`transition-all duration-500 ease-in-out overflow-hidden ${
									verMasAbierto
										? "max-h-[2000px] opacity-100 mt-4"
										: "max-h-0 opacity-0"
								}`}
								aria-hidden={!verMasAbierto}
							>
								<div dangerouslySetInnerHTML={{ __html: pageContent.hidden }} />
							</div>

							{/* Botón para alternar la visibilidad */}
							<button
								type="button"
								onClick={() => setVerMasAbierto((v) => !v)}
								className="ver-mas-btn inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
								aria-expanded={verMasAbierto}
								aria-controls="bloque-ver-mas"
							>
								{verMasAbierto ? "Ver menos" : "Ver más"}
								<span
									className={`transition-transform duration-300 ${
										verMasAbierto ? "rotate-180" : ""
									}`}
									aria-hidden
								>
									▼
								</span>
							</button>
						</>
					)}
				</div>
				<div className="historia-galeria">
					{pageContent.gallery?.length > 0 &&
						pageContent.gallery.map((galeria) => (
							<div key={galeria.gallery_alt} className="galeria-item">
								<figure>
									<Image
										src={galeria.gallery_url}
										width={200}
										height={200}
										alt={galeria.gallery_alt}
									/>
								</figure>
								<h4>
									<div
										dangerouslySetInnerHTML={{
											__html: galeria.gallery_text
										}}
									/>
								</h4>
							</div>
						))}
				</div>
			</section>
			{hasSectionContent && sectionContent}
		</>
	);
};
