// app/privacy/page.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/signup" className="inline-block mb-8">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-gray-300">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (name, email, password)</li>
                  <li>Payment information</li>
                  <li>Usage data and analytics</li>
                  <li>Communications with us</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you service updates and marketing communications</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">4. Data Sharing</h2>
                <p>
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">6. Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to improve user experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">7. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">8. Contact Us</h2>
                <p>
                  For privacy-related questions, please contact us at{" "}
                  <a href="mailto:privacy@admybrand.com" className="text-purple-400 hover:text-purple-300">
                    privacy@admybrand.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-gray-400 text-sm">
              Last updated: July 28, 2025
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}