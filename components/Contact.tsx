import { fadeInUp } from "@/app/page";
import React from "react";
import { ContactForm } from "./contact-form";
import { motion } from "framer-motion";
const Contact = () => {
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contact our team to learn how ADmyBRAND AI can transform your
            marketing
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
