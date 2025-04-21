import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import clsx from "clsx";

import QuestHeader from "./_components/quest-header";
import QuestBody from "./_components/quest-body";

import { getQuestBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

const QuestDetailPage = async (props: Params) => {
  const params = await props.params;
  const quest = getQuestBySlug(params.slug);

  if (!quest) {
    return notFound();
  }

  const content = await markdownToHtml(quest.content || "");

  return (
    <main
      className={clsx(fontSans.variable, "max-w-[960px] mx-auto px-5 mb-20")}
    >
      <article className="mt-5 flex flex-col gap-5 font-sans bg-default-100/50 p-5 rounded-lg">
        <QuestHeader
          contributors={quest.contributors}
          date={quest.date}
          description={quest.description}
          skills={quest.skills}
          title={quest.title}
          url={quest.url}
        />
        <QuestBody content={content} />
      </article>
    </main>
  );
};

export default QuestDetailPage;

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const quest = getQuestBySlug(params.slug);

  if (!quest) {
    return notFound();
  }

  const title = `${quest.title} | ${siteConfig.name}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
