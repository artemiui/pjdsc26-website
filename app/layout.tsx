import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeContext";
import IntroSplash from "@/components/IntroSplash";
import Footer from "@/components/Footer";

import { RegistrationProvider } from "@/lib/registrationContext";
import Header from "@/components/Header";

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
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider>
          <RegistrationProvider>
            {/* Minimalist white background intro upon entering with event logo only, gradually fading out */}
            <IntroSplash />

            {/* Unified Clean Layout Container matching artemiui.github.io */}
            <div className="min-h-screen flex flex-col">
              <div className="flex-1 w-full max-w-[768px] mx-auto px-5 sm:px-6 py-6 sm:py-10">
                <Header />
                <main className="mt-4">{children}</main>
              </div>
              <Footer />
            </div>
          </RegistrationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
