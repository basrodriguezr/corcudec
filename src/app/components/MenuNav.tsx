'use client'

import Image from "next/image";
import Link from "next/link";

export const MenuNav = () => {
    return (
        <nav className="sticky top-0 bg-black/50 text-white backdrop-blur h-auto">
            <div className="mx-auto max-w-7xl flex items-center">
                <div className="flex-1 shrink-0 px-4 py-2 m-2">
                    <Image 
                        src="/img/logoudec.png"
                        width={122}
                        height={48}
                        alt="Universidad de Concepción"
                        
                    />
                </div>
                <ul className="flex-1 flex justify-center gap-5 tracking-wide font-semibold text-xs"> 
                    <li className="group relative">
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">CORCUDEC</Link>
                        <div className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 group-hover:block group-focus-within:block">
                            <div className="mt-2 min-w-56 rounded-md bg-black/90 ring-1 ring-white/10 shadow-xl p-2 text-sm pointer-events-auto">
                                <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Quiénes Somos</Link>
                                <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Equipo</Link>
                                <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Alianzas</Link>
                            </div>
                        </div>
                    </li>
                    <li className="group relative">
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">
                        Elencos
                        </Link>
                        <div className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 group-hover:block group-focus-within:block">
                        <div className="mt-2 min-w-64 rounded-md bg-black/90 ring-1 ring-white/10 shadow-xl p-2 text-sm pointer-events-auto">
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Orquesta Sinfónica UdeC</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Coro Sinfónico UdeC</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Directores Destacados</Link>
                        </div>
                        </div>
                    </li>
                    <li className="group relative">
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">
                        Teatro Udec
                        </Link>
                        <div className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 group-hover:block group-focus-within:block">
                        <div className="mt-2 min-w-64 rounded-md bg-black/90 ring-1 ring-white/10 shadow-xl p-2 text-sm pointer-events-auto">
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Historia</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Programas Emblemáticos</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Lunes Cinematográficos</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Ópera</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Teatro en el Teatro</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Arriendos</Link>
                        </div>
                        </div>
                    </li>
                    <li className="group relative">
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">
                            Programación
                        </Link>
                        <div className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 group-hover:block group-focus-within:block">
                        <div className="mt-2 min-w-64 rounded-md bg-black/90 ring-1 ring-white/10 shadow-xl p-2 text-sm pointer-events-auto">
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Temporada Sinfónica</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">D’Camara</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Lírica en Primera Fila</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Lunes Cinematográficos</Link>
                            <Link href="#" className="block px-3 py-2 hover:bg-white/5 whitespace-nowrap">Temporada de Teatro</Link>
                        </div>
                        </div>
                    </li>

                    <li>
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">
                            Abonos
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="inline-flex items-center px-2 py-6 hover:text-amber-400 whitespace-nowrap uppercase">
                            NOTICIAS
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
