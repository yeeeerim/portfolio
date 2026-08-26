import React from "react";

import WeaponItem from "./weapon-item";

import { Weapon, weaponList } from "@/static/weapon-data";

interface WeaponsProps {
  onSelect: (weapon: Weapon) => void;
  selectedWeapon: Weapon;
}

const Weapons = ({ onSelect, selectedWeapon }: WeaponsProps) => {
  return (
    <div className="flex h-fit flex-col scrollbar-hide">
      <h4 className="h-[30px] text-[#5b4658] font-bold">귀여운 장비 가방</h4>
      <div className="grid gap-2 flex-1 h-[550px] bg-[#dff7ff]/70 border-2 border-[#8cc8d8] p-2 max-h-[550px] overflow-y-auto grid-cols-3 items-center justify-center">
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
