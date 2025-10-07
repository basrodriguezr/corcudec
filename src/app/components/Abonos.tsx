import Image from 'next/image'
import React from 'react'

export const Abonos = () => {
  return (
    <div className='grid h-[15vh] bg-black justify-center content-center p-10'>
      <Image src={"/img/abonos.png"} width={580} height={58} alt="Abonos"/>
    </div>
  )
}
