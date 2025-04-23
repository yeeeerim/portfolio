import React from "react";

import QuestList from "./_components/quest-list";

import { getAllQuests } from "@/lib/api";

const QuestLayout = ({ children }: { children: React.ReactNode }) => {
  const allQuests = getAllQuests();

  return (
    <main className="mb-20 flex gap-5 items-start font-sans">
      <QuestList
        allQuests={allQuests.sort((a, b) => {
          const dateA = new Date(a.date.startAt);
          const dateB = new Date(b.date.startAt);

          return dateB.getTime() - dateA.getTime();
        })}
      />
      <article className="px-8 pb-4 flex-1 bg-white/10 shadow-medium rounded-medium flex flex-col gap-5 font-sans">
        {children}
      </article>
    </main>
  );
};

export default QuestLayout;
