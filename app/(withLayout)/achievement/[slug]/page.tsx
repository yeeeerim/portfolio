import { Metadata } from "next";
import { notFound } from "next/navigation";

import PostHeader from "./_components/post-header";
import PostBody from "./_components/post-body";
import BackButton from "./_components/back-button";

import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { siteConfig } from "@/config/site";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="max-w-[960px] mx-auto px-5 mb-20 font-sans">
      <BackButton />
      <article className="mt-5 flex flex-col gap-5 font-sans bg-default-100/50 p-5 rounded-lg">
        <PostHeader
          coverImage={post.coverImage}
          date={post.date}
          title={post.title}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${siteConfig.name}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
