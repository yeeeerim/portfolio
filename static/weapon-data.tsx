import { BowIcon, GladiusIcon, Mp5Icon } from "@/components/icons";
import { Weapon } from "@/types/weapon";

export const weaponList: Weapon[] = [
  {
    icon: <Mp5Icon height={60} width={60} />,
    name: "React",
    speed: 80,
    proficiency: 75,
    knowledge: 70,
  },
  {
    icon: <GladiusIcon height={60} width={60} />,
    name: "Next.js",
    speed: 70,
    proficiency: 60,
    knowledge: 60,
  },
  {
    icon: <BowIcon height={50} width={50} />,
    name: "Vue.js",
    speed: 30,
    proficiency: 15,
    knowledge: 25,
  },
];
