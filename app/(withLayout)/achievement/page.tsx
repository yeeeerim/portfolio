import React from "react";
import Link from "next/link";

import { getAllPosts } from "@/lib/api";

const page = () => {
  const allPosts = getAllPosts();

  return (
    <div className="flex flex-wrap gap-4">
      {allPosts.map((post) => (
        <Link key={post.slug} className="border p-3 border-default-200 rounded-lg w-[200px]" href={`/achievement/${post.slug}`}>
          <h4>{post.title}</h4>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
};

export default page;
