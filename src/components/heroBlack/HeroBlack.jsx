import React from 'react'
import Link from 'next/link'

export default function HeroBlack() {
  return (
    <div className='bg-black flex flex-col justify-center items-center py-spacing-5'>
        <h1 className='landing-title text-accent '>APRENDE ESTRATEGIAS DIGITALES EFECTIVAS</h1>
        <h1 className='landing-title text-landing-primary '>Y COMPROBADAS EN ESTE CURSO</h1>
        <h1 className='landing-title text-landing-secondary '>100%  ONLINE</h1>
        <Link href="#contenido" className='btn-hero-1'>CONTENIDO DEL CURSO</Link>
    </div>
  )
}
