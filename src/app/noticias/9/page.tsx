import { Noticia } from "@/app/components/data/NoticiaData";
import { Footer } from "@/app/components";

const NEWS_ID = "9";

export default async function NoticiaPage() {
    return (
        <>
            <main className="bg-white text-neutral-900">
                <div className="contenedor-transparencia">
                    <Noticia IdNews={NEWS_ID}/>
                </div>
            </main>

            <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 pointer-events-none" />
                <Footer />
            </footer>
        </>
    );
}

