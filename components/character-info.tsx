"use client";

import { Progress } from "@heroui/react";
import React from "react";
import { FireIcon, GraphIcon, PieChartIcon, ShieldIcon } from "./icons";

const CharacterInfo = () => {
  return (
    <section className="flex-1 h-full bg-default-100/50 p-7 border border-default-200 text-default-600 flex flex-col gap-2">
      <span className="font-black text-lg">LV. 3</span>
      <span>진예림 (JIN YERIM) / Frontend Engineer</span>
      <ul className="flex gap-2 uppercase text-tiny">
        <li className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">React</li>
        <li className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">Next.js</li>
        <li className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">Vue.js</li>
        <li className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">Typescript</li>
        <li className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">Tailwind</li>
      </ul>
      <div className="mt-4">
        <h4 className="border-b border-white/20">Skill</h4>
        <div className="flex flex-col gap-2 w-full">
          <Progress
            classNames={{
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-cyan-500 to-green-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            color="warning"
            label="React"
            maxValue={100}
            showValueLabel={true}
            size="sm"
            value={75}
          />
          <Progress
            classNames={{
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-purple-500 to-pink-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            color="warning"
            label="Next.js"
            maxValue={100}
            showValueLabel={true}
            size="sm"
            value={60}
          />
          <Progress
            classNames={{
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-green-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            color="warning"
            label="Vue.js"
            maxValue={100}
            showValueLabel={true}
            size="sm"
            value={25}
          />
        </div>
      </div>
      <div className="mt-4">
        <h4 className="border-b border-white/20">Attribute</h4>
        <div className="grid grid-cols-4 gap-3">
          <div className="border flex flex-col gap-1 items-center justify-center rounded-xl border-default-200/90 aspect-square">
            <ShieldIcon width={60} height={60} />
            <span>책임감</span>
          </div>
          <div className="border flex flex-col gap-1 items-center justify-center rounded-xl border-default-200/90 aspect-square">
            <FireIcon width={60} height={60} />
            <span>성실함</span>
          </div>
          <div className="border flex flex-col gap-1 items-center justify-center rounded-xl border-default-200/90 aspect-square">
            <GraphIcon width={60} height={60} />
            <span>성장지향형</span>
          </div>
          <div className="border flex gap-1 flex-col items-center justify-center rounded-xl border-default-200/90 aspect-square">
            <PieChartIcon width={60} height={60} />
            <span>계획형</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterInfo;
