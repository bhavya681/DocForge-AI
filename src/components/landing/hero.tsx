"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalPreview } from "@/components/shared/terminal-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-electric/10 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm text-electric-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
              </span>
              Documentation That Writes Itself
            </div>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Stop Writing{" "}
              <span className="gradient-text">Documentation</span> Manually
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Connect your GitHub repository and generate professional READMEs,
              API docs, architecture diagrams, onboarding guides, and deployment
              documentation in minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" href="/dashboard">
                Generate Documentation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" href="#features">
                <Play className="h-4 w-4" />
                View Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted">
              <div className="flex -space-x-2">
                {["SC", "MR", "EK", "JP"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-surface-elevated text-xs font-medium"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>Trusted by 2,000+ developers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glow-blue rounded-xl">
              <TerminalPreview />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
