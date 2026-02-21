import type { Metadata } from "next";
import { Cardo, Marcellus } from "next/font/google";
import PageTransition from "@/components/page-transition";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Stella Horntvedt",
  description:
    "Stella Horntvedt: structured longevity protocols, lifestyle moodboards, recipes, workouts, and daily insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${cardo.variable} antialiased`}>
        <div className="relative min-h-screen bg-cream text-ink">
          <div className="tech-grid pointer-events-none fixed inset-0 -z-20" />
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(206,208,186,0.58),transparent_62%)]" />
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
