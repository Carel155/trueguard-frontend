"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Mail, ChevronRight, Network, CircleUser, ScanEye, Check } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FormProvider, useForm } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Input from "@/components/form/input";
import { FormField } from "@/components/ui/form";
import { Input as ShadcnInput } from "@/components/ui/input";
import GetAccessModal from "@/components/pages/main/modal";
import useGlobalState from "@/hooks/use-global-state";
import TryItOut from "@/components/pages/main/try-it-out";

const LandingPage = () => {
  const { state, setState } = useGlobalState();
  const modalRef = useRef<{ setDefaultEmail: (email: string) => void }>(null);

  const form = useForm({
    defaultValues: {
      firstContactEmail: "",
      secondContactEmail: "",
    },
  });

  const openModal = () => {
    setState({ ...state, accessDrawerOpen: true });
  };

  const openModalWithEmail = (field: "firstContactEmail" | "secondContactEmail") => {
    modalRef.current?.setDefaultEmail(form.getValues(field));
    form.setValue(field, "");

    setState({ ...state, accessDrawerOpen: true });
  };

  return (
    <FormProvider {...form}>
      <div className="flex min-h-screen flex-col items-center mx-auto">
        <div className="bg-foreground flex flex-col items-center w-full pt-28 pb-10 px-4">
          <div className="flex justify-between items-center flex-col lg:flex-row max-w-screen-xl w-full">
            <div className="flex flex-col lg:max-w-[520px] w-full items-center lg:items-start">
              <h1 className="flex flex-col lg:text-5xl text-4xl font-bold text-center md:text-left items-center lg:items-start">
                Defend your <br /> product against
                <br />
                <TypeAnimation
                  className="flex pt-2"
                  sequence={["Free Tier Abusers", 2500, "Temporary Emails", 2500, "Suspicious Accounts", 2500, "Automated Bots", 2500]}
                  speed={10}
                  deletionSpeed={15}
                  repeat={Infinity}
                  preRenderFirstString
                />
              </h1>
              <Button className="bg-accent hover:bg-[#65ad4b] text-black font-bold px-20 mt-10" onClick={openModal}>
                Request Access
              </Button>
            </div>
            <picture>
              <img
                src="https://ik.imagekit.io/trueguard/static/header-image.png?updatedAt=1720882947882"
                className="object-fit max-w-96 pt-20 lg:pt-0"
                alt="trueguard-app"
              />
            </picture>
          </div>

          <div className="max-w-screen-xl pt-36 w-full">
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6">
              <Link href="#email-validation" className="flex flex-col border rounded-lg p-8 bg-white hover:bg-[#EFECE8]">
                <div className="flex items-center">
                  <Mail />
                  <h3 className="text-md font-bold pl-3">Email Validation</h3>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="underline underline-offset-4">Read more</p>
                  <ChevronRight className="bg-accent rounded-full" />
                </div>
              </Link>

              <Link href="#ip-analysis" className="flex flex-col border rounded-lg p-8 bg-white hover:bg-[#EFECE8]">
                <div className="flex items-center">
                  <Network />
                  <h3 className="text-md font-bold pl-3">IP Analysis</h3>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="underline underline-offset-4">Read more</p>
                  <ChevronRight className="bg-accent rounded-full" />
                </div>
              </Link>

              <Link href="#fingerprinting" className="flex flex-col border rounded-lg p-8 bg-white hover:bg-[#EFECE8]">
                <div className="flex items-center">
                  <CircleUser />
                  <h3 className="text-md font-bold pl-3">User Fingerprinting</h3>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="underline underline-offset-4">Read more</p>
                  <ChevronRight className="bg-accent rounded-full" />
                </div>
              </Link>

              <Link href="#continuous-monitoring" className="flex flex-col border rounded-lg p-8 bg-white hover:bg-[#EFECE8]">
                <div className="flex items-center">
                  <ScanEye />
                  <h3 className="text-md font-bold pl-3">Continuous Monitoring</h3>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="underline underline-offset-4">Read more</p>
                  <ChevronRight className="bg-accent rounded-full" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white max-w-screen-xl w-full rounded-lg">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mt-6 px-5 lg:p-0">
            <div className="flex flex-col justify-center lg:col-span-2 sm:col-span-1 bg-[#EFECE8] p-10">
              <h4 className="text-xl font-bold self-start">How it works?</h4>
              <picture>
                <img
                  src="https://ik.imagekit.io/trueguard/static/how-trueguard-works.png?updatedAt=1721139281063"
                  className="object-contain pt-10"
                  alt="how-trueguard-works"
                />
              </picture>
            </div>
            <TryItOut />
          </div>

          <div id="features" className="flex flex-col items-center pt-36 px-5 lg:px-0">
            <div className="flex flex-col items-center max-w-screen-md w-full">
              <Badge className="bg-[#F2D262] hover:bg-[#F2D262] text-black">Features</Badge>
              <h4 className="text-4xl font-bold text-center mt-6">
                Save time and money by automatically blocking free-tier abusers, automated bots, temporary emails, and other threats.
              </h4>
            </div>
          </div>

          <div id="email-validation" className="px-5 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-foreground mt-36 p-20">
              <div className="flex justify-center">
                <picture>
                  <img
                    src="https://ik.imagekit.io/trueguard/static/email-feature.png?updatedAt=1720958588650"
                    className="object-fit max-w-48 lg:max-w-72"
                    alt="trueguard-email-feature"
                  />
                </picture>
              </div>

              <div className="flex flex-col justify-center pt-10 lg:pt-0">
                <Badge className="bg-[#F2D262] hover:bg-[#F2D262] text-black w-fit">Feature</Badge>
                <div className="flex items-center pt-2">
                  <Mail />
                  <h3 className="text-2xl font-bold pl-3">Email validation</h3>
                </div>
                <p className="pt-6">
                  Trueguard tries to identify if user&apos;s email is suspicous or temporary, even if it comes from trusted sources like Gmail.
                  Trueguard employs various techniques, including DNS analysis, a known temporary domain database, AI, and more.
                </p>
              </div>
            </div>
          </div>

          <div id="ip-analysis" className="px-5 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-foreground mt-10 p-20">
              <div className="flex flex-col justify-center">
                <Badge className="bg-[#F2D262] hover:bg-[#F2D262] text-black w-fit">Feature</Badge>
                <div className="flex items-center pt-2">
                  <Network />
                  <h3 className="text-2xl font-bold pl-3">IP Analysis</h3>
                </div>
                <p className="pt-6">
                  Trueguard analysis your user&apos;s IP addresses to determine if they originate from suspicious sources. Trueguard can detect if an
                  IP address is associated with a suspicious VPN or proxy, or if it has been linked to other malicious activities on the web.
                </p>
              </div>

              <div className="flex justify-center">
                <picture>
                  <img
                    src="https://ik.imagekit.io/trueguard/static/ip-feature.png?updatedAt=1720959020327"
                    className="object-fit max-w-48 lg:max-w-72 pt-10 lg:pt-0"
                    alt="trueguard-ip-feature"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div id="fingerprinting" className="px-5 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-foreground mt-10 p-20">
              <div className="flex justify-center">
                <picture>
                  <img
                    src="https://ik.imagekit.io/trueguard/static/fingerprint-feature.png?updatedAt=1720959076670"
                    className="object-fit max-w-48 lg:max-w-72"
                    alt="trueguard-fingerprint-feature"
                  />
                </picture>
              </div>

              <div className="flex flex-col justify-center pt-10 lg:pt-0">
                <div className="flex">
                  <Badge className="-fit bg-gray-500">Coming Soon</Badge>
                </div>
                <div className="flex items-center pt-2">
                  <CircleUser />
                  <h3 className="text-2xl font-bold pl-3">User Fingerprinting</h3>
                </div>
                <p className="pt-6">
                  Trueguard offers advanced user fingerprinting technology that operates without relying on cookies. This technology is particularly
                  useful for identifying individuals who create multiple accounts to exploit free tiers. It can recognize the same user even if they
                  clear their cookies, browse in incognito mode, or update their browser.
                </p>
              </div>
            </div>
          </div>

          <div id="continuous-monitoring" className="px-5 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-foreground mt-10 p-20">
              <div className="flex flex-col justify-center">
                <div className="flex">
                  <Badge className="w-fit bg-gray-500">Coming Soon</Badge>
                </div>
                <div className="flex items-center pt-2">
                  <ScanEye />
                  <h3 className="text-2xl font-bold pl-3">Continuous Monitoring</h3>
                </div>
                <p className="pt-6">
                  Trueguard continuously monitors and alerts you about suspicious users. For example, if we fail to automatically detect a temporary
                  email or we find that one person has multiple accounts. This allows you to take action and limit their access promptly.
                </p>
              </div>

              <div className="flex justify-center">
                <picture>
                  <img
                    src="https://ik.imagekit.io/trueguard/static/monitoring-feature.png?updatedAt=1721071805484"
                    className="object-fit max-w-48 lg:max-w-72 pt-10 lg:pt-0"
                    alt="trueguard-continues-monitoring"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full bg-accent p-32 mt-36">
          <picture>
            <img
              src="https://ik.imagekit.io/trueguard/static/success-rate.png?updatedAt=1720959666317"
              className="object-fit max-w-48"
              alt="trueguard"
            />
          </picture>
          <p className="text-8xl font-bold pt-10">90%</p>
          <p className="text-3xl font-bold max-w-screen-sm text-center pt-5">success rate, when identifying a suspicious new user.</p>
        </div>

        <div className="flex flex-col items-center pb-36 px-5 lg:px-0 bg-foreground w-full">
          <div className="flex flex-col items-center max-w-screen-xl">
            <div id="pricing" className="flex flex-col items-center pt-36 px-5 lg:px-0">
              <div className="flex flex-col items-center max-w-screen-md w-full">
                <Badge className="bg-[#F2D262] hover:bg-[#F2D262] text-black">Pricing</Badge>
                <h4 className="text-4xl font-bold text-center mt-6">
                  Trueguard is currently in early access to collect real-world data and customer feedback. Early access is{" "}
                  <span className="underline underline-offset-4">free of charge.</span>
                </h4>
              </div>
            </div>

            <div className="flex flex-col items-center max-w-96 border w-full p-10 rounded-xl mt-36">
              <p className="text-xl font-bold">Price</p>
              <p className="text-4xl font-bold pt-5">Free</p>
              <div className="flex w-full pt-10">
                <Check className="pr-2" />
                <p className="text-sm">Email Validation</p>
              </div>
              <div className="flex w-full pt-1">
                <Check className="pr-2" />
                <p className="text-sm">IP Analysis</p>
              </div>
              <div className="flex w-full pt-1">
                <Check className="text-gray-400 pr-2" />
                <p className="text-sm text-gray-400">User Fingerprinting (coming soon)</p>
              </div>
              <div className="flex w-full pt-1">
                <Check className="text-gray-400 pr-2" />
                <p className="text-sm text-gray-400">Continue Monitoring (coming soon)</p>
              </div>

              <FormField
                control={form.control}
                name="secondContactEmail"
                render={({ field }) => <ShadcnInput placeholder="Enter email" type="email" className="w-full mt-10" {...field} />}
              />
              <Button className="bg-accent hover:bg-[#65ad4b] mt-4 w-full text-black" onClick={() => openModalWithEmail("secondContactEmail")}>
                Request Access
              </Button>
            </div>

            <div className="relative pt-36">
              <picture>
                <img
                  src="https://ik.imagekit.io/trueguard/static/protect-product.webp?updatedAt=1721325299960"
                  className="rounded-lg"
                  alt="trueguard-get-started"
                />
              </picture>
              <div className="absolute bottom-5 left-5 md:bottom-20 md:left-20 text-white font-bold">
                <p className="text-2xl md:text-5xl [text-shadow:0_0_2px_#000]">Keep your</p>
                <p className="text-2xl md:text-5xl [text-shadow:0_0_2px_#000] pt-2">business safe.</p>
              </div>
            </div>
          </div>

          <div id="faq" className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 pt-36 max-w-screen-xl w-full">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full">
              <h5 className="text-4xl font-bold">Frequently Asked Questions</h5>
              <p className="pt-10">
                Here are answers to some common questions about Trueguard, our advanced security platform designed to protect your product against
                temporary users, free-tier abusers, and automated bots. Learn how Trueguard can safeguard your business and improve your user
                verification process.
              </p>
              <div className="flex pt-10">
                <Mail /> <p className="pl-3 underline underline-offset-4">info@trueguard.io</p>
              </div>
            </div>
            <div className="col-span-2 pt-10 lg:pt-0">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h6 className="text-xl font-bold">Q: How does Trueguard detect temporary emails?</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    TrueGuard maintains a comprehensive database of domains commonly used by temporary email services. It also performs DNS analysis
                    on email domains to verify their authenticity. For trusted sources like Gmail, Outlook, and other reputable providers, TrueGuard
                    employs AI and additional advanced techniques to ensure email legitimacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h6 className="text-xl font-bold">Q: How accurate Trueguard is?</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    TrueGuard achieves a 90% success rate in identifying suspicious new users. While false positives and false negatives can occur, we
                    maintain accuracy through:
                    <br />
                    <br />
                    1. Occasional manual reverification
                    <br />
                    2. Continuous monitoring to detect changes in user behavior
                    <br />
                    3. Prompt notifications if something changes
                    <br />
                    <br />
                    This approach ensures high reliability while allowing for the dynamic nature of user activity. We notify relevant parties if our
                    continuous monitoring reveals any changes in a user&apos;s status.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h6 className="text-xl font-bold">Q: What is the price of Trueguard?</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    TrueGuard offers free early access to gather real-world data and enhance system accuracy. This approach allows us to refine our
                    algorithms and detection capabilities based on diverse user scenarios, ultimately delivering a more robust and reliable solution
                    for suspicious user identification.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <GetAccessModal ref={modalRef} />
    </FormProvider>
  );
};

export default LandingPage;
