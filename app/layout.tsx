import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageHeader from "@/components/header";
import { GlobalStateProvider } from "@/contexts/global-state";
import ReactQueryProvider from "@/contexts/query";
import { Toaster } from "@/components/ui/sonner";
import Tracking from "@/components/tracking";
import PageFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trueguard - Automated defense for your SaaS",
  description:
    "Trueguard delivers advanced protection against malicious users for your SaaS. Automatically blocking free-tier abusers, automated bots, and other threats.",
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
