"use client";

import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  AddCircleIcon,
  CrownIcon,
  DollarMinimalisticIcon,
  GithubIcon,
  LockIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeroUINavbar
      className="text-[#5b4658] relative bg-[#fff9e9]/95 border-b-3 border-[#5b4658] shadow-[0_4px_0_rgba(91,70,88,.16)]"
      isMenuOpen={isOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full gap-10" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-7xl">
          <button
            className="border-[#5b4658] rounded-none px-3 py-1 border-2 text-[#5b4658] bg-[#ffe36e] shadow-[3px_3px_0_#5b4658]"
            onClick={() => router.push("/")}
          >
            {`< Home`}
          </button>
        </NavbarBrand>

        {/* --- 데스크탑 메뉴 --- */}
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const active = pathname.includes(item.href);

            return (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary font-black",
                    "flex items-center gap-1",
                  )}
                  color="foreground"
                  href={item.href}
                  isDisabled={!item.active}
                  onPress={() => setIsOpen(false)}
                >
                  {!item.active && (
                    <LockIcon
                      className="mb-[2px] text-[#5b4658]"
                      height={16}
                      width={16}
                    />
                  )}
                  <span
                    className="z-20 text-[#5b4658]"
                    style={{
                      textShadow: active ? "0px 0px 8px #ffe388" : "",
                    }}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span className="blur-lg opacity-30 rounded-full bg-[#ffe388] w-[40px] z-10 h-[40px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </Link>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      {/* --- 코인 & 깃헙 --- */}
      <NavbarContent
        className="hidden lg:flex basis-1/5 lg:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden items-center lg:flex gap-3">
          <div className="flex items-center gap-1 border rounded-full px-1 py-1 border-white/60">
            <CrownIcon
              className="mb-[2px] text-[#5b4658]"
              height={18}
              width={18}
            />
            <span className="font-bold text-sm">1,990</span>
            <AddCircleIcon height={20} width={20} />
          </div>
          <div className="flex items-center gap-1 border rounded-full px-1 py-1 border-white/60">
            <DollarMinimalisticIcon height={18} width={18} />
            <span className="font-bold text-sm">123,456</span>
            <AddCircleIcon height={20} width={20} />
          </div>
          <Link
            isExternal
            aria-label="Github"
            className="border-white/60 border rounded-full p-1"
            href={siteConfig.links.github}
          >
            <GithubIcon className="text-white" />
          </Link>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      {/* --- 모바일 메뉴 --- */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="flex items-center gap-2"
                color="foreground"
                href={item.href}
                isDisabled={!item.active}
                size="lg"
                onPress={() => setIsOpen(false)}
              >
                {item.label}
                {!item.active && (
                  <LockIcon
                    className="mb-[2px] text-white"
                    height={16}
                    width={16}
                  />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
