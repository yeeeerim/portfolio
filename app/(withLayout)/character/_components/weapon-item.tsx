import clsx from "clsx";
import React from "react";

import { Weapon } from "@/static/weapon-data";

interface WeaponItemProps {
  item: Weapon | null;
  onSelect: (weapon: Weapon) => void;
  active?: boolean;
}

const WeaponItem = ({ item, onSelect, active = false }: WeaponItemProps) => {
  if (!item)
    return (
      <div className="border-2 w-[90px] aspect-square border-[#9acbd5] bg-[#fff9e9]" />
    );

  return (
    <button
      className={clsx(
        "relative border-2 flex items-center duration-200 justify-center w-[90px] aspect-square border-[#5b4658] bg-[#fff9e9] shadow-[4px_4px_0_rgba(91,70,88,.2)]",
        {
          "hover:w-[86px] hover:ml-[2px] hover:mt-[2px]": !active,
        },
        {
          "w-[86px] bg-[#fff1a8] border-[#ff8fa3]": active,
        },
      )}
      onClick={() => onSelect(item)}
    >
      <span className="absolute text-tiny font-black text-[#ff6f91] top-1 left-1">
        {item.speed + item.proficiency + item.knowledge}
      </span>
      <span className="absolute text-tiny font-black text-[#5b4658] bottom-0 right-1">
        {item.name}
      </span>
      {item.icon}
    </button>
  );
};

export default WeaponItem;
