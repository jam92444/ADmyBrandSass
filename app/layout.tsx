import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ErrorBoundary } from "@/components/error-boundary";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "ADmyBrand - AI Marketing Platform",
    template: "%s | ADmyBrand",
  },
  description: "Transform your marketing with AI-powered solutions",
  keywords: [
    "AI Marketing",
    "Digital Marketing",
    "Marketing Automation",
    "AI Platform",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "ADmyBrand",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBrand - AI Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ADmyBrand",
    creator: "@ADmyBrand",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
