"use client";

import React, { useState } from "react";

import Weapons from "./weapons";
import ItemDetail from "./item-detail";

import { weaponList } from "@/static/weapon-data";

const WeaponComponent = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(weaponList[0]);

  return (
    <div className="flex items-start gap-5">
      <Weapons selectedWeapon={selectedWeapon} onSelect={setSelectedWeapon} />
      <ItemDetail weaponData={selectedWeapon} />
    </div>
  );
};

export default WeaponComponent;
