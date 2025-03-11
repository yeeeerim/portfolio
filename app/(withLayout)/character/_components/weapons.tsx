import React from "react";

import WeaponItem from "./weapon-item";

import { weaponList } from "@/static/weapon-data";
import { Weapon } from "@/types/weapon";

interface WeaponsProps {
  onSelect: (weapon: Weapon) => void;
  selectedWeapon: Weapon;
}

const Weapons = ({ onSelect, selectedWeapon }: WeaponsProps) => {
  return (
    <div className="flex h-fit flex-col">
      <h4 className="h-[30px]">Weapons</h4>
      <div className="grid gap-2 flex-1 h-[550px] max-h-[550px] overflow-y-auto grid-cols-3 items-center justify-center">
        {Array.from({ length: 30 }, (_, index) => (
          <WeaponItem
            key={index}
            active={selectedWeapon === weaponList[index]}
            item={weaponList.length > index ? weaponList[index] : null}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
