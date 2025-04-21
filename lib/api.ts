import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

import { Post } from "@/types/post";
import { Quest } from "@/types/quest";

/**************************
 * Posts
 **************************/
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1));

  return posts;
}

/**************************
 * Quests
 **************************/
const questsDirectory = join(process.cwd(), "_quests");

export function getQuestBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(questsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Quest;
}

export function getAllQuests(): Quest[] {
  const slugs = getQuestSlugs();
  const quests = slugs
    .map((slug) => getQuestBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1));

  return quests;
}

export function getQuestSlugs() {
  return fs.readdirSync(questsDirectory);
}
