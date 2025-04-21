import React from "react";
import Link from "next/link";

import { Quest } from "@/types/quest";
import { UserRoundedIcon } from "@/components/icons";

interface QuestItemProps {
  quest: Quest;
}

const QuestItem = ({ quest }: QuestItemProps) => {
  return (
    <Link
      className="px-3 py-2 flex hover:bg-default-100 rounded-lg gap-2"
      href={`/quests/${quest.slug}`}
    >
      <div>{quest.title}</div>
      <div className="flex items-center rounded-full bg-default-100 px-2 py-1 text-tiny gap-1">
        <UserRoundedIcon className="w-4 h-4" />
        {quest.contributors}
      </div>
    </Link>
  );
};

export default QuestItem;
