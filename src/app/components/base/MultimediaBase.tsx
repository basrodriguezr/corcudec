"use client";

// Tipos: Definimos las estructuras de datos
export interface MultimediaData {
	id: string;
	title: string;
	url: string;
	url_title: string;
	text: string;
	published: boolean;
}

export const MultimediaBase = ({ content }: { content: MultimediaData }) => {
	// Usamos desestructuración para un código más limpio
	const { url, url_title, text, published } = content;
	// Lógica de Clase: Determinamos si mostrar u ocultar la sección
	const displayClass = published ? "" : "hidden";

	return (
		<div
			className={`multimedia bg-[url("/img/seccion3.webp")] ${displayClass}`}
		>
			<div className="video-contenedor">
				{/* Se usa el || '' para asegurar que src y title sean strings válidos */}
				<iframe
					className="video"
					src={url || undefined}
					title={url_title || ""}
					allowFullScreen
				></iframe>
			</div>
			<div className="texto-contenedor">
				{/* 💡 Renderizamos el texto si existe */}
				<div dangerouslySetInnerHTML={{ __html: text }} />
			</div>
		</div>
	);
};
