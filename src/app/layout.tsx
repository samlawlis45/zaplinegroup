import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zapline.io'),
  title: "Zapline Group - Supply Chain Integration Experts",
  description: "Transform your supply chain connectivity with expert EDI and API integration services. Accelerate partner onboarding and reduce compliance complexity.",
  keywords: ["EDI", "API integration", "supply chain", "trading partners", "partner onboarding", "integration consulting"],
  authors: [{ name: "Zapline Group" }],
  creator: "Zapline Group",
  publisher: "Zapline Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zapline.io",
    siteName: "Zapline Group",
    title: "Zapline Group - Supply Chain Integration Experts",
    description: "Transform your supply chain connectivity with expert EDI and API integration services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zapline Group - Supply Chain Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapline Group - Supply Chain Integration Experts",
    description: "Transform your supply chain connectivity with expert EDI and API integration services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
