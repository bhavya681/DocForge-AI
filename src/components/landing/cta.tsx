"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-lg border border-border bg-surface-elevated px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16"
        >
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            Start documenting in 60 seconds.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-muted">
            Connect your first repository. No credit card required.
          </p>
          <Button size="lg" href="/dashboard" className="mt-8 w-full sm:w-auto">
            Connect your first repo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
