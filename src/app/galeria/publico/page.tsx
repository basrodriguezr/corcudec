"use client"
import { Galeria, Footer } from "@/app/components";

const GALLERY_ID = "116";

// Componente principal de la vista, ahora usa el componente reutilizable
export default function MostrarPagina() {
	//mostramos el resultado
	return (
		<>
			<main className="bg-white text-neutral-900">
				<div className="contenedor-transparencia">
					<Galeria IdGaleria={GALLERY_ID} />
				</div>
			</main>

			<footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
				<div className="absolute inset-0 pointer-events-none" />
				<Footer />
			</footer>
		</>
	);
}