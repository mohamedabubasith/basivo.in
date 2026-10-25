import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://basivo.in"),
  title: "Basivo",
  description:
    "Basivo builds agent pipelines that leave something behind: a pull request, a video, a post, a deployed app. Plus open-source Claude Code plugins.",
  openGraph: {
    title: "Basivo",
    description: "Pipelines that leave something behind. A pull request, a video, a post, a deployed app. On your own keys.",
    url: "https://basivo.in",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0e0d12" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* lets CSS hide .rv only when JS will reveal it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
