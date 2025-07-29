// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Terms of Service
            </h1>

            <div className="space-y-8 text-gray-300">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using ADmyBRAND's services, you agree to be
                  bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  2. Description of Services
                </h2>
                <p>
                  ADmyBRAND provides AI-powered marketing solutions, including
                  but not limited to content generation, audience targeting, and
                  analytics services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  3. User Accounts
                </h2>
                <p>
                  Users must provide accurate and complete information when
                  creating an account. You are responsible for maintaining the
                  security of your account credentials.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>One account per user unless explicitly authorized</li>
                  <li>
                    You are responsible for all activities under your account
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  4. Payment Terms
                </h2>
                <p>
                  Subscription fees are billed in advance. Free trials may be
                  offered at our discretion. Refunds are handled according to
                  our refund policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  5. Intellectual Property
                </h2>
                <p>
                  All content and materials available through our services are
                  protected by intellectual property rights. Users retain rights
                  to their content while granting us license to use it for
                  service provision.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  6. Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend accounts that
                  violate these terms or for any other reason at our discretion.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  7. Changes to Terms
                </h2>
                <p>
                  We may modify these terms at any time. Continued use of our
                  services constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  8. Contact Information
                </h2>
                <p>
                  For questions about these terms, please contact us at{" "}
                  <a
                    href="mailto:legal@admybrand.com"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    legal@admybrand.com
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
  );
}
