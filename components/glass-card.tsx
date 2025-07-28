import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl",
        "hover:bg-white/10 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}
