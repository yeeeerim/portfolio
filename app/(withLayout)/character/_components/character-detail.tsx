"use client";

import { Progress } from "@heroui/react";
import React from "react";
import Link from "next/link";

import { calculateDeveloperLevel } from "@/lib/calculateDeveloperLevel";
import { careerData } from "@/static/career-data";
import { GithubIcon, LetterIcon, PenIcon } from "@/components/icons";
import { characterInfo } from "@/static/character-info";

const CharacterDetail = () => {
  // 결과 계산
  const result = calculateDeveloperLevel(careerData);
  const { level, experience } = result;

  const character = characterInfo["진예림"];

  return (
    <div className="h-[600px] text-[#5b4658] w-[400px] px-5 bg-[#fff9e9] border-3 border-[#5b4658] shadow-[6px_6px_0_rgba(91,70,88,.2)] divide-y divide-[#f3b6c5] flex-col flex items-start justify-center">
      <div className="w-full flex-col p-4 flex">
        <h3 className="text-center font-bold">{character.name.en}</h3>
        <span>{character.job}</span>
        <span className="text-2xl font-bold mb-3">{`Level ${level}`}</span>
        <div className="flex items-center w-full gap-3">
          <Progress
            classNames={{
              base: "flex-row items-center",
              track: "flex-1 border border-[#8cc8d8] bg-[#dff7ff]",
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
              track: "flex-1 border border-[#f3b6c5] bg-[#ffe5eb]",
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
              track: "flex-1 border border-[#8cc8d8] bg-[#dff7ff]",
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
      <div className="w-full p-4 flex-1 grid grid-cols-2 justify-center">
        {/* Character Feature 1 */}
        <span>Birthday</span>
        <span>{character.birthday}</span>
        <span>MBTI</span>
        <span>{character.mbti}</span>
        <span>Major</span>
        <span>{character.major}</span>
        <span>Favorite Skills</span>
        <span>{character.favoriteSkills.join(", ")}</span>
      </div>
      <div className="w-full p-4 flex-1 ">
        {/* Character Feature 2 */}
        <div className="flex items-center gap-3">
          <Link
            aria-label="GitHub"
            className="bg-[#dff7ff] border-2 border-[#5b4658] rounded-sm p-2 w-fit"
            href="https://github.com/yeeeerim"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            aria-label="email"
            className="bg-[#ffe5eb] border-2 border-[#5b4658] rounded-sm p-2 w-fit"
            href="mailto:yerim609@gmail.com"
            target="_blank"
          >
            <LetterIcon />
          </Link>
          <Link
            aria-label="blog"
            className="bg-[#fff3bd] border-2 border-[#5b4658] rounded-sm p-2 w-fit"
            href="https://velog.io/@yr1m/posts"
            target="_blank"
          >
            <PenIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
