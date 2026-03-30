import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wake & Bars — Your Schedule Just Dropped a Track",
  description:
    "The AI alarm clock that turns your calendar into a personalized song every morning. Connect Google Calendar, Notion, or Todoist — wake up to bars about YOUR day.",
  keywords: [
    "AI alarm clock",
    "personalized music",
    "morning routine",
    "AI music generator",
    "calendar alarm",
    "wake up song",
  ],
  openGraph: {
    title: "Wake & Bars — Your Schedule Just Dropped a Track",
    description:
      "The AI alarm clock that turns your calendar into a personalized song every morning.",
    type: "website",
    locale: "en_US",
    siteName: "Wake & Bars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wake & Bars — Your Schedule Just Dropped a Track",
    description:
      "The AI alarm clock that turns your calendar into a personalized song every morning.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${outfit.variable}`}>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
