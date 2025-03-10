import { careerData } from "./career-data";

import { calculateDeveloperLevel } from "@/lib/calculateDeveloperLevel";
import { Character } from "@/types/character";

export const characterInfo: Record<string, Character> = {
  진예림: {
    name: {
      ko: "진예림",
      en: "JIN YERIM",
    },
    job: "Frontend Engineer",
    shortJob: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Typescript", "Tailwind"],
    level: calculateDeveloperLevel(careerData).level,
    profile_image: "/images/profile-1.jpeg",
    disabled: false,
    progress: [
      {
        label: "React.js",
        value: 75,
      },
      {
        label: "Next.js",
        value: 60,
      },
      {
        label: "Vue.js",
        value: 25,
      },
    ],
    attribute: [
      {
        icon: "ShieldIcon",
        label: "책임감",
      },
      {
        icon: "FireIcon",
        label: "성실함",
      },
      {
        icon: "GraphIcon",
        label: "성장지향형",
      },
      {
        icon: "PieChartIcon",
        label: "계획형",
      },
    ],
  },
  홍길동: {
    name: {
      ko: "홍길동",
      en: "HONG GILDONG",
    },
    job: "Backend Engineer",
    shortJob: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "AWS"],
    level: 1,
    profile_image: "/images/profile-2.jpeg",
    disabled: true,
    progress: [
      {
        label: "Node.js",
        value: 80,
      },
      {
        label: "Express",
        value: 70,
      },
      {
        label: "MongoDB",
        value: 50,
      },
    ],
    attribute: [
      {
        icon: "ShieldIcon",
        label: "책임감",
      },
      {
        icon: "FireIcon",
        label: "성실함",
      },
      {
        icon: "GraphIcon",
        label: "성장지향형",
      },
      {
        icon: "PieChartIcon",
        label: "계획형",
      },
    ],
  },
};
