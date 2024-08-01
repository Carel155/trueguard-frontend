"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <div className="hidden md:flex">
          <div className="mr-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="#features" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Features</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#faq" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button onClick={() => setState({ ...state, accessDrawerOpen: true })}>Reqeust access</Button>
        </div>

        <div className="flex md:hidden">
          <Button onClick={() => setState({ ...state, accessDrawerOpen: true })} className="mr-4">
            Request access
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Features</DropdownMenuItem>
              <DropdownMenuItem>Pricing</DropdownMenuItem>
              <DropdownMenuItem>FAQ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
