"use client";
import { Navigation } from "@/components/navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import Testimonial from "@/components/Testimonial";
import FAQsection from "@/components/FAQsection";
import Contact from "@/components/Contact";
import { Footer } from "react-day-picker";

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <Stats />
      <FeatureSection />
      <PricingSection />
      <Testimonial />
      <FAQsection />
      <Contact />
      <Footer />
    </div>
  );
}
