import React from "react";

import CharacterDetail from "./_components/character-detail";
import WeaponComponent from "./_components/weapon-component";

const page = () => {
  return (
    <div className="h-full items-center flex gap-5 flex-col lg:flex-row">
      <WeaponComponent />
      <div
        className="flex-1 flex items-center justify-center bg-cover h-[632px] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/img_yerim.png)`,
        }}
      />
      <CharacterDetail />
    </div>
  );
};

export default page;
