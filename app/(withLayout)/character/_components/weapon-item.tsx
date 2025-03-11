import clsx from "clsx";
import React from "react";

import { Weapon } from "@/types/weapon";

interface WeaponItemProps {
  item: Weapon | null;
  onSelect: (weapon: Weapon) => void;
  active?: boolean;
}

const WeaponItem = ({ item, onSelect, active = false }: WeaponItemProps) => {
  if (!item)
    return <div className="border w-[90px] aspect-square border-default-200" />;

  return (
    <button
      className={clsx(
        "relative border flex items-center duration-200 justify-center w-[90px] aspect-square border-yellow-300/50",
        "hover:w-[86px] hover:ml-[2px] hover:mt-[2px]",
        { "w-[86px] ml-[2px] mt-[2px] bg-default-300/40": active },
      )}
      onClick={() => onSelect(item)}
    >
      <span className="absolute text-tiny font-semibold text-yellow-300 bottom-0 right-1">
        {item.name}
      </span>
      {item.icon}
    </button>
  );
};

export default WeaponItem;
