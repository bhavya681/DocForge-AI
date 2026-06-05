"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useTheme } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", id: "features", label: "Features" },
  { href: "#workflow", id: "workflow", label: "Workflow" },
  { href: "#pricing", id: "pricing", label: "Pricing" },
  { href: "#faq", id: "faq", label: "FAQ" },
];

export function Navbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
    setOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
    setOpen(false);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      {/* Scroll progress */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-border">
        <motion.div
          className="h-full origin-left bg-electric"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled ? "px-3 pt-3 sm:px-4 md:px-6" : "px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            scrolled ? "max-w-6xl" : "max-w-7xl"
          )}
        >
          <nav
            className={cn(
              "relative flex items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-5",
              scrolled
                ? "h-12 rounded-2xl border border-border bg-background/80 shadow-[0_8px_40px_-12px_rgba(0,102,255,0.15),0_4px_24px_-8px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:shadow-[0_8px_40px_-12px_rgba(0,102,255,0.2),0_4px_24px_-8px_rgba(0,0,0,0.5)]"
                : "h-14 rounded-none border border-transparent bg-transparent"
            )}
          >
            {/* Subtle top accent when floating */}
            {scrolled && (
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
            )}

            {/* Brand */}
            <button
              type="button"
              onClick={scrollToTop}
              className={cn(
                "group flex shrink-0 cursor-pointer items-center rounded-xl transition-all duration-300",
                scrolled && "bg-subtle/60 p-1.5 hover:bg-subtle"
              )}
              aria-label="Scroll to top"
            >
              <Logo
                size={scrolled ? "sm" : "md"}
                showWordmark={!isDark}
                href={null}
                priority
              />
            </button>

            {/* Center nav — desktop */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
              <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-subtle/50 p-1 backdrop-blur-sm">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        "relative cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-200",
                        isActive
                          ? "font-medium text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-surface-elevated shadow-sm ring-1 ring-border"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {isActive && (
                          <span className="h-1 w-1 rounded-full bg-electric" />
                        )}
                        {link.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions — desktop */}
            <div className="hidden items-center gap-1.5 md:flex">
              <div className="mr-1 h-5 w-px bg-border" />
              <ThemeToggle />
              <Button variant="ghost" href="/dashboard" size="sm">
                Sign in
              </Button>
              <Button href="/dashboard" size="sm" className="shadow-sm shadow-electric/20">
                Connect
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-1 md:hidden">
              <ThemeToggle compact />
              <button
                type="button"
                className={cn(
                  "cursor-pointer rounded-xl p-2 transition-all duration-200",
                  open
                    ? "bg-electric/15 text-electric-light ring-1 ring-electric/30"
                    : "text-foreground hover:bg-subtle"
                )}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="fixed left-3 right-3 top-[4.25rem] z-50 overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl md:hidden"
            >
              <div className="border-b border-border px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  Navigate
                </p>
              </div>
              <div className="flex flex-col gap-0.5 p-2">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.href}
                      type="button"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        "flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] transition-colors duration-200",
                        isActive
                          ? "bg-electric/10 font-medium text-electric-light"
                          : "text-muted hover:bg-subtle hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
              <div className="space-y-2 border-t border-border p-3">
                <Link
                  href="/dashboard"
                  className="flex cursor-pointer items-center justify-center rounded-xl border border-border py-2.5 text-[13px] text-muted transition-colors hover:bg-subtle hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/dashboard"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-electric py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-electric-light"
                  onClick={() => setOpen(false)}
                >
                  Connect repository
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
