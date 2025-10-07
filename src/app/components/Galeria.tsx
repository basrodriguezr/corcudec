'use client'
import Link from 'next/link'
import React from 'react'

export const Galeria = () => {
  return (
    <div className='galeria'>
      <div className="items-galeria">
        <Link href="/img/Galeria/f1.png"/>
        <Link href="/img/Galeria/f2.png"/>
        <Link href="/img/Galeria/f3.png"/>
      </div>
    </div>
  )
}
