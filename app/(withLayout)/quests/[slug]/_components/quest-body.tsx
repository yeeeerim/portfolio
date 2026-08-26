import React from "react";

interface QuestBodyProps {
  content: string;
}

const QuestBody = ({ content }: QuestBodyProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className="text-[#5b4658]" />
  );
};

export default QuestBody;
