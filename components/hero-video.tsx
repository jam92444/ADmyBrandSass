"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "./glass-card"

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative mb-[4rem]">
      <GlassCard className="p-4">
        <div className="relative aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg overflow-hidden">
          {!isPlaying ? (
            <motion.div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white text-lg font-medium">Watch Demo Video</p>
                <p className="text-gray-300 text-sm">See ADmyBRAND AI in action</p>
              </div>

              {/* Placeholder for video thumbnail */}
              <img
                src="/placeholder.svg?height=400&width=700"
                alt="Demo video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </motion.div>
          ) : (
            <div className="relative w-full h-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => setIsPlaying(false)}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Placeholder for actual video */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-pulse mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4" />
                  </div>
                  <p className="text-lg">Demo Video Playing...</p>
                  <p className="text-sm text-gray-300">This would be your actual video content</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  )
}
