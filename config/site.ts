export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "진예림 | 프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자 진예림의 포트폴리오입니다.",
  navItems: [
    {
      label: "CHARACTER",
      href: "/character",
    },
    {
      label: "QUESTS",
      href: "/quests",
    },
    {
      label: "ACHIEVEMENT",
      href: "/achievement",
    },
    {
      label: "STORE",
      href: "/store",
    },
    {
      label: "GAME",
      href: "/game",
    },
  ],
  navMenuItems: [
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/yeeeerim/portfolio",
  },
};
