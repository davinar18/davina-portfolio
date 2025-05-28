'use client'
import { useEffect } from 'react'

export default function SparkleCursor() {
  useEffect(() => {
    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = `${x}px`
      sparkle.style.top = `${y}px`
      document.body.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 1000)
    }

    const move = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return null
}
