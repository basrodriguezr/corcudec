"use client"
import { Pagina, Footer, Acordeon } from "@/app/components";

const PAGE_ID = "110";
const SECTION_ID = "programacion-opera";

// Componente principal de la vista, ahora usa el componente reutilizable
export default function MostrarPagina() {
	const acordeonContent = ( <Acordeon IdSection={SECTION_ID} /> );
	const hasAcordeonContent = acordeonContent !== null;
	//mostramos el resultado
	return (
		<>
			<main className="bg-white text-neutral-900">
				<div className="contenedor-transparencia">
					<Pagina IdPage={PAGE_ID} IdSection={SECTION_ID} />
					{hasAcordeonContent && acordeonContent}
				</div>
			</main>
			
			<footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.webp')] bg-cover bg-center bg-no-repeat text-white">
				<div className="absolute inset-0 pointer-events-none" />
				<Footer />
			</footer>
		</>
	);
}
