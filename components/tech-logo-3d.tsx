"use client"

import { useEffect, useRef } from "react"

const techIcons = {
  React: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    </svg>
  `,
  "Next.js": `
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_408_134" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black"/>
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.338L139.999 157.52H149.508Z" fill="white"/>
        <rect x="115" y="54" width="12" height="72" fill="white"/>
      </g>
    </svg>
  `,
  TypeScript: `
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#3178C6" rx="40"/>
      <text x="100" y="130" fontSize="120" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">TS</text>
    </svg>
  `,
  "Tailwind CSS": `
    <svg viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 0C15.75 0 9 5.25 6.75 15.75C9 12.75 11.7 11.25 14.85 11.25C17.1 11.25 18.525 12.15 20.25 14.25C22.35 16.65 24.3 18.75 27.75 18.75C33 18.75 36.75 15 39 4.5C36.75 7.5 34.05 9 30.9 9C28.65 9 27.225 8.1 25.5 6C23.4 3.6 21.45 1.5 18 1.5C12.75 1.5 9 5.25 6.75 15.75" fill="#38B2AC"/>
      <path d="M0 16.5C0 6.75 5.4 2.25 12.6 2.25C16.8 2.25 19.8 4.05 21.6 7.2C23.4 4.05 26.25 2.25 30 2.25C37.2 2.25 42.6 6.75 42.6 16.5C42.6 26.25 37.2 30.75 30 30.75C26.25 30.75 23.4 28.95 21.6 25.8C19.8 28.95 16.8 30.75 12.6 30.75C5.4 30.75 0 26.25 0 16.5Z" fill="#38B2AC"/>
    </svg>
  `,
  PostgreSQL: `
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="126" fill="#336791" stroke="#336791" strokeWidth="2"/>
      <path d="M128 60C90.6 60 60 90.6 60 128s30.6 68 68 68 68-30.6 68-68-30.6-68-68-68z" fill="white"/>
      <text x="128" y="145" fontSize="80" fontWeight="bold" fill="#336791" textAnchor="middle" fontFamily="monospace">P</text>
    </svg>
  `,
  Git: `
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="126" fill="#F05033" stroke="#F05033" strokeWidth="2"/>
      <path d="M128 30L46 130.5L76 208H128V89l52 119h52L128 30z" fill="white"/>
    </svg>
  `,
}

export default function TechLogo3D({ techName }: { techName: string }) {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Simple CSS-based 3D rotation animation
    const icon = techIcons[techName as keyof typeof techIcons] || `<div>?</div>`
    canvasRef.current.innerHTML = icon

    const element = canvasRef.current.querySelector("svg")
    if (element) {
      element.style.width = "100%"
      element.style.height = "100%"
      element.style.animation = "rotate3d 8s linear infinite"
    }
  }, [techName])

  return (
    <style>{`
      @keyframes rotate3d {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
    `}</style>
  )
}
