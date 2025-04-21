import clsx from "clsx";

import QuestList from "./_components/quest-list";

import { fontSans } from "@/config/fonts";
import { getAllQuests } from "@/lib/api";

const page = () => {
  const allQuests = getAllQuests();

  return (
    <div
      className={clsx(
        fontSans.variable,
        "mb-20 flex gap-5 items-start font-sans",
      )}
    >
      <QuestList allQuests={allQuests} />
      <div className="flex-1 bg-default-200 h-full w-full" />
    </div>
  );
};

export default page;
