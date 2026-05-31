"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-electric/30 bg-gradient-to-br from-electric/20 via-electric/5 to-transparent p-12 text-center md:p-16"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to stop writing docs manually?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Connect your first repository and generate professional
              documentation in under a minute. Free to start.
            </p>
            <Button size="lg" href="/dashboard" className="mt-8">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
