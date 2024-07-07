"use client";

import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import useGlobalState from "@/hooks/use-global-state";

const PageHeader = () => {
  const { state, setState } = useGlobalState();

  return (
    <div className="mx-auto max-w-screen-xl px-3 py-6">
      <div className="flex flex-wrap items-center justify-between w-full">
        <div>
          <Link href="/">
            <div className="flex items-center text-2xl font-semibold">TrueGuard</div>
          </Link>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList></NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <Button onClick={() => setState({ ...state, accessDrawerOpen: true })}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
