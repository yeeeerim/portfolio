import clsx from "clsx";
import React from "react";

interface WeaponItemProps {
  item: { icon: React.ReactNode; name: string } | null;
  active?: boolean;
}

const WeaponItem = ({ item, active = false }: WeaponItemProps) => {
  if (!item)
    return <div className="border w-[90px] aspect-square border-default-200" />;

  return (
    <div
      className={clsx(
        "border flex items-center duration-300 justify-center w-[90px] aspect-square border-yellow-300/50",
        { "w-[86px] ml-[2px] mt-[2px]": active },
      )}
    >
      {item.icon}
    </div>
  );
};

export default WeaponItem;
