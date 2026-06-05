import Link from "next/link";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo size="sm" />
            <p className="mt-2 max-w-xs text-[13px] text-muted">
              Documentation that writes itself. Built for engineering teams.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <div>
              <h4 className="text-[13px] font-medium">Product</h4>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li>
                  <a href="#features" className="transition-colors duration-200 hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition-colors duration-200 hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/dashboard" className="transition-colors duration-200 hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-medium">Company</h4>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li>
                  <a href="#" className="transition-colors duration-200 hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-200 hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-200 hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 sm:mt-10">
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} DocForge AI
          </p>
        </div>
      </div>
    </footer>
  );
}
