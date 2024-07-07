"use client";

import { useRef } from "react";

import GetAccessDrawer from "@/components/pages/main/drawer";
import MainPageHero from "@/components/pages/main/hero";
import { Badge } from "@/components/ui/badge";
import useGlobalState from "@/hooks/use-global-state";

export default function Home() {
  const { state, setState } = useGlobalState();

  const drawerRef = useRef<{ setDefaultEmail: (email: string) => void }>(null);

  const openDrawerWithEmail = (email: string) => {
    drawerRef.current?.setDefaultEmail(email);

    setState({ ...state, accessDrawerOpen: true });
  };

  return (
    <div className="flex min-h-screen flex-col items-center mx-auto max-w-screen-xl">
      <MainPageHero openDrawerWithEmail={openDrawerWithEmail} />

      <div className="flex flex-col items-center w-full">
        <p className="text-2xl font-semibold">What TrueGuard provides?</p>

        <div className="container py-24">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4">
              <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Email Validation</h2>
              <p className="mt-3 text-xl text-muted-foreground">
                TrueGuard tries to identify if user&apos;s email is supicous or temporary, even if it comes from trusted sources like Gmail. TrueGuard
                employs various techniques, including DNS analysis, a known temporary domain database, AI, and more.
              </p>
            </div>
            <div className="lg:col-span-3 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://placehold.co/700x540" alt="Image Description" />
            </div>
          </div>
        </div>

        <div className="container py-24">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://placehold.co/700x540" alt="Image Description" />
            </div>
            <div className="lg:col-span-4">
              <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">IP Analysis</h2>
              <p className="mt-3 text-xl text-muted-foreground">
                TrueGuard analysis your user&apos;s IP addresses to determine if they originate from suspicious sources. TrueGuard can detect if an IP
                address is associated with a suspicious VPN or proxy, or if it has been linked to other malicious activities on the web.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-24">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center">
                <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">User Fingerprinting</h2>
                <Badge variant="secondary" className="h-fit ml-2">
                  Coming soon
                </Badge>
              </div>
              <p className="mt-3 text-xl text-muted-foreground">
                TrueGuard offers advanced user fingerprinting technology that operates without relying on cookies. This technology is particularly
                useful for identifying individuals who create multiple accounts to exploit free tiers. It can recognize the same user even if they
                clear their cookies, browse in incognito mode, or update their browser.
              </p>
            </div>
            <div className="lg:col-span-3 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://placehold.co/700x540" alt="Image Description" />
            </div>
          </div>
        </div>

        <div className="container py-24">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://placehold.co/700x540" alt="Image Description" />
            </div>
            <div className="lg:col-span-4">
              <div className="flex items-center">
                <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Continuous Monitoring</h2>
                <Badge variant="secondary" className="h-fit ml-2">
                  Coming soon
                </Badge>
              </div>
              <p className="mt-3 text-xl text-muted-foreground">
                TrueGuard continuously monitors and alerts you about suspicious users. For example, if we fail to automatically detect a temporary
                email or if we identify that a user has abused another product, we will notify you via webhooks. This allows you to take action and
                limit their access promptly.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full container py-24 lg:py-24">
          <p className="text-2xl font-semibold">How does TrueGuard work?</p>

          <div className="container py-24">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-7 mt-10 lg:mt-0">
                <img className="w-full rounded-xl" src="https://placehold.co/1920x1080" alt="Image Description" />
              </div>
            </div>
            <p className="mt-3 text-xl text-muted-foreground text-center">
              TrueGuard assesses user risk scores and provides action recommendations real-time
            </p>
          </div>
        </div>

        <GetAccessDrawer ref={drawerRef} />
      </div>
    </div>
  );
}
