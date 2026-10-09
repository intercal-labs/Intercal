import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://intercallabs.com";
const legalName = "Intercal Labs LLC";
const brandName = "Intercal Labs";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: legalName,
  alternateName: brandName,
  url: siteUrl,
  email: "info@intercallabs.com",
};

export const metadata: Metadata = {
  title: {
    default: legalName,
    template: `%s · ${legalName}`,
  },
  description:
    "Hardware, firmware, software, and field I&C — Greater Houston. Custom builds, legacy retrofit, and IC-ND-1 in concept.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: legalName,
    description:
      "Hardware. Firmware. Software. Field. Greater Houston lab.",
    url: siteUrl,
    siteName: legalName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: legalName,
    description:
      "Hardware. Firmware. Software. Field. Greater Houston lab.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full max-w-[100%] flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
