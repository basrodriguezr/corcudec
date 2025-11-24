"use client"
import { Footer } from "@/app/components";
import { Pagina } from "@/app/components/data/ProgramaData";

const PAGE_ID = "141";

// Componente principal de la vista, ahora usa el componente reutilizable
export default function MostrarPagina() {
	//mostramos el resultado
	return (
		<>
			<main className="bg-white text-neutral-900">
				<div className="contenedor-transparencia">
					<Pagina IdPage={PAGE_ID} />
				</div>
			</main>
			
			<footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.webp')] bg-cover bg-center bg-no-repeat text-white">
				<div className="absolute inset-0 pointer-events-none" />
				<Footer />
			</footer>
		</>
	);
}
