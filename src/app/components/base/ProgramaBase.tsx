"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Definimos las estructuras de datos
export interface ProgramaPage {
	id: string;
	title: string;
	image: string;
	content: string;
	hidden: string;
	sections: {
		section_title: string;
		images_links: {
			image_url: string;
			image_alt: string;
			title: string;
			text: string
			link_url: string;
			link_title: string;
		}[];
	}[];
	published: boolean;
}

// Componente de Presentación
export const SolicitudPrograma = ({ pagina }: { pagina: ProgramaPage[] }) => {
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

	return (
		<>
			<section className="historia-section">
				<div className="titulo-pagina">
					<h1 className="titulo">{pageContent.title}</h1>
				</div>
			</section>
			<section className="historia-section">
				{pageContent.image !== null && pageContent.image.trim() !== "" && (
					<figure>
						<Image
							src={pageContent.image}
							width={1060}
							height={360}
							alt={pageContent.title}
							unoptimized={false}
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
			</section>
			{pageContent.sections.map((secciones, index)=>(
				<section key={index} className="historia-section">
					<h2 className="historia-titulo">
						<span>{secciones.section_title}</span>
					</h2>
					{secciones.images_links.map((imagen, ix)=>(
						<div key={ix} className="historia-programa">
							<div className="programa-item">
								<figure>
									<Image
										src={imagen.image_url}
										width={200}
										height={200}
										alt={imagen.image_alt}
										unoptimized={false}
									/>
								</figure>
							</div>
							<div className="programa-item">
								<h3>{imagen.title}</h3>
								<div dangerouslySetInnerHTML={{ __html: imagen.text }} />
								<div className="w-100 text-center">
									<Link 
										className="btn-url my-4" 
										href={imagen.link_url} 
										target="_blank"
									>
										Comprar Aquí
									</Link>
								</div>
							</div>
						</div>
					))}
				</section>
			))}
		</>
	);
};


