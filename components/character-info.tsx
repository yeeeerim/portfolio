"use client";

import { Progress } from "@heroui/react";
import React from "react";
import * as Icons from "./icons";
import { Character } from "@/types/character";

type CharacterInfoProps = {
  character: Character;
};

const colorMap: Record<string, string> = {
  "Node.js": "bg-gradient-to-r from-green-500 to-yellow-500",
  Express: "bg-gradient-to-r from-blue-500 to-red-500",
  MongoDB: "bg-gradient-to-r from-pink-700 to-yellow-500",
  "React.js": "bg-gradient-to-r from-cyan-500 to-green-500",
  "Next.js": "bg-gradient-to-r from-purple-500 to-pink-500",
  "Vue.js": "bg-gradient-to-r from-green-500 to-yellow-500",
};

const CharacterInfo = ({ character }: CharacterInfoProps) => {
  const { name, job, skills, level, progress, attribute, profile_image } = character;

  return (
    <section className="flex-1 h-full bg-default-100/50 p-7 border border-default-200 text-default-600 flex flex-col gap-2">
      <span className="font-black text-lg">{`LV. ${level}`}</span>
      <span>{`${name.ko} (${name.en}) / ${job}`}</span>
      <ul className="flex gap-2 uppercase text-tiny">
        {skills.map((skill, index) => (
          <li key={`${skill}-${index}`} className="rounded-sm text-default-400 px-1 font-semibold bg-default-200/90">
            {skill}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="border-b border-white/20">Skill</h4>
        <div className="flex flex-col gap-2 w-full">
          {progress.map((skill, index) => (
            <Progress
              key={skill.label}
              classNames={{
                track: "drop-shadow-md border border-default",
                indicator: colorMap[skill.label] || "bg-gray-500", // 기본 색상 지정 가능
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              color="warning"
              label={skill.label}
              maxValue={100}
              showValueLabel={true}
              size="sm"
              value={skill.value}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="border-b border-white/20">Attribute</h4>
        <div className="grid grid-cols-4 gap-3">
          {attribute.map((attr) => {
            const IconComponent = Icons[attr.icon as keyof typeof Icons];

            return (
              <div key={attr.label} className="border flex flex-col gap-1 items-center justify-center rounded-xl border-default-200/90 aspect-square">
                {IconComponent && <IconComponent width={60} height={60} />}
                <span>{attr.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CharacterInfo;
