"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileText,
  GitBranch,
  MessageSquare,
  Network,
  Rocket,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { features, premiumFeatures } from "@/lib/data";

const iconMap = {
  GitBranch,
  FileText,
  Code2,
  Network,
  Rocket,
  MessageSquare,
};

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="info" className="mb-4">
            Core Features
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to document your codebase
          </h2>
          <p className="mt-4 text-lg text-muted">
            From README generation to architecture diagrams — DocForge handles
            the documentation work so you can focus on building.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10">
                    <Icon className="h-5 w-5 text-electric-light" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {feature.highlights.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="info" className="mb-4">
              Premium
            </Badge>
            <h3 className="text-3xl font-bold tracking-tight">
              Power features for growing teams
            </h3>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-electric/20 bg-electric/5 p-6"
              >
                <h4 className="font-semibold text-electric-light">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
