import React from "react";

const Weapons = () => {
  return (
    <div className="flex h-fit flex-col">
      <h4 className="h-[30px]">Weapons</h4>
      <div className="grid gap-2 flex-1 h-[550px] max-h-[550px] overflow-y-auto grid-cols-3 items-center justify-center">
        {Array.from({ length: 30 }, (_, index) => (
          <div
            key={index}
            className="border w-[90px] aspect-square border-default-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
