"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { CodePreview } from "@/components/shared/code-preview";
import { solutionSteps } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

const outputPreview = [
  { text: "# Acme API", color: "text-white" },
  { text: "", color: undefined },
  { text: "> RESTful API — auth, billing, notifications", color: "text-muted" },
  { text: "", color: undefined },
  { text: "## Installation", color: "text-electric-light" },
  { text: "npm install && cp .env.example .env", color: "text-white/70" },
  { text: "", color: undefined },
  { text: "## API Endpoints", color: "text-electric-light" },
  { text: "POST /api/auth/login — JWT authentication", color: "text-white/70" },
  { text: "GET  /api/users/:id  — User profile", color: "text-white/70" },
  { text: "", color: undefined },
  { text: "✓ Generated from 847 files in 47s", color: "text-emerald-500 dark:text-emerald-400" },
];

export function Solution() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            <CodePreview title="acme-api/README.md" lines={outputPreview} />
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="How it works"
              title="From repository to documentation — automatically."
            />

            <motion.ol
              className="mt-8 space-y-6 sm:mt-10 sm:space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {solutionSteps.map((step) => (
                <motion.li key={step.step} variants={fadeUp} className="flex gap-4 sm:gap-5">
                  <span className="font-mono text-sm text-electric-light">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-[15px] text-muted">{step.detail}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}
