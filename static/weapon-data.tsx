import {
  BowIcon,
  GladiusIcon,
  Mp5Icon,
  RevolverIcon,
} from "@/components/icons";

export type Weapon = (typeof weaponList)[0];

/**
 * icon: 아이콘
 * name: 이름
 * speed: 속도
 * proficiency: 숙련도
 * knowledge: 지식
 * experience: 경력
 */
export const weaponList = [
  {
    icon: <Mp5Icon height={60} width={60} />,
    name: "React",
    speed: 80,
    proficiency: 75,
    knowledge: 70,
    experience: "3 years",
  },
  {
    icon: <GladiusIcon height={60} width={60} />,
    name: "Next.js",
    speed: 70,
    proficiency: 60,
    knowledge: 60,
    experience: "3 years",
  },
  {
    icon: <RevolverIcon height={60} width={60} />,
    name: "Vue.js",
    speed: 30,
    proficiency: 15,
    knowledge: 25,
    experience: "3 months",
  },
  {
    icon: <BowIcon height={50} width={50} />,
    name: "Recoil",
    speed: 65,
    proficiency: 50,
    knowledge: 50,
    experience: "2 years",
  },
  {
    icon: <></>,
    name: "Tailwind",
    speed: 85,
    proficiency: 80,
    knowledge: 70,
    experience: "3 years",
  },
  {
    icon: <></>,
    name: "emotion",
    speed: 70,
    proficiency: 70,
    knowledge: 65,
    experience: "2 years",
  },
  {
    icon: <></>,
    name: "JS/TS",
    speed: 70,
    proficiency: 70,
    knowledge: 65,
    experience: "3 years",
  },
];
