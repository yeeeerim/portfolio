import React from "react";

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
    <div className="flex flex-col gap-2">
      <h1>{title}</h1>
      <p>
        {date.startAt} ~ {date.endAt ?? "진행중"}
      </p>
      <p>{description}</p>
      <p>{skills.join(", ")}</p>
      <p>파티원 : {contributors}명</p>
      <p>
        <a href={url.external} rel="noopener noreferrer" target="_blank">
          {url.external}
        </a>
      </p>
    </div>
  );
};

export default QuestHeader;
