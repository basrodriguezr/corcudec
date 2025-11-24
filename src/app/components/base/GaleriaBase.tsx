"use client";

import Image from "next/image";
import { useState, useMemo, useCallback } from "react";

// Tipos: Definimos las estructuras de datos
export interface GaleriaItem {
	id: string;
	title: string;
	text: string;
	image: string;
	gallery: {
		gallery_url: string;
		gallery_alt: string;
		gallery_text: string;
	}[];
	published: boolean;
}


export const GaleriaBase = ({ galeria }: { galeria: GaleriaItem }) => {

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const openModal = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	const currentImage = useMemo(
		() => (activeIndex !== null ? galeria.gallery[activeIndex] : null),
		[activeIndex, galeria],
	);

	const closeModal = useCallback(() => {
		setActiveIndex(null);
	}, []);

	const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
		if (current === null) return current;
		return current === 0 ? galeria.gallery.length - 1 : current - 1;
	});
	}, [galeria.gallery.length]);

	const showNext = useCallback(() => {
	setActiveIndex((current) => {
		if (current === null) return current;
		return current === galeria.gallery.length - 1 ? 0 : current + 1;
	});
	}, [galeria.gallery.length]);

	return (
		<>
			<section className="bg-neutral-950 py-16">
				<div className="mx-auto max-w-[1960px] px-4">
					<div className="gal-foto">
						<div className="gal-det">
							<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
								<span className="flex max-h-full max-w-full items-center justify-center text-[3rem] font-black tracking-widest text-white/50">
									CORCUDEC
								</span>
								<span className="absolute inset-x-0 bottom-0 h-[360px] bg-gradient-to-b from-black/0 via-black/70 to-black"></span>
							</div>
							<span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
								Galería fotográfica
							</span>
							<h1 className="text-3xl font-semibold uppercase tracking-widest md:text-4xl py-2">
								{galeria.title}
							</h1>
							<p className="max-w-[40ch] text-sm text-white/80 md:text-base py-2 mx-auto">
								Revive la energía de nuestros encuentros culturales con una
								selección de recuerdos capturados por lentes profesionales.
							</p>
						</div>

						{galeria.gallery.map((image, index) => (
							<button
								key={image.gallery_url}
								type="button"
								onClick={() => openModal(index)}
								className="group relative w-full cursor-zoom-in overflow-hidden rounded-3xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
							>
								<Image
									src={image.gallery_url}
									alt={image.gallery_alt}
									width={100}
									height={100}
									className="h-auto w-full rounded-3xl object-cover brightness-90 transition duration-200 group-hover:brightness-105"
									sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
									unoptimized={false}
								/>
							</button>
						))}
					</div>
				</div>
			</section>

			{currentImage ? (
				<div
					role="dialog"
					aria-modal="true"
					className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur"
					onClick={closeModal}
				>
					<div
						className="relative flex h-auto max-h-screen w-full max-w-5xl flex-col gap-6 rounded-3xl bg-neutral-950/95 p-6 text-white shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
						onClick={(event) => event.stopPropagation()}
					>
						<div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-black">
							<Image
								src={currentImage.gallery_url}
								alt={currentImage.gallery_alt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
								priority
								unoptimized={false}
							/>
							<button
								type="button"
								className="gal-btnbase gal-btn2 left-4"
								onClick={showPrevious}
							>
								{"<"}
							</button>
							<button
								type="button"
								className="gal-btnbase gal-btn2 right-4"
								onClick={showNext}
							>
								{">"}
							</button>
							<button
								type="button"
								className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg font-semibold hover:bg-black/20"
								onClick={closeModal}
								aria-label="Cerrar galería"
							>
								×
							</button>
						</div>

						<div className="flex flex-col gap-4">
							<div>
								<p className="text-sm uppercase tracking-[0.35em] text-white/50">
									Fotografía {"("}
									<span>
										{activeIndex !== null ? activeIndex + 1 : 0} / {galeria.gallery.length}
									</span>
									{")"}
								</p>
								<p className="mt-2 text-lg font-semibold text-white">
									{currentImage.gallery_alt}
								</p>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
