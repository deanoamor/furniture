import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const archivo = localFont({ src: "./fonts/archivo-latin-wght-normal.woff2", weight: "100 900", variable: "--font-archivo", display: "swap" });
const inter = localFont({ src: "./fonts/inter-latin-wght-normal.woff2", weight: "100 900", variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Furniture Stainless Custom untuk Kantor, Hotel & Fasilitas Publik | Cipta Kreasindo Stainless",
    template: "%s | Cipta Kreasindo Stainless",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "furniture stainless", "pabrik stainless steel", "tiang antrian stainless", "trolley hotel", "tong sampah stainless",
    "pot tanaman stainless", "grease trap stainless", "standing ashtray", "stainless custom", "fabrikasi stainless",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title: "Furniture Stainless Custom untuk Kantor, Hotel & Fasilitas Publik",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: "Cipta Kreasindo Stainless", description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F2933",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
