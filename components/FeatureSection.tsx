import { fadeInUp, staggerContainer } from "@/app/page";
import { BarChart3, Shield, Sparkles, Target, Users, Zap } from "lucide-react";
import React from "react";
import { FeatureCard } from "./feature-card";
import {motion} from "framer-motion"
const FeatureSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to dominate your market with intelligent
            automation
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              icon: Zap,
              title: "AI Content Generation",
              description:
                "Create compelling ad copy, social media posts, and email campaigns in seconds with our advanced AI engine.",
            },
            {
              icon: Target,
              title: "Smart Audience Targeting",
              description:
                "Identify and reach your ideal customers with precision using machine learning algorithms.",
            },
            {
              icon: BarChart3,
              title: "Performance Analytics",
              description:
                "Get real-time insights and predictive analytics to optimize your campaigns for maximum ROI.",
            },
            {
              icon: Users,
              title: "Multi-Channel Management",
              description:
                "Manage all your marketing channels from one unified dashboard with seamless integration.",
            },
            {
              icon: Shield,
              title: "Brand Safety",
              description:
                "Protect your brand reputation with AI-powered content moderation and compliance checking.",
            },
            {
              icon: Sparkles,
              title: "Creative Optimization",
              description:
                "Automatically test and optimize creative elements to improve engagement and conversions.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
