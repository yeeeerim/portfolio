export type Game = (typeof gameList)[number];

export const gameList = [
  {
    title: "별빛 타워",
    description: "클릭해서 탑을 쌓는 픽셀 스택 게임",
    url: "https://starlight-tower.pages.dev/",
  },
] as const;
