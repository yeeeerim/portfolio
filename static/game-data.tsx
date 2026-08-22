import { CrossSwordsIcon } from "@/components/icons";

export type Game = (typeof gameList)[number];

export const gameList = [
  {
    title: "별빛 타워",
    description: "클릭해서 탑을 쌓는 픽셀 스택 게임",
    url: "https://starlight-tower.pages.dev/",
    tags: ["픽셀", "스택"],
    icon: (
      <CrossSwordsIcon className="w-10 h-10 text-[#63bcff]/80 transition-colors duration-200 group-hover:text-[#63bcff]" />
    ),
  },
] as const;
