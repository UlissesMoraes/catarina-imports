import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { seo, company } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catarinaimports.com.br"),
  title: {
    default: seo.title,
    template: `%s | ${company.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: company.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://catarinaimports.com.br",
    siteName: company.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/loja/balcao-iphones.jpg",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: company.name,
  image: "https://catarinaimports.com.br/images/loja/balcao-iphones.jpg",
  description: seo.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Almirante Barroso, 909, Sala 804",
    addressLocality: "Blumenau",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  telephone: company.phone,
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "340",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dancingScript.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
