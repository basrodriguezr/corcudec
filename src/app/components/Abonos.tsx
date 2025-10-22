import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CORCUDEC_ROUTE } from '@/config/global';

export const Abonos = () => {
  return (
    <div className='abono'>
      <Link
        key="abono"
        href="/abonos"
        target="_self"
        rel="noreferrer"
        className="group items-center"
      >
        <Image
          src={ CORCUDEC_ROUTE + "/img/abonos.png" }
          width={580}
          height={58}
          alt="Abonos"
        />
      </Link>
      
    </div>
  )
}
