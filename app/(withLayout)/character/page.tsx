import React from "react";

import CharacterDetail from "./_components/character-detail";
import WeaponComponent from "./_components/weapon-component";

const page = () => {
  return (
    <div className="h-full items-start flex gap-5">
      <WeaponComponent />
      <div
        className="h-full flex-1 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/img_yerim.png)`,
        }}
      />
      <CharacterDetail />
    </div>
  );
};

export default page;
