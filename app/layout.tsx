import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageHeader from "@/components/header";
import { GlobalStateProvider } from "@/contexts/global-state";
import ReactQueryProvider from "@/contexts/query";
import { Toaster } from "@/components/ui/sonner";
import Tracking from "@/components/tracking";
import PageFooter from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trueguard - Automated defense for your SaaS",
  description:
    "Trueguard delivers advanced protection against malicious users for your SaaS. Automatically blocking free-tier abusers, automated bots, and other threats.",
  openGraph: {
    title: "Trueguard - Automated defense for your SaaS",
    type: "website",
    url: "https://trueguard.io",
    siteName: "Trueguard",
    description:
      "Trueguard delivers advanced protection against malicious users for your SaaS. Automatically blocking free-tier abusers, automated bots, and other threats.",
    images: ["https://ik.imagekit.io/trueguard/static/trueguard-og.jpg?updatedAt=1722187203228"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <GlobalStateProvider>
        <html lang="en">
          <body className={inter.className}>
            <Tracking />
            {process.env.NEXT_PUBLIC_ENV !== "production" && (
              <Script id="reddit-pixel">
                {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_ffz9z2hbrd9k');rdt('track', 'PageVisit');`}
              </Script>
            )}
            <PageHeader />
            <main>{children}</main>
            <PageFooter />
            <Toaster position="bottom-left" />
          </body>
        </html>
      </GlobalStateProvider>
    </ReactQueryProvider>
  );
}
