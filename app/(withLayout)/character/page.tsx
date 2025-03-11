import React from "react";

import CharacterDetail from "./_components/character-detail";
import WeaponComponent from "./_components/weapon-component";

const page = () => {
  return (
    <div className="h-full items-center flex gap-5">
      <WeaponComponent />

      <div className="border-none h-full flex-1 flex items-center border-default-200 justify-center">
        {/* Character */}
      </div>
      <CharacterDetail />
    </div>
  );
};

export default page;
