import React from "react";

import {
  CalendarIcon,
  CodeSquareIcon,
  CrossSwordsIcon,
  UserRoundedIcon,
} from "@/components/icons";

interface QuestHeaderProps {
  date: {
    startAt: string;
    endAt: string;
  };
  title: string;
  skills: string[];
  contributors: number;
  description: string;
  url: {
    external: string;
    github: string;
  };
}

const QuestHeader = ({
  date,
  title,
  skills,
  contributors,
  description,
  url,
}: QuestHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h1 className="text-2xl flex items-center gap-2 font-bold">
        {title} <CrossSwordsIcon className="w-5 h-5" />
      </h1>
      <div className="border border-white/20 flex-col p-4 text-sm w-full flex items-start gap-2">
        <p className="m-0">{description}</p>
        <hr className="w-full my-2" />
        <span className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <span>
            {date.startAt} - {date.endAt ?? "진행중"}
          </span>
        </span>
        <span className="flex items-center gap-2">
          <UserRoundedIcon className="w-4 h-4" />
          파티원 : {contributors}명
        </span>
        <span className="flex items-center gap-2">
          <CodeSquareIcon className="w-4 h-4" />
          {skills.map((skill) => (
            <code key={skill}>{skill}</code>
          ))}
        </span>
        {url.external && (
          <a href={url.external} rel="noopener noreferrer" target="_blank">
            {url.external}
          </a>
        )}
        {url.github && (
          <a href={url.github} rel="noopener noreferrer" target="_blank">
            {url.github}
          </a>
        )}
      </div>
    </div>
  );
};

export default QuestHeader;
