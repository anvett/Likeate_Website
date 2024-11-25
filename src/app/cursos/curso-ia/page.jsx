"use client"

import CountdownTimer from '@/components/countdownTimer/CountdownTimer'
import React from 'react'

export default function CursoIA() {
  return (
    <div className='flex flex-col items-center justify-center bg-black'>
      <h2 className='landing-subtitle pb-spacing-3 text-yellow-400 text-center'>LA OFERTA DE 50% TERMINA EN</h2>
      <CountdownTimer targetTime={new Date('2024-12-31T23:59:59')} onExpire={() => console.log('Curso finalizado')} />
      
    </div>
  )
}
