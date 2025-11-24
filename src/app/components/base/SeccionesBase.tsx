"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Definimos las estructuras de datos
export interface SeccionData {
	id: string;
	title: string;
	image: string;
	content: string;
	hidden: string;
	gallery: {
		gallery_url: string;
		gallery_alt: string;
		gallery_text: string;
	}[];
	files: {
		file_url: string;
		file_text: string;
	}[];
	published: boolean;
}

export const SolicitudSeccion = ({ seccion }: { seccion: SeccionData[] }) => {
	const [verMasAbierto, setVerMasAbierto] = useState(false);

	if (seccion.length > 0) {
		return (
			<>
				{seccion.map((sectionContent) => (
					<section key={sectionContent.id} className="historia-section">
						<h2 className="historia-titulo">
							<span>{sectionContent.title}</span>
						</h2>
						{sectionContent.image !== null &&
							sectionContent.image.trim() !== "" && (
								<figure>
									<Image
										src={sectionContent.image}
										width={1060}
										height={360}
										alt={sectionContent.title}
										sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1060px"
									/>
								</figure>
							)}
						<div className="historia-texto">
							<div
								dangerouslySetInnerHTML={{ __html: sectionContent.content }}
							/>
							{sectionContent.hidden !== null &&
								sectionContent.hidden.trim() !== "" && (
									<>
										{/* Contenido oculto: Se ajustan las clases para una transición suave */}
										<div
											id="bloque-ver-mas"
											className={`transition-all duration-500 ease-in-out overflow-hidden ${verMasAbierto
													? "max-h-[2000px] opacity-100 mt-4"
													: "max-h-0 opacity-0"
												}`}
											aria-hidden={!verMasAbierto}
										>
											<div
												dangerouslySetInnerHTML={{
													__html: sectionContent.hidden
												}}
											/>
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
												className={`transition-transform duration-300 ${verMasAbierto ? "rotate-180" : ""
													}`}
												aria-hidden
											>
												▼
											</span>
										</button>
									</>
								)}
						</div>
						<div className="historia-links">
							{sectionContent.files.map((files, index) => (
								<Link
									key={"urlsec" + index}
									href={files.file_url}
									target="_blank"
									rel="noreferrer"
									className="btn-url2"
								>
									{files.file_text}
								</Link>
							))}
						</div>
						<div className="historia-galeria">
							{sectionContent.gallery?.length > 0 &&
								sectionContent.gallery.map((galeria) => (
									<div key={galeria.gallery_alt} className="galeria-item">
										<figure>
											<Image
												src={galeria.gallery_url}
												width={200}
												height={200}
												alt={galeria.gallery_alt}
												sizes="(max-width: 640px) 80vw, 200px"
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
				))}
			</>
		);
	}
};
