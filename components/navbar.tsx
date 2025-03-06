"use client";

import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { AddCircleIcon, CrownIcon, DollarMinimalisticIcon, GithubIcon, Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar className="text-default-600" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full gap-10" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">JIN YERIM</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary font-black")}
                  color="foreground"
                  href={item.href}
                >
                  <span
                    className="z-20"
                    style={{
                      textShadow: active ? "0px 0px 8px #ffe388" : "",
                    }}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span className="blur-lg opacity-30 rounded-full bg-[#ffe388] w-[40px] z-10 h-[40px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden items-center sm:flex gap-3">
          <div className="flex items-center gap-1 border rounded-full px-1 py-1 border-default-300">
            <CrownIcon width={18} height={18} className="mb-[2px]" />
            <span className="font-bold text-sm">1,990</span>
            <AddCircleIcon width={20} height={20} />
          </div>
          <div className="flex items-center gap-1 border rounded-full px-1 py-1 border-default-300">
            <DollarMinimalisticIcon width={18} height={18} />
            <span className="font-bold text-sm">123,456</span>
            <AddCircleIcon width={20} height={20} />
          </div>
          <Link className="bg-default-100 rounded-md p-1" isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end"> */}
      {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
      {/* <ThemeSwitch /> */}
      {/* <NavbarMenuToggle /> */}
      {/* </NavbarContent> */}

      {/* <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </HeroUINavbar>
  );
};
