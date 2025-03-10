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
        "relative border flex items-center duration-300 justify-center w-[90px] aspect-square border-yellow-300/50",
        { "w-[86px] ml-[2px] mt-[2px]": active },
      )}
    >
      <span
        className="absolute text-sm font-semibold text-yellow-300 bottom-0 right-1"
        style={{
          textShadow: "0px 0px 2px #000000",
        }}
      >
        {item.name}
      </span>
      {item.icon}
    </div>
  );
};

export default WeaponItem;
