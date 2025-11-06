"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ZonaItem, fetchZona } from "@/app/components/data/ZonaData";

// Estados para seguimiento de carga y posibles errores
type FetchState = "LOADING" | "LOADED" | "ERROR";

export const Zona = () => {
	// Inicializa el estado con un array vacío y usa nombres claros
	const [navs, setNavs] = useState<ZonaItem[]>([]);
	const [status, setStatus] = useState<FetchState>("LOADING");

	// 💡 Lógica Corregida: Usar useEffect para hacer el fetching
	useEffect(() => {
		// La función que se ejecuta al montar el componente
		const loadNavs = async () => {
			setStatus("LOADING");
			try {
				const data = await fetchZona();
				if (data.length > 0) {
					setNavs(data);
					setStatus("LOADED");
				} else setStatus("ERROR");
			} catch (error) {
				console.error(error);
				setStatus("ERROR");
				// El error es mostrado en fechCarrusel, pero seguimos el estado
			}
		};
		loadNavs();
	}, []);

	if (status === "LOADING") {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-gray-700">
				Cargando elemento...
			</div>
		);
	}

	// 💡 Optimización: Si el estado es ERROR o si el contenido es undefined después de cargar
	if (status === "ERROR" || !navs) {
		return (
			<div className="flex justify-center items-center h-48 text-lg font-semibold text-red-900">
				No se pudo cargar los elementos.
			</div>
		);
	}

	return (
		<section id="galeria-6" className="bg-black py-16">
			<div className="mx-auto flex max-w-6xl flex-col items-center px-4">
				<div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12">
					{navs.map(({ id, title, image, alt, href, target, published }) => (
						<Link
							key={id}
							href={href}
							target={target}
							rel={target === "_blank" ? "noreferrer" : undefined}
							className={`group ${
								published ? "flex flex-col" : "hidden"
							} items-center`}
						>
							<figure className="flex flex-col items-center gap-4">
								<figcaption className="text-center uppercase tracking-[0.5px]">
									<h3 className="text-base font-extrabold md:text-lg text-white group-hover:text-yellow-400">
										{title}
									</h3>
								</figcaption>
								<div className="w-full max-w-[280px] overflow-hidden rounded-xl">
									<Image
										src={image}
										alt={alt}
										width={400}
										height={400}
										className="aspect-square w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
									/>
								</div>
							</figure>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};