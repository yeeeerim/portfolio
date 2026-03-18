"use client";

import { Progress } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import * as Icons from "@/components/icons";
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
  const { name, job, skills, level, progress, attribute, disabled } = character;
  const sectionRef = useRef<HTMLDivElement>(null); // blur 제거 방지
  const [selectedAttribute, setSelectedAttribute] = useState(attribute[0]);

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
    <section className="relative md:w-[500px] w-full">
      {disabled && (
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black/20 z-50">
          <Icons.LockIcon height={60} opacity={0.5} width={60} />
        </div>
      )}
      <div
        ref={sectionRef}
        className="relative flex-1 h-full bg-black/30 p-7 text-white flex flex-col gap-2"
        style={disabled ? { filter: "blur(5px)" } : {}}
      >
        <span className="font-black text-lg">{`LV. ${level}`}</span>
        <span>{`${name.ko} (${name.en}) / ${job}`}</span>
        <ul className="flex gap-2 text-tiny">
          {skills.map((skill, index) => (
            <li
              key={`${skill}-${index}`}
              className="rounded-sm text-white/50 px-1 py-[1px] font-semibold bg-white/10"
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="border-b border-white/20">Skill</h3>
          <div className="flex flex-col gap-2 w-full">
            {progress.map((skill) => (
              <Progress
                key={skill.label}
                classNames={{
                  indicator: colorMap[skill.label] || "bg-gray-500", // 기본 색상 지정 가능
                  label: "tracking-wider font-medium text-white/50",
                  value: "text-white/60",
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
        <div className="mt-4 flex-1 flex flex-col">
          <h3 className="border-b border-white/20">Attribute</h3>
          <div className="grid grid-cols-4 gap-3">
            {attribute.map((attr) => {
              const IconComponent = Icons[attr.icon as keyof typeof Icons];

              return (
                <button
                  key={attr.label}
                  className={clsx(
                    "border flex py-1 flex-col gap-2 items-center justify-center rounded-xl border-white/20 aspect-square hover:bg-white/10",
                    {
                      "bg-white/5": selectedAttribute.label === attr.label,
                    },
                  )}
                  onClick={() => setSelectedAttribute(attr)}
                >
                  {IconComponent && <IconComponent height={50} width={50} />}
                  <span className="text-sm">{attr.label}</span>
                </button>
              );
            })}
          </div>
          <div className="border border-white/20 bg-white/5 p-4 rounded-xl flex-1 mt-4">
            <h4 className="font-bold">{selectedAttribute.label}</h4>
            <hr className="border-white/20 mb-4 -mt-1" />
            <p className="text-white text-sm leading-6">
              {selectedAttribute.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterInfo;
