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

  return (
    <HeroUINavbar
      className="text-white relative bg-white/10 border-b border-white/20"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full gap-10" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-7xl">
          <button
            className="border-white/30 rounded-full px-3 py-1 border text-white"
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
                >
                  {!item.active && (
                    <LockIcon
                      className="mb-[2px] text-white"
                      height={16}
                      width={16}
                    />
                  )}
                  <span
                    className="z-20 text-white"
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
            <CrownIcon className="mb-[2px]" height={18} width={18} />
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
