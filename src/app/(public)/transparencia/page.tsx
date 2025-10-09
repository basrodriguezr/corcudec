'use client'
import { Footer } from "@/app/components";
import { Acordeon } from "@/app/components/Acordeon";
import Image from "next/image";
import { useState } from "react";

export default function transparencia() {
  const [verMasAbierto, setVerMasAbierto] = useState(false);
  return (
    <>
      <main className="contenedor-transparencia">
        
        <section className="historia-section">
          <div className="titulo-pagina">
            <h1 className="titulo">Transparencia</h1>
          </div>
          <h2 className="historia-titulo"><span>Quiénes somos</span></h2>
              <figure>
                  <Image src="/img/prevencion.webp" width={1060} height={360} alt="Transparencia"/>
              </figure>
              <div className="historia-texto">
                <p>
                    El Ministerio de las Culturas, las Artes y el Patrimonio, y la Corporación Cultural Universidad de
                    Concepción han firmado un convenio de transferencia de recursos y de realización de actividades para
                    la temporada musical 2025 de la Orquesta Sinfónica Universidad de Concepción, en el marco del
                    Programa de Orquestas Regionales Profesionales.
                </p>

                {/* <!-- Parte oculta --> */}
                <div  id="bloque-ver-mas" className={verMasAbierto ? "block" : "hidden"}>
                    <p>
                        <strong>Misión</strong><br/>
                        “La Corporación Cultural Universidad de Concepción es una institución que promueve el acceso a
                        la cultura y las artes posicionando a la Universidad como un actor relevante en la vinculación
                        con la comunidad. Es un espacio de fomento y desarrollo de las Artes en sus diferentes
                        manifestaciones."
                    </p>
                    <p>
                        <strong>Visión</strong><br/>
                        "Ser una Corporación Cultural líder a nivel nacional e internacional, reconocida por su aporte a
                        las culturas, las artes y el desarrollo de la comunidad y del pensamiento, a través de la
                        creación y difusión de actividades culturales de alta calidad, la formación de nuevos artistas y
                        la generación de nuevos públicos que conformen una audiencia permanente”.
                    </p>
                </div>
                 <button
                  type="button"
                  onClick={() => setVerMasAbierto(v => !v)}
                  className="ver-mas-btn inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-expanded={verMasAbierto}
                  aria-controls="bloque-ver-mas">
                  {verMasAbierto ? "Ver menos" : "Ver más"}
                  <span
                    className={`transition-transform duration-300 ${verMasAbierto ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                ▼
              </span>
            </button>
            </div>
        </section>
        <section className="relative w-full max-w-full mx-auto mt-auto">
          <Acordeon/>
        </section>
      </main>
      <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
          <div className="absolute inset-0 pointer-events-none" />
          <Footer />
      </footer>
    </> 
    
  )
}
