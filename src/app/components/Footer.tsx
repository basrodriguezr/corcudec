"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>           
             {/*Footer Content*/}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-6 pt-12">
                {/*Footer grid*/}
                <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
                    {/*Inicio logos*/}
                    <div className="flex w-full max-w-xs flex-col items-center gap-6 lg:max-w-none lg:items-start">
                        <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                            <Image src={"/img/ICONOS/logo_udec.png"} width={175} height={70} alt='Universidad de Concepción - Corporación Cultural' className="h-auto w-[175px] max-w-full"/>
                            <Image src={"/img/ICONOS/logo_gob.png"} width={90} height={70} alt='Ministerio de las Culturas, las Artes y el Patrimonio' className="h-auto w-[90px] max-w-full"/>
                        </div>
                    </div>
                    {/*Fin logos*/}

                    {/*Inicio Contacto*/}
                    <div className="flex w-full max-w-md flex-col items-center gap-5">
                        <ul className="contact-list flex w-full flex-col items-center gap-4 text-sm lg:items-start">
                            <li className="flex flex-row items-center gap-2 lg:flex-row lg:items-center">
                                <span className="icon">
                                    { MailIcon() }
                                </span>
                                <a href="mailto:contacto@corcudec.cl" className="text-white hover:underline underline-offset-4 decoration-white/60 break-words">CONTACTO@CORCUDEC.CL</a>
                            </li>
                            <li className="flex flex-row items-center gap-2 lg:flex-row lg:items-center">
                                <span className="icon">
                                    { PhoneIcon() }
                                </span>
                                <div>
                                    <a href="tel:+56412243536" className="hover:underline underline-offset-4 decoration-white/60">412-243-536</a>
                                    <span className="mx-1">/</span>
                                    <a href="tel:+56412249155" className="hover:underline underline-offset-4 decoration-white/60">412-249-155</a>
                                </div>
                            </li>
                            <li className="flex w-full flex-col items-center gap-4 lg:items-start">
                                <div className="flex flex-row items-center gap-2 lg:flex-row lg:items-center lg:gap-3">
                                    <span className="icon">
                                        { LocationIcon() }
                                    </span>
                                    <a
                                        href="https://www.google.com/maps?q=O%27Higgins%20660%2C%20Concepci%C3%B3n&z=16"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline underline-offset-4 decoration-white/60 break-words"
                                        title="Abrir en Google Maps"
                                    >
                                        O’HIGGINS 660 - CONCEPCIÓN
                                    </a>
                                </div>
                                <div className="flex w-full justify-center lg:justify-start">
                                    <iframe
                                        // usa embed; también sirve q=...&output=embed si prefieres
                                        src="https://www.google.com/maps?q=O%27Higgins%20660%2C%20Concepci%C3%B3n&output=embed&z=16"
                                        width="320"
                                        height="180"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="lg:w-full md:w-[75%] rounded-2xl border border-white/20 shadow-xl"
                                        title="Mapa O'Higgins 660 - Concepción"
                                    />
                                </div>
                                <div className="social-row w-full justify-center lg:justify-center">
                                    { FacebookIcon() }
                                    { InstagramIcon() }
                                    { YoutubeIcon() }
                                </div>

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

                    {/*Inicio Menu*/}
                    <div className="flex w-full max-w-xs flex-col items-center gap-2 lg:items-start">
                        <ul className="footer-menu flex flex-col gap-2">
                            <li><a href="/consultas">CONSULTAS</a></li>
                            <li><a href="/sugerencias">SUGERENCIAS</a></li>
                            <li><a href="/reclamos">RECLAMOS</a></li>
                            <li><a href="/felicitaciones">FELICITACIONES</a></li>
                            <li><a href="/transparencia">TRANSPARENCIA</a></li>
                            <li><a href="/modeloPrevencionDelito">MODELO DE PREVENCIÓN DEL DELITO</a></li>
                        </ul>

                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Corporación Cultural Universidad de Concepción. Todos los derechos reservados.</p>
                </div>
            </div>
            <hr className='w-[min(80%,980px)] h-[2px] bg-white/70 border-0 mx-auto mt-[18px] mb-4 to-transparent '></hr>
            <center>
                <p>© {new Date().getFullYear()} Corporación Cultural Universidad de Concepción</p>
                <p>Todos los derechos reservados</p>
            </center>
        </>
  )
}


const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
    </svg>
);

