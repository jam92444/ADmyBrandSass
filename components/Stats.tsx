import { fadeInUp, staggerContainer } from "@/app/page";
import React from "react";
import { GlassCard } from "./glass-card";
import { AnimatedCounter } from "./animated-counter";
import { motion } from "framer-motion";
const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { number: 50000, suffix: "+", label: "Active Users" },
            { number: 2.5, suffix: "M+", label: "Campaigns Created" },
            { number: 98, suffix: "%", label: "Customer Satisfaction" },
            { number: 300, suffix: "%", label: "ROI Increase" },
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="text-center p-6 min-w-[150px] flex items-center justify-center flex-col min-h-[150px]">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  className="text-3xl font-bold text-white mb-2"
                />
                <p className="text-gray-300">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
