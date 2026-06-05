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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
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

  const isDark = theme === "dark";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-border bg-background/90 shadow-[0_1px_0_0_var(--border-color),0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:shadow-[0_1px_0_0_var(--border-color),0_8px_32px_-8px_rgba(0,0,0,0.45)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 transition-all duration-300 sm:px-6",
            scrolled ? "h-12" : "h-14"
          )}
        >
          {/* Logo — icon only in dark mode */}
          <Logo
            size={scrolled ? "sm" : "md"}
            showWordmark={!isDark}
            priority
          />

          {/* Center nav pill — desktop */}
          <div className="hidden justify-center md:flex">
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-full border p-1 transition-all duration-300",
                scrolled
                  ? "border-border bg-subtle/80 shadow-sm"
                  : "border-transparent bg-transparent"
              )}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "relative cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-200",
                      isActive ? "font-medium text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-border bg-surface-elevated shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions — desktop */}
          <div className="hidden items-center justify-end gap-2 md:flex">
            <ThemeToggle />
            <Button variant="ghost" href="/dashboard">
              Sign in
            </Button>
            <Button href="/dashboard">
              Connect
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center justify-end gap-1.5 md:hidden">
            <ThemeToggle compact />
            <button
              type="button"
              className={cn(
                "cursor-pointer rounded-full p-2 transition-colors duration-200",
                open
                  ? "bg-electric/10 text-electric-light"
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
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="fixed left-4 right-4 top-[calc(3.5rem+0.5rem)] z-50 overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-xl md:hidden"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.href}
                      type="button"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        "cursor-pointer rounded-lg px-4 py-3 text-left text-[14px] transition-colors duration-200",
                        isActive
                          ? "bg-electric/10 font-medium text-electric-light"
                          : "text-muted hover:bg-subtle hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}

                <div className="mt-2 space-y-2 border-t border-border p-2 pt-3">
                  <Link
                    href="/dashboard"
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-border px-4 py-2.5 text-[13px] text-muted transition-colors duration-200 hover:bg-subtle hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-electric px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-electric-light"
                    onClick={() => setOpen(false)}
                  >
                    Connect repository
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
