"use client";

import { useEffect, useState } from "react";

import { getCharacterInfo } from "@/lib/getCharacterinfo";
import { Character } from "@/types/character";
import { CrossSwordsIcon } from "@/components/icons";

interface PostHeaderProps {
  title: string;
  date: string;
  coverImage?: string;
}

const PostHeader = ({ title, date, coverImage }: PostHeaderProps) => {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const fetchedCharacter = getCharacterInfo();

    setCharacter(fetchedCharacter);
  }, []);

  if (!character) {
    return null;
  }

  return (
    <div className="flex gap-1 flex-col">
      <CrossSwordsIcon className="w-5 h-5" /> <h4>{title} 회고</h4>
      <p className="text-sm text-default-500">{date}</p>
    </div>
  );
};

export default PostHeader;
