import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { icon: 26, gap: "gap-2", text: "text-[13px]" },
  md: { icon: 30, gap: "gap-2.5", text: "text-[15px]" },
  lg: { icon: 40, gap: "gap-3", text: "text-lg" },
} as const;

interface LogoProps {
  size?: keyof typeof sizes;
  showWordmark?: boolean;
  href?: string;
  className?: string;
  priority?: boolean;
}

export function Logo({
  size = "md",
  showWordmark = true,
  href = "/",
  className,
  priority = false,
}: LogoProps) {
  const { icon, gap, text } = sizes[size];

  const content = (
    <span
      className={cn(
        "inline-flex items-center transition-all duration-300",
        gap,
        href && "cursor-pointer hover:opacity-80",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="DocForge AI"
        width={icon}
        height={icon}
        priority={priority}
        className="shrink-0 object-contain"
      />
      {showWordmark && (
        <span className={cn("font-semibold tracking-tight", text)}>
          DocForge<span className="text-electric"> AI</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="DocForge AI home">
        {content}
      </Link>
    );
  }

  return content;
}
