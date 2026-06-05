"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodePreview } from "@/components/shared/code-preview";
import { MermaidDiagram } from "@/components/shared/mermaid-diagram";
import { featureDeepDives, premiumFeatures, sampleMermaid } from "@/lib/data";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

const apiLines = [
  { text: "POST /api/auth/login", color: "text-electric-light" },
  { text: "  Body: { email, password }", color: "text-muted" },
  { text: "  Returns: { token, expiresIn }", color: "text-white/70" },
  { text: "", color: undefined },
  { text: "POST /api/auth/register", color: "text-electric-light" },
  { text: "  Body: { email, password, name }", color: "text-muted" },
  { text: "  Returns: { user, token }", color: "text-white/70" },
  { text: "", color: undefined },
  { text: "GET /api/users/:id", color: "text-electric-light" },
  { text: "  Auth: Bearer token required", color: "text-muted" },
  { text: "  Returns: User profile object", color: "text-white/70" },
];

const treeLines = [
  { text: "acme-api/", color: "text-white" },
  { text: "├── src/", color: "text-muted" },
  { text: "│   ├── auth/          # JWT + OAuth", color: "text-white/70" },
  { text: "│   ├── routes/        # 24 endpoints", color: "text-white/70" },
  { text: "│   ├── services/      # 4 microservices", color: "text-white/70" },
  { text: "│   └── db/            # PostgreSQL + Prisma", color: "text-white/70" },
  { text: "├── prisma/schema.prisma", color: "text-muted" },
  { text: "└── docker-compose.yml", color: "text-muted" },
  { text: "", color: undefined },
  { text: "847 files · 12 dependencies · 3 data stores", color: "text-emerald-500 dark:text-emerald-400" },
];

function FeatureVisual({ type }: { type: "tree" | "api" | "diagram" }) {
  if (type === "tree") {
    return <CodePreview title="repository structure" lines={treeLines} />;
  }
  if (type === "api") {
    return <CodePreview title="api-reference.md" lines={apiLines} />;
  }
  return (
    <div className="interactive-lift overflow-hidden rounded-lg border border-border bg-code p-4 sm:p-6">
      <MermaidDiagram
        chart={sampleMermaid}
        className="flex justify-center [&_svg]:max-w-full"
      />
    </div>
  );
}

export function FeatureDeepDive() {
  return (
    <section id="features" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {featureDeepDives.map((feature, index) => {
          const reversed = index % 2 === 1;
          const TextMotion = reversed ? fadeLeft : fadeRight;
          const VisualMotion = reversed ? fadeRight : fadeLeft;

          return (
            <div
              key={feature.title}
              className={`flex flex-col gap-10 lg:items-center lg:gap-20 ${
                index > 0 ? "mt-20 sm:mt-32" : ""
              } ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <motion.div
                className="flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={TextMotion}
              >
                <p className="section-eyebrow">
                  {feature.index} — {feature.title}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                  {feature.headline}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  {feature.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {feature.highlights.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <Link
                  href="/dashboard"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[13px] text-electric-light transition-colors duration-200 hover:text-foreground"
                >
                  See in dashboard
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <motion.div
                className="flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={VisualMotion}
              >
                <FeatureVisual type={feature.visual} />
              </motion.div>
            </div>
          );
        })}

        <motion.div
          className="mt-20 flex flex-col divide-y divide-border rounded-lg border border-border sm:mt-32 sm:flex-row sm:divide-x sm:divide-y-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
        >
          {premiumFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex-1 px-5 py-4 transition-colors duration-200 hover:bg-subtle sm:px-6 sm:py-5"
            >
              <p className="text-[13px] font-medium text-electric-light">
                {feature.title}
              </p>
              <p className="mt-1.5 text-[13px] text-muted">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
