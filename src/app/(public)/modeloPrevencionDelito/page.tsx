'use client'
import { Footer } from "@/app/components";
import { Acordeon } from "@/app/components/Acordeon";
import Image from "next/image";
import { useState } from "react";

export default function modeloPrevencionDelito() {
  return (
    <>
          <div className="contenedor-transparencia">
            
            <section className="historia-section">
              <div className="titulo-pagina">
                <h1 className="titulo">Modelo de Prevencion del Delito</h1>
              </div>
              <h2 className="historia-titulo"><span>PREVENCIÓN</span></h2>
                  <figure>
                      <Image src="/img/IMAGEN FALTANTE.webp" width={1060} height={360} alt="Transparencia"/>
                  </figure>
                  <div className="historia-texto">
                    <p>
                        La Corporación Universidad de Concepción, ha implementado un Modelo de Prevención de Delitos de acuerdo a lo establecido en la Ley N° 20.393, con el objeto de delimitar 
                        la responsabilidad penal de la persona jurídica. La Corporación Universidad de Concepción, establece su compromiso organizacional destinado a prevenir la comisión de delitos, 
                        en el entendido que, en el evento que alguno de sus trabajadores incurra en alguna de las conductas tipificadas por la ley, lo hará en contravención a la cultura institucional 
                        y a las regulaciones y esfuerzos corporativos. Haciendo clic aquí puede acceder a mayor información.
                    </p>   
                </div>
            </section>
          </div>
          <footer className="relative min-h-[60vh] bg-[url('/img/FOOTER.png')] bg-cover bg-center bg-no-repeat text-white">
              <div className="absolute inset-0 pointer-events-none" />
              <Footer />
          </footer>
        </> 
  )
}
