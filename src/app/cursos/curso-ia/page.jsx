"use client"

import CountdownTimer from '@/components/countdownTimer/CountdownTimer'
import React from 'react'

export default function CursoIA() {
  return (
    <div>
      <CountdownTimer targetTime={new Date('2024-11-15T23:59:59')} onExpire={() => console.log('Curso finalizado')} />
    </div>
  )
}
