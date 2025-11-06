import { Noticia } from "@/app/components/data/NoticiaData";
import { Footer } from "@/app/components";

interface PageProps {
    params: {
        id: string;
    };
}

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10' }
    ];
}

export default async function NoticiaPage({ params }: PageProps) {
    // LA CORRECCIÓN: Quitamos el 'await'
    const { id } = params; 
    const numericId = parseInt(id, 10);
    
    const renderContent = () => {
        if (numericId < 1 || numericId > 10 || isNaN(numericId)) {
            return (
                <div className="p-8 text-center text-red-900 text-2xl my-4">
                    <h1><strong>Error 404</strong></h1>
                    <p>La noticia ingresada no existe.</p>
                </div>
            );
        } else {
            return (
                <Noticia IdNews={id}/>
            );
        }
    };
    
    return (
        <>
            <main className="bg-white text-neutral-900">
                <div className="contenedor-transparencia">
                    {renderContent()}
                </div>
            </main>

            <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 pointer-events-none" />
                <Footer />
            </footer>
        </>
    );
}