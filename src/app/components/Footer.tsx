"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* --- Columna 1: Logos --- */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold text-white mb-4">Instituciones</h3>
                        <div className='flex items-center gap-4'>
                            <Image src={"/img/ICONOS/logo_udec.png"} width={150} height={60} alt='Universidad de Concepción' />
                            <Image src={"/img/ICONOS/logo_gob.png"} width={80} height={60} alt='Ministerio de las Culturas' />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <MailIcon />
                                <a href="mailto:contacto@corcudec.cl" className="hover:text-amber-400 hover:underline">CONTACTO@CORCUDEC.CL</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <PhoneIcon />
                                <a href="tel:+56412243536" className="hover:text-amber-400">41 224 3536</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <LocationIcon />
                                <a href="http://googleusercontent.com/maps.google.com/4" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 hover:underline">
                                    O’HIGGINS 660 - CONCEPCIÓN
                                </a>
                            </li>
                        </ul>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.383181822811!2d-73.0526388236173!3d-36.8331191722384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d0db004071%3A0x34a8e3427958443!2sTeatro%20Universidad%20de%20Concepci%C3%B3n!5e0!3m2!1ses-419!2scl!4v1728416684611!5m2!1ses-419!2scl"
                            className="w-full h-40 mt-4 rounded-lg border border-gray-700 shadow-lg"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa O'Higgins 660 - Concepción"
                        />
                    </div>

                    <div className="text-center md:text-left">
                         <h3 className="text-lg font-semibold text-white mb-4">Enlaces de Interés</h3>
                         <ul className="space-y-2 text-sm">
                            <li><Link href="/consultas" className="hover:text-amber-400 hover:underline">CONSULTAS</Link></li>
                            <li><Link href="/sugerencias" className="hover:text-amber-400 hover:underline">SUGERENCIAS</Link></li>
                            <li><Link href="/reclamos" className="hover:text-amber-400 hover:underline">RECLAMOS</Link></li>
                            <li><Link href="/felicitaciones" className="hover:text-amber-400 hover:underline">FELICITACIONES</Link></li>
                            <li><Link href="/footer/TRANSPARENCIA.html" className="hover:text-amber-400 hover:underline">TRANSPARENCIA</Link></li>
                            <li><Link href="/footer/TRANSPARENCIA.html" className="hover:text-amber-400 hover:underline">MODELO DE PREVENCIÓN DEL DELITO</Link></li>

                         </ul>
                         <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <a href="https://www.facebook.com/corcudec" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Corcudec" className="text-gray-400 hover:text-amber-400">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/corcudec/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corcudec" className="text-gray-400 hover:text-amber-400">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.youtube.com/@corcudec1647" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Corcudec" className="text-gray-400 hover:text-amber-400">
                                <YoutubeIcon />
                            </a>
                         </div>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Corporación Cultural Universidad de Concepción. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}


const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
);