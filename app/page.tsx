"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/glass-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { PricingCalculator } from "@/components/pricing-calculator";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FeatureCard } from "@/components/feature-card";
import { HeroVideo } from "@/components/hero-video";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading skeleton
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
          style={{ y }}
        />

        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mt-[6rem]">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Marketing Revolution
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Transform Your Brand with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Marketing
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              ADmyBRAND AI Suite empowers businesses to create, optimize, and
              scale their marketing campaigns with cutting-edge artificial
              intelligence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <HeroVideo />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            x: [-20, 20, -20],
            scale: [1, 1.3, 1],
            rotate: [-45, 0, -45],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-28 h-28 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            x: [20, -20, 20],
            scale: [1.1, 1, 1.1],
            rotate: [30, -30, 30],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Stats Section */}
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
                <GlassCard className="text-center p-6">
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

      {/* Features Section */}
      <section id="features" className="py-20 relative">
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

          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative" id="pricing">
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

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden" id="testimonials">
        {isClient && (
          <>
            <motion.div
              className="absolute inset-0 opacity-30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="container mx-auto px-4 relative">
              <motion.div
                className="text-center mb-16"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Customer Success Stories
                </Badge>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  What Our{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Customers Say
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of forward-thinking businesses that have
                  transformed their marketing with our AI-powered solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30" />

                {/* Glass Container */}
                <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 md:p-8">
                  <TestimonialCarousel />
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  "TechCrunch",
                  "Forbes",
                  "Wired",
                  "Bloomberg",
                  "VentureBeat",
                ].map((brand) => (
                  <div
                    key={brand}
                    className="text-white/80 text-xl font-semibold tracking-tight"
                  >
                    {brand}
                  </div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative" id="faq">
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
                    question:
                      "Can I integrate with my existing marketing tools?",
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

      {/* Contact Section */}
      <section className="py-20 relative" id="contact">
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

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">ADmyBRAND</h3>
              <p className="text-gray-300 mb-4">
                Empowering businesses with AI-driven marketing solutions.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "facebook", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 bg-current rounded" />
                    </a>
                  )
                )}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Status", "Security"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ADmyBRAND AI Suite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
