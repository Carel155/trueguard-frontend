import React from "react";
import Link from "next/link";

import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

const PageFooter = () => {
  return (
    <div className="flex justify-center bg-[#1C341A] lg:p-36">
      <div className="flex flex-col items-center w-full max-w-screen-xl px-3 py-6">
        <picture>
          <img
            src="https://ik.imagekit.io/trueguard/static/trueguard-white.png?updatedAt=1721325051948"
            className="object-fit max-w-60"
            alt="trueguard-logo-white"
          />
        </picture>

        <Separator className="my-10" />

        <div className="flex w-full justify-between">
          <NavigationMenu>
            <NavigationMenuList className="space-x-10">
              <NavigationMenuItem>
                <Link href="#features" legacyBehavior passHref>
                  <p className="text-white font-bold cursor-pointer">Features</p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <p className="text-white font-bold cursor-pointer">Pricing</p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#faq" legacyBehavior passHref>
                  <p className="text-white font-bold cursor-pointer">FAQ</p>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex space-x-4 items-center">
            <p className="text-white font-bold">info@trueguard.io</p>
            <Link href="/terms-and-conditions">
              <p className="text-white text-xs underline">Terms and Conditions</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-white text-xs underline">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
