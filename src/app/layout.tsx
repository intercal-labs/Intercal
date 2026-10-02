import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = IBM_Plex_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Intercal Labs",
  description:
    "We design and build hardware, firmware, and software. Field, Products, and Design — Greater Houston.",
  metadataBase: new URL("https://intercallabs.com"),
  openGraph: {
    title: "Intercal Labs",
    description:
      "We design and build hardware, firmware, and software. Field, Products, and Design — Greater Houston.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
