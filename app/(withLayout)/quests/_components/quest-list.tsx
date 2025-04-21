"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import QuestItem from "./quest-item";

import { Quest } from "@/types/quest";

interface QuestListProps {
  allQuests: Quest[];
}

const QuestList = ({ allQuests }: QuestListProps) => {
  const completedQuests = allQuests.filter((quest) => quest.date.endAt);
  const inProgressQuests = allQuests.filter((quest) => !quest.date.endAt);

  return (
    <Accordion
      className="w-[400px]"
      defaultExpandedKeys={["1", "2"]}
      selectionMode="multiple"
      variant="splitted"
    >
      <AccordionItem
        key="1"
        aria-label="진행중인 퀘스트"
        className="[&_h2]:!mb-0"
        title={
          <div className="flex items-center gap-2">
            <span>진행중인 퀘스트</span>
            <span className="text-sm text-gray-500">
              ({inProgressQuests.length})
            </span>
          </div>
        }
      >
        <div className="flex flex-col justify-center">
          {inProgressQuests.map((quest) => (
            <div
              key={quest.slug}
              className="border-t border-default-100 w-full h-fit py-1"
            >
              <QuestItem quest={quest} />
            </div>
          ))}
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="완료된 퀘스트"
        className="[&_h2]:!mb-0"
        title={
          <div className="flex items-center gap-2">
            <span>완료된 퀘스트</span>
            <span className="text-sm text-gray-500">
              ({completedQuests.length})
            </span>
          </div>
        }
      >
        <div className="flex flex-col justify-center">
          {completedQuests.map((quest) => (
            <div
              key={quest.slug}
              className="border-t border-default-100 w-full h-fit py-1"
            >
              <QuestItem quest={quest} />
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default QuestList;
