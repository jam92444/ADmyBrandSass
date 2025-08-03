"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GlassCard } from "./glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "ADmyBRAND AI has revolutionized our marketing campaigns. We've seen a 300% increase in engagement and our ROI has never been better.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The AI-powered content generation is incredible. What used to take our team days now takes minutes, and the quality is consistently excellent.",
  },
  {
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "E-commerce Plus",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The smart audience targeting feature helped us reach customers we never knew existed. Our conversion rates improved by 250%.",
  },
  {
    name: "David Thompson",
    role: "Brand Manager",
    company: "Fashion Forward",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Brand safety and compliance features give us peace of mind. We can scale our campaigns without worrying about brand reputation.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <GlassCard className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={testimonials[currentIndex].image || "/placeholder.svg"} />
                <AvatarFallback>
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-300">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </GlassCard>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-500" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
