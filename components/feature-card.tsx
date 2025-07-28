"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { GlassCard } from "./glass-card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <GlassCard className="p-8 h-full">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  )
}
