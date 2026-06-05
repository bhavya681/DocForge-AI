"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalPreview } from "@/components/shared/terminal-preview";
import { fadeIn, fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Documentation
              <br />
              that writes itself.
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:mt-6">
              Connect a repo. Get READMEs, API refs, diagrams, and deploy
              guides — in under a minute.
            </p>

            <div className="mt-7 sm:mt-8">
              <Button size="lg" href="/dashboard" className="w-full sm:w-auto">
                Connect repository
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.15 }}
          >
            <TerminalPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
