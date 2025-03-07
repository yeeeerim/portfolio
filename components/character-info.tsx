"use client";

import { Progress } from "@heroui/react";
import React, { useEffect, useRef } from "react";
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
  const {
    name,
    job,
    skills,
    level,
    progress,
    attribute,
    profile_image,
    disabled,
  } = character;
  const sectionRef = useRef<HTMLDivElement>(null); // blur 제거 방지

  // blur 제거 방지
  useEffect(() => {
    if (disabled && sectionRef.current) {
      const observer = new MutationObserver(() => {
        if (sectionRef.current) {
          sectionRef.current.style.filter = "blur(5px)";
        }
      });

      observer.observe(sectionRef.current, {
        attributes: true,
        attributeFilter: ["style"],
      });

      return () => observer.disconnect();
    }
  }, [disabled]);

  return (
    <section className="relative">
      {disabled && (
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-default-100/20 z-50">
          <Icons.LockIcon opacity={0.6} width={60} height={60} />
        </div>
      )}
      <div
        ref={sectionRef}
        className="relative flex-1 h-full bg-default-100/50 p-7 border border-default-200 text-default-600 flex flex-col gap-2"
        style={disabled ? { filter: "blur(5px)" } : {}}
      >
        <span className="font-black text-lg">{`LV. ${level}`}</span>
        <span>{`${name.ko} (${name.en}) / ${job}`}</span>
        <ul className="flex gap-2 uppercase text-tiny">
          {skills.map((skill, index) => (
            <li
              key={`${skill}-${index}`}
              className="rounded-sm text-default-500 px-1 py-[1px] font-semibold bg-default-200/90"
            >
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
                <div
                  key={attr.label}
                  className="border flex py-1 flex-col gap-1 items-center justify-center rounded-xl border-default-200/90 aspect-square"
                >
                  {IconComponent && <IconComponent width={60} height={60} />}
                  <span className="text-sm">{attr.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterInfo;
