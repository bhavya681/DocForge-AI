import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ThemeScript } from "@/components/shared/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocForge AI — Documentation That Writes Itself",
  description:
    "Connect your GitHub repository and generate professional READMEs, API docs, architecture diagrams, onboarding guides, and deployment documentation in minutes.",
  keywords: [
    "documentation",
    "AI",
    "GitHub",
    "API docs",
    "README generator",
    "architecture diagrams",
  ],
  icons: {
    icon: [{ url: "/logo.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DocForge AI — Documentation That Writes Itself",
    description:
      "Connect your repository and generate READMEs, API docs, architecture diagrams, and deployment guides in minutes.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "DocForge AI" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
