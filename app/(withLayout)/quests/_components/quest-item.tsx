import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Quest } from "@/types/quest";
import { UserRoundedIcon } from "@/components/icons";

interface QuestItemProps {
  quest: Quest;
  isActive: boolean;
}

const QuestItem = ({ quest, isActive }: QuestItemProps) => {
  return (
    <Link
      className={clsx(
        "px-3 py-2 flex hover:bg-[#dff7ff] rounded-sm gap-2 items-center text-[#5b4658]",
        isActive && "bg-[#ffe5eb] border-l-4 border-[#ff8fa3]",
      )}
      href={`/quests/${quest.slug}`}
    >
      <div>{quest.title}</div>
      <div className="flex items-center rounded-full bg-[#83dfc5] px-2 py-1 text-tiny gap-1">
        <UserRoundedIcon className="w-4 h-4" />
        {quest.contributors}
      </div>
    </Link>
  );
};

export default QuestItem;
