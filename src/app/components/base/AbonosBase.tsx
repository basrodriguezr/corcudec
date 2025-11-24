"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Definimos las estructuras de datos
export interface AbonoPage {
	id: string;
	title: string;
	sections: {
		section_title: string;
		section_text: string;
		images_links: {
			image_url: string;
			image_alt: string;
			link_url: string;
			link_title: string;
		}[];
	}[];
	published: boolean;
}

// Componente de Presentación
export const SolicitudAbonos = ({ pagina }: { pagina: AbonoPage[] }) => {
	// Manejo de estado sin datos (si el array está vacío) - Se puede mover a este nivel para que sea más robusto
	if (pagina.length === 0) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
				No se encontraron los elementos de la página.
			</div>
		);
	}
	const pageContent = pagina[0];

	return (
		<>
			<section className="historia-section">
				<div className="titulo-pagina">
					<h1 className="titulo">{pageContent.title}</h1>
				</div>
			</section>
			{pageContent.sections.map((section, index) => (
				<section key={index} className="historia-section">
					<h2 className="historia-titulo">
						<span>{section.section_title}</span>
					</h2>
					<div className="historia-texto">
						<div dangerouslySetInnerHTML={{ __html: section.section_text }} />
					</div>
					<div className="historia-galeria">
						{section.images_links?.length > 0 &&
							section.images_links.map((items, index2) => (
								<figure className="abonos-items" key={index2}>
									<Link href={items.link_url} target="_blank" rel="noreferrer">
										<Image
											src={items.image_url}
											width={200}
											height={200}
											alt={items.image_alt}
											className="w-full h-auto object-cover"
											unoptimized={false}
										/>
									</Link>
								</figure>
							))}
					</div>
				</section>
			))}
		</>
	);
};
