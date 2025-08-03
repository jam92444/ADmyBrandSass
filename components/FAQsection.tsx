import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import React from "react";
import { GlassCard } from "./glass-card";
import { fadeInUp } from "@/app/page";
import { motion } from "framer-motion";
const FAQsection = () => {
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
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <GlassCard className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI content generation work?",
                  answer:
                    "Our AI uses advanced natural language processing to analyze your brand voice, target audience, and campaign goals to generate highly relevant and engaging content across all marketing channels.",
                },
                {
                  question: "Can I integrate with my existing marketing tools?",
                  answer:
                    "Yes! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, and many more through our robust API.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive documentation, video tutorials, and regular training webinars.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
                },
                {
                  question: "How secure is my data?",
                  answer:
                    "We take security seriously with enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is always protected and never shared with third parties.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsection;
