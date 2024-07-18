import React from "react";
import Typewriter from "typewriter-effect";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Input from "@/components/form/input";

type MainPageHeroProps = {
  openDrawerWithEmail: (email: string) => void;
};

const MainPageHero = ({ openDrawerWithEmail }: MainPageHeroProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const requestAccess = () => {
    openDrawerWithEmail(form.getValues("email"));
    form.setValue("email", "");
  };

  return (
    <div className="container py-24 lg:py-32">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Defend your product against
            <Typewriter
              options={{
                strings: ["Free Tier Abusers", "Suspicious Accounts", "Temporary Emails", "Automated Bots"],
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
                delay: 70,
              }}
            />
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            Trueguard delivers advanced protection against malicious users for your SaaS. Save time and money by automatically blocking free-tier
            abusers, automated bots, and other threats.
          </p>
          <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full max-w-lg lg:w-auto">
              <Form {...form}>
                <Input name="email" placeholder="Enter email" type="email" />
              </Form>
            </div>
            <Button className="w-min" onClick={requestAccess}>
              Request access
            </Button>
          </div>
        </div>
        <div className="lg:col-span-3 mt-10 lg:mt-0">
          <img className="w-full rounded-xl" src="https://placehold.co/700x540" alt="Image Description" />
        </div>
      </div>
    </div>
  );
};

export default MainPageHero;
