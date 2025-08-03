import { fadeInUp } from "@/app/page";
import React from "react";
import { PricingCalculator } from "./pricing-calculator";
import { motion } from "framer-motion";
const PricingSection = () => {
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
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Flexible pricing that scales with your business needs
          </p>
        </motion.div>

        <PricingCalculator />
      </div>
    </section>
  );
};

export default PricingSection;
