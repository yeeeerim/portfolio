"use client";

import { Progress } from "@heroui/react";
import React from "react";

import { Weapon } from "@/types/weapon";

interface ItemDetailProps {
  weaponData: Weapon;
}

const ItemDetail = ({ weaponData }: ItemDetailProps) => {
  const { icon, name, speed, proficiency, knowledge, experience } = weaponData;

  return (
    <div className="w-[280px] flex h-fit pt-[40px]">
      {/* 삼각형 */}
      <div className="h-[90px] flex items-center ">
        <div className="w-[20px] h-[30px] -mx-2 -rotate-90 bg-transparent border-t-[15px] border-l-[20px] border-r-[20px] border-transparent border-t-[#ffe38848]" />
      </div>
      {/* 내용 */}
      <div className="min-h-[550px] flex flex-col h-[550px] bg-default-100/60 w-full p-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="border rounded-full border-default-300 px-2 py-1 bg-default-100 text-tiny">
            + Equipped
          </span>
        </div>
        <span className="text-tiny mb-3">FrontEnd</span>
        {/* 무기 아이콘 */}
        <div className="flex gap-5 items-center">
          <div className="border mb-3 flex items-center justify-center w-[90px] aspect-square border-default-200">
            {icon}
          </div>
          <span className="flex flex-col">
            <span>Damage</span>
            <span className="text-3xl mb-2 font-bold">
              +{speed + proficiency + knowledge}
            </span>
          </span>
        </div>
        {/* 속도 */}
        <Progress
          classNames={{
            base: "flex-row items-center justify-between",
            track: "w-[100px] border border-default-300",
            label: "text-sm",
          }}
          color="default"
          label="Speed"
          radius="none"
          value={speed}
        />
        {/* 숙련도 */}
        <Progress
          classNames={{
            base: "flex-row items-center justify-between",
            track: "w-[100px] border border-default-300",
            label: "text-sm",
          }}
          color="default"
          label="Proficiency"
          radius="none"
          value={proficiency}
        />
        {/* 지식 */}
        <Progress
          classNames={{
            base: "flex-row items-center justify-between",
            track: "w-[100px] border border-default-300",
            label: "text-sm",
          }}
          color="default"
          label="Knowledge"
          radius="none"
          value={knowledge}
        />
        {/* 경력 */}
        <p className="my-3">{`Experience: ${experience}`}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
