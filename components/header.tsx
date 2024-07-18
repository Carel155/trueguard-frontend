"use client";

import React from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import useGlobalState from "@/hooks/use-global-state";

const PageHeader = () => {
  const { state, setState } = useGlobalState();

  return (
    <div className="mx-auto max-w-screen-xl px-3 py-6 bg-white">
      <div className="flex flex-wrap items-center justify-between w-full">
        <div>
          <Link href="/">
            <picture>
              <img
                src="https://ik.imagekit.io/trueguard/static/trueguard-black.png?updatedAt=1721324855994"
                className="h-7"
                alt="trueguard-logo-black"
              />
            </picture>
          </Link>
        </div>
        <div className="flex">
          <div className="mr-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="mr-2">
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Features</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button onClick={() => setState({ ...state, accessDrawerOpen: true })}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
