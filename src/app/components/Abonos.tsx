import Image from 'next/image'
import React from 'react'

export const Abonos = () => {
  return (
    <div className='abono'>
      <Image
        src={"/img/abonos.png"}
        width={580}
        height={58}
        alt="Abonos"
      />
    </div>
  )
}
