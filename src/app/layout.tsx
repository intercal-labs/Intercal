import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Intercal Labs",
  description:
    "Instrumentation, controls, and custom electronics — built and supported in the field.",
  metadataBase: new URL("https://intercallabs.com"),
  openGraph: {
    title: "Intercal Labs",
    description:
      "Instrumentation, controls, and custom electronics — built and supported in the field.",
    url: "https://intercallabs.com",
    siteName: "Intercal Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
