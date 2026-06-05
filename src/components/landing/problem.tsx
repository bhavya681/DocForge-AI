"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { CodePreview } from "@/components/shared/code-preview";
import { problemPoints } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const staleDiff = [
  { text: "@@ README.md — last updated 8 months ago", color: "text-muted" },
  { text: "- Supports OAuth 2.0 and JWT authentication", color: "text-red-500 dark:text-red-400/80" },
  { text: "+ Supports OAuth 2.0, JWT, and SAML SSO", color: "text-emerald-600 dark:text-emerald-400/80" },
  { text: "- 12 API endpoints documented", color: "text-red-500 dark:text-red-400/80" },
  { text: "+ 47 API endpoints (24 undocumented)", color: "text-amber-600 dark:text-amber-400/80" },
  { text: " ", color: undefined },
  { text: "// 3 engineers spent 6 hours onboarding this week", color: "text-muted" },
];

export function Problem() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeader
              eyebrow="The problem"
              title="Your codebase outgrew your docs."
              description="Engineering teams ship faster than documentation can keep up. The gap compounds every sprint."
            />

            <motion.ul
              className="mt-8 space-y-5 sm:mt-10 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={stagger}
            >
              {problemPoints.map((point) => (
                <motion.li
                  key={point.lead}
                  variants={fadeUp}
                  className="border-l-2 border-border pl-5 sm:pl-6"
                >
                  <p className="font-medium text-foreground">{point.lead}</p>
                  <p className="mt-1 text-[15px] text-muted">{point.detail}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.3 }}
          >
            <CodePreview title="doc-debt.diff" lines={staleDiff} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
