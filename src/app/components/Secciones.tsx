"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { fetchSecciones, SeccionData } from "@/app/components/data/Seccion";

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const SolicitudSeccion = ({ IdSeccion }: { IdSeccion: string }) => {
	const [seccion, setSeccion] = useState<SeccionData[]>([]);
	const [status, setStatus] = useState<FetchState>("LOADING");
	const [verMasAbierto, setVerMasAbierto] = useState(false);

	const loadSecciones = useCallback(async (id: string) => {
		setStatus("LOADING");
		try {
			const data = await fetchSecciones(id);

			if (data.length > 0) {
				setSeccion(data); // data puede ser un objeto o undefined
				setStatus("LOADED");
			} else setStatus("ERROR");
		} catch (error) {
			console.error(error);
			setStatus("ERROR");
			// No es necesario loguear aquí, ya se hace en fetchCarrusel
		}
	}, []);

	useEffect(() => {
		loadSecciones(IdSeccion);
	}, [IdSeccion, loadSecciones]); // CORRECTO: El array vacío [] asegura que se ejecute solo al montar.

	if (seccion.length > 0) {
		// Manejo de Estados de Carga y Error
		if (status === "LOADING") {
			return (
				<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
					Cargando Sección...
				</div>
			);
		}
		// 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
		if (status === "ERROR" || !seccion) {
			return (
				<div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
					No se pudo cargar la Sección.
				</div>
			);
		}
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
											className={`transition-all duration-500 ease-in-out overflow-hidden ${
												verMasAbierto
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
							{sectionContent.gallery?.length > 0 &&
								sectionContent.gallery.map((galeria) => (
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
				))}
			</>
		);
	}
};
