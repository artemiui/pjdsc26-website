import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://pjdsc26-website.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PJDSC 2026 | Philippine Junior Data Science Challenge",
  description:
    "The Philippine Junior Data Science Challenge 2026 (PJDSC 2026), organized by the UP Data Science Society (UP DSSoc). Public Health Analytics: Trace the Pattern, Target the Cure.",
  icons: {
    icon: "/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg",
  },
  openGraph: {
    title: "PJDSC 2026 | Philippine Junior Data Science Challenge",
    description:
      "Trace the Pattern, Target the Cure: Advancing Public Health with Data Science.",
    url: siteUrl,
    siteName: "PJDSC 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Philippine Junior Data Science Challenge 2026",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PJDSC 2026 | Philippine Junior Data Science Challenge",
    description:
      "Trace the Pattern, Target the Cure: Advancing Public Health with Data Science.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('pjdsc_theme');
                document.documentElement.classList.remove('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider>
          <RegistrationProvider>
            <IntroSplash />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </RegistrationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
