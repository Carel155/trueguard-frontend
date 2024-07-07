import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageHeader from "@/components/header";
import { GlobalStateProvider } from "@/contexts/global-state";
import ReactQueryProvider from "@/contexts/query";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrueGuard - Automated defense for your SaaS",
  description:
    "TrueGuard delivers advanced protection against malicious users for your SaaS. Automatically blocking free-tier abusers, automated bots, and other threats.",
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
            <PageHeader />
            <main>{children}</main>
            <Toaster position="bottom-left" />
          </body>
        </html>
      </GlobalStateProvider>
    </ReactQueryProvider>
  );
}
