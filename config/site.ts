export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "진예림 | 프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자 진예림의 포트폴리오입니다.",
  navItems: [
    {
      label: "CHARACTER",
      href: "/character",
      active: true,
    },
    {
      label: "QUESTS",
      href: "/quests",
      active: true,
    },
    {
      label: "ACHIEVEMENT",
      href: "/achievement",
      active: true,
    },
    {
      label: "GAME",
      href: "/game",
      active: true,
    },
    {
      label: "STORE",
      href: "/store",
      active: false,
    },
  ],
  navMenuItems: [
    {
      label: "CHARACTER",
      href: "/character",
      active: true,
    },
    {
      label: "QUESTS",
      href: "/quests",
      active: true,
    },
    {
      label: "ACHIEVEMENT",
      href: "/achievement",
      active: true,
    },
    {
      label: "GAME",
      href: "/game",
      active: true,
    },
    {
      label: "STORE",
      href: "/store",
      active: false,
    },
  ],
  links: {
    github: "https://github.com/yeeeerim/portfolio",
  },
  url: "https://www.yrim.site/",
};
