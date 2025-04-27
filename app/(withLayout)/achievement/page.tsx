import React from "react";

import AchievementItem from "./_components/achievement-item";

import { getAllPosts } from "@/lib/api";

const page = () => {
  const allPosts = getAllPosts();

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center">
      {allPosts.map((post) => (
        <AchievementItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default page;
