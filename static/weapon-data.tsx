import {
  BatteredAxeIcon,
  BowIcon,
  FairyWandIcon,
  GladiusIcon,
  LeeEnfieldIcon,
  Mp5Icon,
  RevolverIcon,
  ThorHammerIcon,
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
    experience: "4 years",
  },
  {
    icon: <BowIcon height={48} width={48} />,
    name: "Tailwind",
    speed: 85,
    proficiency: 70,
    knowledge: 70,
    experience: "4 years",
  },
  {
    icon: <ThorHammerIcon height={60} width={60} />,
    name: "JS/TS",
    speed: 70,
    proficiency: 70,
    knowledge: 65,
    experience: "4 years",
  },
  {
    icon: <FairyWandIcon height={48} width={48} />,
    name: "emotion",
    speed: 70,
    proficiency: 70,
    knowledge: 65,
    experience: "3 years",
  },
  {
    icon: <GladiusIcon height={60} width={60} />,
    name: "Next.js",
    speed: 70,
    proficiency: 60,
    knowledge: 60,
    experience: "4 years",
  },
  {
    icon: <BatteredAxeIcon height={52} width={52} />,
    name: "SWR",
    speed: 60,
    proficiency: 60,
    knowledge: 65,
    experience: "2 years",
  },
  {
    icon: <LeeEnfieldIcon height={60} width={60} />,
    name: "Recoil",
    speed: 65,
    proficiency: 50,
    knowledge: 50,
    experience: "2 years",
  },
  {
    icon: <RevolverIcon height={60} width={60} />,
    name: "Vue.js",
    speed: 30,
    proficiency: 15,
    knowledge: 25,
    experience: "3 months",
  },
];
