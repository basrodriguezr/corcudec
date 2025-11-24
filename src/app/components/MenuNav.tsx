'use client'

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { CORCUDEC_ROUTE } from '@/config/global';
import imageLoader from '@/lib/imageLoader';

const menuItems = [
    {
        id: 'corcudec', title: 'CORCUDEC', href: '#', subItems: [
            { title: 'Quiénes Somos', href: '/quienessomos/' },
            { title: 'Equipo', href: '/equipo/' },
            { title: 'Alianzas', href: '/alianzas/' }
        ]
    },
    {
        id: 'elencos', title: 'Elencos', href: '#', subItems: [
            { title: 'Orquesta Sinfónica UdeC', href: '/orquesta/' },
            { title: 'Coro Sinfónico UdeC', href: '/coro/' },
            { title: 'Invitados Destacados', href: '/invitados/' }
        ]
    },
    {
        id: 'teatro', title: 'Teatro Udec', href: '#', subItems: [
            { title: 'Historia', href: '/historia/' },
            { title: 'Programas Emblemáticos', href: '/programas/' },
            { title: 'Arriendos', href: '/arriendos/' }
        ]
    },
    {
        id: 'programacion', title: 'Programación', href: '#', subItems: [
            { title: 'Temporada Sinfónica', href: '/sinfonica/' },
            { title: 'D’Camara', href: '/camara/' },
            { title: 'Lírica en Primera Fila', href: '/lirica/' },
            { title: 'Lunes Cinematográficos', href: '/lunescinematograficos/' },
            { title: 'Temporada de Teatro', href: '/temporada/' },
            { title: 'Ópera', href: '/opera/' }
        ]
    },
    { id: 'abonos', title: 'Abonos', href: '/abonos/' },
    { id: 'noticias', title: 'NOTICIAS', href: '/noticias/principal/' },
];

export const MenuNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
    const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    const handleDesktopMenuToggle = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setOpenDesktopMenu(openDesktopMenu === id ? null : id);
    };

    const handleMobileSubMenuToggle = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setOpenMobileSubMenu(openMobileSubMenu === id ? null : id);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDesktopMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 bg-black/40 text-white backdrop-blur z-[120]" ref={navRef}>
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-20 items-center justify-between">

                    <div className="flex-shrink-0">
                        <Link href="/home/main" onClick={() => { setIsMenuOpen(false); setOpenDesktopMenu(null); }}>␊
                            <Image loader={imageLoader} src={CORCUDEC_ROUTE + "/img/logoudec.png"} width={130} height={50} alt="Universidad de Concepción" sizes="(max-width: 1024px) 120px, 130px" priority />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center justify-center gap-5">
                            {menuItems.map((item) => (
                                <li key={item.id} className="relative">
                                    <Link
                                        href={item.href}
                                        onClick={(e) => item.subItems && handleDesktopMenuToggle(e, item.id)}
                                        className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase text-sm font-semibold tracking-wide"
                                    >
                                        {item.title}
                                    </Link>
                                    {item.subItems && (
                                        <div className={`absolute left-0 top-full mt-2 transition-opacity duration-300 ease-in-out z-[130]  ${openDesktopMenu === item.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                            <div className="min-w-56 rounded-md bg-black ring-1 ring-white/10 shadow-xl p-2 text-md">
                                                {item.subItems.map(subItem => (
                                                    <Link key={subItem.title} href={`/${item.id + subItem.href}`} onClick={() => setOpenDesktopMenu(null)} className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">{subItem.title}</Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="-mr-2 flex lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Abrir menú principal</span>
                            {isMenuOpen ? (<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>)
                                : (<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>)}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {menuItems.map(item => (
                            <div key={item.id}>
                                <Link
                                    href={item.href}
                                    onClick={(e) => item.subItems && handleMobileSubMenuToggle(e, item.id)}
                                    className="w-full flex justify-between items-center rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 text-left"
                                >
                                    <span>{item.title}</span>
                                </Link>

                                {openMobileSubMenu === item.id && item.subItems && (
                                    // MODIFICACIÓN: Se reintroducen las clases para el fondo negro del submenú
                                    <div className="bg-black rounded-md mt-1 p-2 space-y-1 pl-4">
                                        {item.subItems.map(subItem => (
                                            <Link key={subItem.title} href={`/${item.id + subItem.href}`} onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}