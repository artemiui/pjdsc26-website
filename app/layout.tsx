import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeContext";
import IntroSplash from "@/components/IntroSplash";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteData } from "@/lib/siteData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PJDSC 2026 | Philippine Junior Data Science Challenge",
  description:
    "The Philippine Junior Data Science Challenge 2026 (PJDSC 2026), organized by the UP Data Science Society (UP DSSoc). Public Health Analytics: Trace the Pattern, Target the Cure.",
  keywords: [
    "PJDSC 2026",
    "Philippine Junior Data Science Challenge",
    "UP Data Science Society",
    "UP DSSoc",
    "Data Science Competition Philippines",
    "Public Health Analytics",
    "Bioinformatics Hackathon",
  ],
  authors: [{ name: "UP Data Science Society" }],
  icons: {
    icon: "/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('pjdsc_theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-[#234766]/15 dark:selection:bg-[#E38363]/30">
        <ThemeProvider>
          {/* Minimalist white background intro upon entering with event logo only, gradually fading out */}
          <IntroSplash />

          {/* Main App Layout */}
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
