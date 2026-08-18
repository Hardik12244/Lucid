"use client"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"

interface LucidSearchCardProps {
  className?: string
}

export default function LucidSearchCard({ className = "" }: LucidSearchCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  
  const rotationRef = useRef({ x: 12, y: -15, z: 4 })
  const rotationSpeedRef = useRef({ x: 0.05, y: 0.08, z: 0.02 })

  const animate = () => {
    if (!cardRef.current || isHovered) return

    rotationRef.current.x += rotationSpeedRef.current.x
    rotationRef.current.y += rotationSpeedRef.current.y
    rotationRef.current.z += rotationSpeedRef.current.z

    if (rotationRef.current.x > 15 || rotationRef.current.x < 8) rotationSpeedRef.current.x *= -1
    if (rotationRef.current.y > -10 || rotationRef.current.y < -20) rotationSpeedRef.current.y *= -1
    if (rotationRef.current.z > 6 || rotationRef.current.z < 2) rotationSpeedRef.current.z *= -1

    cardRef.current.style.transform = `
      rotateX(${rotationRef.current.x}deg) 
      rotateY(${rotationRef.current.y}deg) 
      rotateZ(${rotationRef.current.z}deg)
    `

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angleX = ((e.clientY - centerY) / (rect.height / 2)) * 15
      const angleY = (-(e.clientX - centerX) / (rect.width / 2)) * 15

      if (card) {
        card.style.transform = `rotateX(${angleX + 10}deg) rotateY(${angleY - 10}deg) rotateZ(2deg)`
      }
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
      cancelAnimationFrame(animationRef.current)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      rotationRef.current = {
        x: 12,
        y: -15,
        z: 4
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovered])

  return (
    <div className={`flex w-full items-center justify-center p-4 sm:p-10 ${className}`} style={{ perspective: "1500px" }}>
      <div
        ref={cardRef}
        className="relative w-full max-w-[600px] transition-transform duration-100 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="absolute inset-0 rounded-[24px] bg-[#1a1a1a] sm:rounded-[32px]"
          style={{ transform: "translateZ(-12px)" }}
        />
        <div 
          className="absolute inset-0 rounded-[24px] bg-[#222] sm:rounded-[32px]"
          style={{ transform: "translateZ(-6px)" }}
        />
        <div 
          className="absolute inset-0 rounded-[24px] bg-black/40 blur-2xl sm:rounded-[32px]"
          style={{ transform: "translateZ(-30px)" }}
        />

        <div
          className="relative w-full rounded-[24px] border border-white/[0.08] bg-[#0c0c0c] p-6 shadow-2xl sm:rounded-[32px] sm:p-10"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-white/[0.02] blur-[50px]" />

          <div className="relative flex items-center gap-4 rounded-[18px] border border-white/[0.06] bg-[#161616] px-5 py-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] sm:py-5">
            <Search size={22} className="text-zinc-500" strokeWidth={2} />
            <span className="text-[15px] text-zinc-400 sm:text-[17px]">
              Search any product...
            </span>
            <div className="h-5 w-[2px] -ml-3 animate-pulse bg-[#6fce7b]" />
          </div>

          <div className="mt-8 sm:mt-10">
            <h4 className="text-[12px] font-medium tracking-wide text-zinc-500 sm:text-[13px]">
              Popular searches
            </h4>
            
            <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
              {["iPhone 16 Pro", "Sony WH-1000XM6", "MacBook Air M3", "Dyson V15"].map((term) => (
                <div
                  key={term}
                  className="cursor-default rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] sm:px-5 sm:text-[14px]"
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}