import React from "react";
import { TestimonialCarousel } from "./testimonial-carousel";
import { fadeInUp } from "@/app/page";
import { motion
    
 } from "framer-motion";
const Testimonial = () => {
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their
            marketing
          </p>
        </motion.div>

        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
