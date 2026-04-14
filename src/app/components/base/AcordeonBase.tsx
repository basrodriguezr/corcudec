import React, { useState } from "react";
import Link from "next/link";

export interface LinksItems {
	href: string;
	target: string;
	rel: string;
	text: string;
}
export interface CarpetaRef{
	title: string;
	show: boolean;
	open: boolean;
	links: LinksItems[];
}
export interface AcordeonRef{
	title: string;
	open: boolean;
	links: LinksItems[];
	folders: CarpetaRef[];
}
interface AcordeonProps{
	acordeones : AcordeonRef[];
}

export const AcordeonItems = ({ acordeones }: AcordeonProps) => {
	const initialOpenIndex = acordeones.findIndex(acordeon => acordeon.open === true);
	const initialOpenFolder = acordeones.findIndex(acc => acc.folders?.some(f => f.open));
    const [openIndex, setOpenIndex] = useState<number>(initialOpenIndex);
	const [openFolderIndex, setOpenFolderIndex] = useState<number>(initialOpenFolder);
	// Manejo de estado sin datos (si el array está vacío) - Se puede mover a este nivel para que sea más robusto
	if (acordeones.length === 0) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
			No se encontraron elementos para el acordeon.
			</div>
		);
	}
	// Función para manejar el clic:
    // Si el índice clicado es el que ya está abierto, lo cierra (lo establece a -1).
    // Si es otro índice, lo abre.
    const toggleAcordeon = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

	return (
		<>
			{acordeones.map((acordeon, index)=>{
				// Verificar si el acordeón actual está abierto
                const isOpen = openIndex === index;
				return(
				<section key={index}>
					<button
						onClick={() => toggleAcordeon(index)}
						className={`accordion-btn ${isOpen ? "active" : ""}`}
					>
						{acordeon.title}
					</button>

					<div className={`accordion-content ${isOpen ? "block" : "hidden"}`}>
						{acordeon.folders?.length > 0 && acordeon.folders?.map((carpeta, index2) => {
							const isFolderOpen = openFolderIndex === index2;
							const showTitle = carpeta.show ? carpeta.title : "";
							return (
								<div key={index2}>
									<button
										onClick={() => setOpenFolderIndex(isFolderOpen ? -1 : index2)}
										className={`folder-btn ${isFolderOpen ? "active" : ""}`}
									>
										∟ 📂 {showTitle}
									</button>
									<div className={`folder-content ${isFolderOpen ? "block" : "hidden"}`}>
										<ul className="font-medium">
											{carpeta.links.map((LinkRef, index3) => (
												<li key={index3}>
													<Link
														href={LinkRef.href}
														target={LinkRef.target}
														rel={LinkRef.rel}
													>
														{LinkRef.text}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							);
						})}
						<ul className="font-medium">
							{acordeon.links.map((LinkRef, index) => (             
								<li key={index}>
									<Link
										href={LinkRef.href}
										target={LinkRef.target}
										rel={LinkRef.rel}
									>
										{LinkRef.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>
				);
			})}
		</>
	);
};
