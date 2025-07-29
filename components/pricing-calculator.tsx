"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { GlassCard } from "./glass-card"

type Plan = {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  description: string
  features: string[]
  popular: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 AI-generated content pieces",
      "5 marketing channels",
      "Basic analytics",
      "Email support",
      "1 user account",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Ideal for growing businesses",
    features: [
      "Up to 10,000 AI-generated content pieces",
      "Unlimited marketing channels",
      "Advanced analytics & reporting",
      "Priority support",
      "5 user accounts",
      "Custom integrations",
      "A/B testing tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited AI-generated content",
      "All marketing channels",
      "Enterprise analytics",
      "Dedicated account manager",
      "Unlimited user accounts",
      "Custom AI model training",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingCalculator() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="space-y-8">
      {/* Billing Toggle */}
      <div className="flex items-center justify-center space-x-4">
        <span className={`text-lg ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
        <span className={`text-lg ${isYearly ? "text-white" : "text-gray-400"}`}>Yearly</span>
        {isYearly && <Badge className="bg-green-600 text-white">Save 20%</Badge>}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
            <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative z-20"
            >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-white px-4 py-1 flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
              </div>
            )}

            <GlassCard className={`p-8 h-full ${plan.popular ? "ring-2 ring-blue-500/50" : ""} relative z-10`}>
              <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-300">/{isYearly ? "year" : "month"}</span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-400">Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} annually</p>
              )}
              </div>

              <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
                </li>
              ))}
              </ul>

              <Button
              className={`w-full ${
                plan.popular
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              size="lg"
              >
              Get Started
              </Button>
            </GlassCard>
            </motion.div>
        ))}
      </div>
    </div>
  )
}
