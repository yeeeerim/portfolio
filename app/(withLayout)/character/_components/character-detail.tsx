"use client";

import { Progress } from "@heroui/react";
import React from "react";

import { calculateDeveloperLevel } from "@/lib/calculateDeveloperLevel";
import { careerData } from "@/static/career-data";

const CharacterDetail = () => {
  // 결과 계산
  const result = calculateDeveloperLevel(careerData);
  const { level, experience } = result;

  return (
    <div className="h-[600px] w-[400px] px-5 bg-default-100/60 divide-y divide-default-200/60 flex-col flex items-start justify-center">
      <div className="w-full flex-col p-4 flex">
        <h3 className="text-center font-bold">JIN YERIM</h3>
        <span>Frontend Engineer</span>
        <span className="text-2xl font-bold mb-3">{`Level ${level}`}</span>
        <div className="flex items-center w-full gap-3">
          <Progress
            classNames={{
              base: "flex-row items-center",
              track: "flex-1 border border-default-300",
              indicator: "bg-[#ffd86c7a]",
              label: "text-sm w-[30px]",
            }}
            label="EXP"
            radius="none"
            value={experience}
          />
          <span className="w-[50px]">{experience} %</span>
        </div>
        <div className="flex items-center w-full gap-3">
          <Progress
            classNames={{
              base: "flex-row items-center",
              track: "flex-1 border border-default-300",
              indicator: "bg-[#ff765e7a]",
              label: "text-sm w-[30px]",
            }}
            label="HP"
            radius="none"
            value={100}
          />
          <span className="w-[50px]">100</span>
        </div>
        <div className="flex items-center w-full gap-3">
          <Progress
            classNames={{
              base: "flex-row items-center",
              track: "flex-1 border border-default-300",
              indicator: "bg-[#63bcff7a]",
              label: "text-sm w-[30px]",
            }}
            label="MP"
            radius="none"
            value={100}
          />
          <span className="w-[50px]">100</span>
        </div>
      </div>
      <div className="w-full text-center flex-1 flex items-center justify-center">
        {/* Character Feature 1 */}
      </div>
      <div className="w-full text-center flex-1 flex items-center justify-center">
        {/* Character Feature 2 */}
      </div>
    </div>
  );
};

export default CharacterDetail;
