import React from "react";

import QuestList from "./_components/quest-list";

import { getAllQuests } from "@/lib/api";

const QuestLayout = ({ children }: { children: React.ReactNode }) => {
  const allQuests = getAllQuests();

  return (
    <main className="mb-20 flex flex-col md:flex-row gap-3 items-start font-sans">
      <QuestList allQuests={allQuests} />
      <article className="px-2 flex-1 w-full">
        <div className="px-4 md:px-8 pb-4 w-full flex-1 bg-[#fff9e9]/90 border-2 border-[#5b4658] shadow-[5px_5px_0_rgba(91,70,88,.18)] rounded-sm flex flex-col gap-5 font-sans">
          {children}
        </div>
      </article>
    </main>
  );
};

export default QuestLayout;
