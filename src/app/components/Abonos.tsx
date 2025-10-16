import Image from 'next/image'
import React from 'react'
import { CORCUDEC_ROUTE } from '@/config/global';

export const Abonos = () => {
  return (
    <div className='abono'>
      <Image
        src={ CORCUDEC_ROUTE + "/img/abonos.png" }
        width={580}
        height={58}
        alt="Abonos"
      />
    </div>
  )
}
