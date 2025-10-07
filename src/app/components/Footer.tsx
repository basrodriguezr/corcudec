"use client";

import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <>           
            {/*Footer Content*/}
            <div >
                {/*Footer grid*/}
                <div className='flex flex-row'>
                    {/*Inicio logos*/}
                    <div className='flex flex-1 place-items-baseline justify-end mt-10'>  
                        <Image src={"/img/ICONOS/logo_udec.png"} width={175} height={70} alt='Universidad de Concepción - Corporación Cultural' className="m-5"/>
                        <Image src={"/img/ICONOS/logo_gob.png"} width={90} height={70} alt='Ministerio de las Culturas, las Artes y el Patrimonio' className="m-5"/>
                    </div>
                    {/*Fin logos*/}

                    {/*Inicio Contacto*/}
                     <div className='flex flex-1 items-center justify-center mt-10'>  
                        <ul className="contact-list">
                            <li className="flex items-start content-start justify-center gap-2 mb-2.5 font-[14px]">
                                <span className="icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                                        <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.7"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor"
                                            strokeWidth="1.7" />
                                    </svg>
                                </span>
                                <a href="mailto:contacto@corcudec.cl" className="text-white hover:underline underline-offset-4 decoration-white/60 break-words">CONTACTO@CORCUDEC.CL</a>
                            </li>
                            <li className="flex items-center justify-center gap-2 mb-2.5 font-[14px]">
                                <span className="icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                                        <path
                                            d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.2 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.13.98.36 1.93.69 2.83a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.9.33 1.85.56 2.83.69A2 2 0 0 1 22 16.92z"
                                            fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <a href="tel:+56412243536">412-243-536</a> / <a href="tel:+56412249155">412-249-155</a>
                            </li>
                            <li className="mb-2.5 font-[14px]">  
                                <div className="flex items-center justify-center gap-2 ">
                                    <span className="icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                                            <path d="M12 21s-7-6.16-7-11a7 7 0 1 1 14 0c0 4.84-7 11-7 11z" fill="none"
                                                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                                        </svg>
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
                                <div className="flex items-center justify-center gap-2 mt-3">
                                    <iframe
                                        // usa embed; también sirve q=...&output=embed si prefieres
                                        src="https://www.google.com/maps?q=O%27Higgins%20660%2C%20Concepci%C3%B3n&output=embed&z=16"
                                        width="300"
                                        height="150"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl border border-white/20 shadow-xl"
                                        title="Mapa O'Higgins 660 - Concepción"
                                    />
                                </div>
                                <div className="social-row">
                                    <a className="social" href="https://www.facebook.com/corcudec" target="_blank" rel="noopener">
                                        FB
                                    </a>
                                    <a className="social" href="https://www.instagram.com/corcudec/?hl=es" target="_blank" rel="noopener">
                                        IG
                                    </a>
                                    <a className="social" href="https://www.youtube.com/@corcudec1647" target="_blank" rel="noopener">
                                        YT
                                    </a>
                                </div>                             
                            </li>
                        </ul>
                    </div>
                    {/*Fin Contacto*/}

                    {/*Inicio Menu*/}
                    <div className='flex flex-1 items-start justify-start mt-10'>  
                        <ul className="footer-menu">
                            <li className="m-2"><a href="/consultas">CONSULTAS</a></li>
                            <li className="m-2"><a href="/sugerencias">SUGERENCIAS</a></li>
                            <li className="m-2"><a href="/reclamos">RECLAMOS</a></li>
                            <li className="m-2"><a href="/felicitaciones">FELICITACIONES</a></li>
                            <li className="m-2"><a href="footer/TRANSPARENCIA.html">TRANSPARENCIA</a></li>
                            <li className="m-2"><a href="footer/prevencion_del_delito.html">MODELO DE PREVENCIÓN DEL DELITO</a></li>
                        </ul>    
                    </div>
                    {/*Fin Menu*/}
                </div>
            </div>
            <hr className='w-[min(80%,980px)] h-[2px] bg-white/70 border-0 mx-auto mt-[18px] mb-4 to-transparent '></hr>
            <center>
                <p>© 2025 Corporación Cultural Universidad de Concepción</p>
                <p>Todos los derechos reservados</p>
            </center>
        </>
  )
}


