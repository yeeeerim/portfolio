import React from "react";
import Image from "next/image";

import { Author } from "@/types/author";

interface PostHeaderProps {
  title: string;
  date: string;
  coverImage?: string;
  author: Author;
}

const PostHeader = ({ title, date, coverImage, author }: PostHeaderProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{date}</p>
      {coverImage && (
        <Image alt={title} height={500} src={coverImage} width={300} />
      )}
      <p>{author.name}</p>
    </div>
  );
};

export default PostHeader;
