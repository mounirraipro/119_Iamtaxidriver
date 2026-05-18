import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "I Am Taxi Driver – Free Online Browser Game",
    template: "%s | I Am Taxi Driver",
  },
  description:
    "Play I Am Taxi Driver online free — Play I Am Taxi Driver free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "I Am Taxi Driver",
    "I Am Taxi Driver online",
    "I Am Taxi Driver free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "I Am Taxi Driver Team" }],
  creator: "I Am Taxi Driver",
  publisher: "I Am Taxi Driver",
  metadataBase: new URL("https://iamtaxidriver.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "I Am Taxi Driver",
    title: "I Am Taxi Driver – Free Online Browser Game",
    description:
      "Play I Am Taxi Driver free in your browser — Play I Am Taxi Driver free online — no download, no account needed.",
    url: "https://iamtaxidriver.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Am Taxi Driver – Free Online Browser Game",
    description:
      "Play I Am Taxi Driver free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "I Am Taxi Driver",
              url: "https://iamtaxidriver.com",
              description:
                "Play I Am Taxi Driver free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://iamtaxidriver.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "I Am Taxi Driver",
              url: "https://iamtaxidriver.com",
              logo: {
                "@type": "ImageObject",
                url: "https://iamtaxidriver.com/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://iamtaxidriver.com/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
