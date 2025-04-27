"use client";

import { Progress } from "@heroui/react";
import React from "react";

import { Weapon } from "@/static/weapon-data";
import { CrossSwordsIcon } from "@/components/icons";

interface ItemDetailProps {
  weaponData: Weapon;
}

const ItemDetail = ({ weaponData }: ItemDetailProps) => {
  const { icon, name, speed, proficiency, knowledge, experience } = weaponData;

  const exp =
    experience.split(" ")[0] +
    (experience.split(" ")[1] === "years" ? "년 차" : "개월 차");

  return (
    <div className="w-[280px] flex h-fit pt-[40px] text-white">
      {/* 삼각형 */}
      <div className="h-[90px] items-center hidden md:flex">
        <div className="w-[20px] h-[30px] -mx-2 -rotate-90 bg-transparent border-t-[15px] border-l-[20px] border-r-[20px] border-transparent border-t-[#ffe38848]" />
      </div>
      {/* 내용 */}
      <div className="flex flex-col bg-black/40 w-full p-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="border rounded-full font-semibold border-white/60 bg-white/10 px-2 py-1 text-tiny">
            + Equipped
          </span>
        </div>
        <span className="text-tiny mb-3">FrontEnd</span>
        {/* 무기 아이콘 */}
        <div className="flex gap-5 items-center">
          <div className="border mb-3 flex items-center justify-center w-[90px] aspect-square border-white/60 bg-white/5">
            {icon}
          </div>
          <span className="flex flex-col">
            <span className="text-2xl flex items-center gap-1 font-bold -mb-1">
              {speed + proficiency + knowledge}{" "}
              <CrossSwordsIcon className="w-4 h-4" />
            </span>
            <span>Damage</span>
          </span>
        </div>
        {/* 속도 */}
        <Progress
          classNames={{
            base: "flex-row items-center justify-between",
            track: "w-[100px] border border-yellow-100/30 bg-transparent",
            label: "text-sm",
            indicator: "bg-yellow-200/70",
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
            track: "w-[100px] border border-yellow-100/30 bg-transparent",
            label: "text-sm",
            indicator: "bg-yellow-200/70",
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
            track: "w-[100px] border border-yellow-100/30 bg-transparent",
            label: "text-sm",
            indicator: "bg-yellow-200/70",
          }}
          color="default"
          label="Knowledge"
          radius="none"
          value={knowledge}
        />
        {/* 경력 */}
        <p className="my-3">{`Exp : ${experience}`}</p>
        {/* 소개 */}
        <p className="text-sm leading-5 bg-white/5 border border-white/10 p-2 rounded-md">
          {name}은(는) <span className="font-bold text-yellow-100">{exp}</span>{" "}
          경력을 가지고 있으며,{" "}
          <span className="font-bold text-yellow-100">{speed}의 속도</span>와{" "}
          <span className="font-bold text-yellow-100">
            {proficiency}의 숙련도
          </span>
          ,{" "}
          <span className="font-bold text-yellow-100">{knowledge}의 지식</span>{" "}
          을 가지고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
