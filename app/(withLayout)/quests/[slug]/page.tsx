import { Metadata } from "next";
import { notFound } from "next/navigation";

import QuestBanners from "./_components/quest-banners";
import QuestBody from "./_components/quest-body";
import QuestHeader from "./_components/quest-header";

import { siteConfig } from "@/config/site";
import { getAllQuests, getQuestBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

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
        skills={quest.skills}
        title={quest.title}
        url={quest.url}
      />
      <QuestBanners banners={quest.banners} />
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

export async function generateStaticParams() {
  const quests = getAllQuests();

  return quests.map((quest) => ({
    slug: quest.slug,
  }));
}
