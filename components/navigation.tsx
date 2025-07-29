"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features", label: "View Features" },
    { name: "Pricing", href: "#pricing", label: "View Pricing" },
    { name: "Testimonials", href: "#testimonials", label: "View Testimonials" },
    { name: "FAQ", href: "#faq", label: "View FAQ" },
    { name: "Contact", href: "#contact", label: "Contact Us" },
  ];

  // Skip to main content link
  const SkipLink = () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-4 z-50"
    >
      Skip to main content
    </a>
  );

  return (
    <>
      <SkipLink />
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/40 supports-[backdrop-filter]:bg-black/30 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              ADmyBRAND
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => router.push("/signup")}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                      aria-label={item.label}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:bg-white/10"
                      onClick={() => {
                        router.push("/login");
                        setIsOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => {
                        router.push("/signup");
                        setIsOpen(false);
                      }}
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
