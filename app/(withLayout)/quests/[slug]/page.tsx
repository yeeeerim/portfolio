import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

import QuestHeader from "./_components/quest-header";
import QuestBody from "./_components/quest-body";

import { getQuestBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { siteConfig } from "@/config/site";

const QuestDetailPage = async (props: Params) => {
  const params = await props.params;
  const quest = getQuestBySlug(params.slug);

  if (!quest) {
    return notFound();
  }

  const content = await markdownToHtml(quest.content || "");

  return (
    <>
      <QuestHeader
        contributors={quest.contributors}
        date={quest.date}
        description={quest.description}
        skills={quest.skills}
        title={quest.title}
        url={quest.url}
      />
      <QuestBody content={content} />
    </>
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
