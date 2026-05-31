"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Loved by developers worldwide
          </h2>
          <p className="mt-4 text-lg text-muted">
            From indie hackers to enterprise teams — see why developers choose
            DocForge.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <GlassCard className="flex h-full flex-col">
                <Quote className="h-8 w-8 text-electric/40" />
                <p className="mt-4 flex-1 text-base leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/20 text-sm font-medium text-electric-light">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
