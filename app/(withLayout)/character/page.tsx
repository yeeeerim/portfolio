import React from "react";

import Weapons from "./_components/weapons";
import ItemDetail from "./_components/item-detail";
import CharacterDetail from "./_components/character-detail";

const page = () => {
  return (
    <div className="h-full items-center flex gap-5">
      <Weapons />
      <ItemDetail />
      <div className="border-none h-full flex-1 flex items-center border-default-200 justify-center">
        {/* Character */}
      </div>
      <CharacterDetail />
    </div>
  );
};

export default page;
