'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FONT_SIZE = 14
    const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|;:.,~'

    let width  = (canvas.width  = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let cols   = Math.floor(width / FONT_SIZE)
    let drops: number[] = Array(cols).fill(1)
    let animId: number

    function draw() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.055)'
      ctx!.fillRect(0, 0, width, height)

      ctx!.font = `${FONT_SIZE}px 'Share Tech Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const rand = Math.random()

        if (rand > 0.97) {
          ctx!.fillStyle = '#ffffff'          // leading flash
        } else if (rand > 0.85) {
          ctx!.fillStyle = '#00ff41'          // bright green
        } else if (rand > 0.5) {
          ctx!.fillStyle = '#00b32a'          // mid green
        } else {
          ctx!.fillStyle = '#005014'          // dim trail
        }

        ctx!.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE)

        if (drops[i] * FONT_SIZE > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      width  = canvas.width  = window.innerWidth
      height = canvas.height = window.innerHeight
      cols   = Math.floor(width / FONT_SIZE)
      drops  = Array(cols).fill(1)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      id="matrix-rain"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.12,
        pointerEvents: 'none',
      }}
    />
  )
}
