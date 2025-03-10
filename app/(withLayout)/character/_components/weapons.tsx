import React from "react";

import WeaponItem from "./weapon-item";

import { weaponList } from "@/static/weapon-data";

const Weapons = () => {
  return (
    <div className="flex h-fit flex-col">
      <h4 className="h-[30px]">Weapons</h4>
      <div className="grid gap-2 flex-1 h-[550px] max-h-[550px] overflow-y-auto grid-cols-3 items-center justify-center">
        {Array.from({ length: 30 }, (_, index) => (
          <WeaponItem
            key={index}
            item={weaponList.length > index ? weaponList[index] : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
