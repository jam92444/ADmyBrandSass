"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorCode?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorCode: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Generate a unique error code for reference
    const errorCode = `ERR${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
    return { hasError: true, errorCode };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to service but don't expose in console
    this.logError(error, errorInfo);
  }

  private logError = async (error: Error, errorInfo: ErrorInfo) => {
    // Implement your error logging service here
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <AnimatePresence mode="wait">
            <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
              {/* Animated Background Elements */}
              <motion.div
                className="absolute inset-0 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Glass Container */}
              <motion.div
                className="relative z-10 w-full max-w-2xl mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    {/* Error Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                        <AlertCircle className="w-10 h-10 text-red-500" />
                      </div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Oops! Something's Not Right
                      </h1>
                      <p className="text-white/60 text-lg max-w-md mx-auto">
                        We've hit a snag, but our team has been notified.
                        {this.state.errorCode && (
                          <span className="block mt-2 text-sm">
                            Reference: {this.state.errorCode}
                          </span>
                        )}
                      </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                      <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-200 flex items-center justify-center group"
                      >
                        <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                      </button>
                      <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center justify-center border border-white/10"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Back to Home
                      </Link>
                    </motion.div>

                    {/* Support Link */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 text-white/40 text-sm"
                    >
                      Need help?{" "}
                      <a
                        href="/support"
                        className="text-purple-400 hover:text-purple-300 underline-offset-4 hover:underline"
                      >
                        Contact our support team
                      </a>
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        )
      );
    }

    return this.props.children;
  }
}
