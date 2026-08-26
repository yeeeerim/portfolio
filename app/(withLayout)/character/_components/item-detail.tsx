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
    <div className="w-[280px] flex h-fit pt-[40px] text-[#5b4658]">
      {/* 삼각형 */}
      <div className="h-[90px] items-center hidden md:flex">
        <div className="w-[20px] h-[30px] -mx-2 -rotate-90 bg-transparent border-t-[15px] border-l-[20px] border-r-[20px] border-transparent border-t-[#ffe38848]" />
      </div>
      {/* 내용 */}
      <div className="flex flex-col bg-[#fff9e9] border-3 border-[#5b4658] shadow-[5px_5px_0_rgba(91,70,88,.2)] w-full p-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="border-2 rounded-sm font-semibold border-[#5b4658] bg-[#83dfc5] px-2 py-1 text-tiny">
            + 장착 중
          </span>
        </div>
        <span className="text-tiny mb-3">FrontEnd</span>
        {/* 무기 아이콘 */}
        <div className="flex gap-5 items-center">
          <div className="border-2 mb-3 flex items-center justify-center w-[90px] aspect-square border-[#8cc8d8] bg-[#dff7ff]">
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
            indicator: "bg-[#ff9eb5]",
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
            indicator: "bg-[#83dfc5]",
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
            indicator: "bg-[#79c9e8]",
          }}
          color="default"
          label="Knowledge"
          radius="none"
          value={knowledge}
        />
        {/* 경력 */}
        <p className="my-3">{`Exp : ${experience}`}</p>
        {/* 소개 */}
        <p className="text-sm leading-5 bg-[#fff3bd] border-2 border-[#e6c85e] p-2 rounded-sm">
          {name}은(는) <span className="font-bold text-[#d26978]">{exp}</span>{" "}
          경력을 가지고 있으며,{" "}
          <span className="font-bold text-[#d26978]">{speed}의 속도</span>와{" "}
          <span className="font-bold text-[#d26978]">
            {proficiency}의 숙련도
          </span>
          ,{" "}
          <span className="font-bold text-[#d26978]">{knowledge}의 지식</span>{" "}
          을 가지고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
