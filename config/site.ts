export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "진예림 | 프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자 진예림의 포트폴리오입니다.",
  navItems: [
    {
      label: "STORE",
      href: "/store",
    },
  ],
  navMenuItems: [
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
