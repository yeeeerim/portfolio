"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@heroui/react";

import { getCharacterInfo } from "@/lib/getCharacterinfo";
import { Character } from "@/types/character";

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
    <div>
      <h4>{title}</h4>
      <p>{date}</p>
      <User
        avatarProps={{
          src: character.profile_image_url,
        }}
        className="bg-default-100 p-3"
        description={character.job}
        name={`${character.name.ko} (${character.name.en})`}
      />
      {coverImage && (
        <Image alt={title} height={500} src={coverImage} width={300} />
      )}
    </div>
  );
};

export default PostHeader;
