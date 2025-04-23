"use client";

import { Card, CardFooter, Image } from "@heroui/react";
import clsx from "clsx";
import React from "react";

interface CharacterCardProps {
  src?: string;
  name?: string;
  level?: string;
  active?: boolean;
  onClick?: () => void;
}

const CharacterCard = ({
  src,
  name,
  level,
  active,
  onClick,
}: CharacterCardProps) => {
  if (!src)
    return (
      <Card
        className="border-none bg-white/20 w-[100px] h-[100px]"
        radius="lg"
      />
    );

  return (
    <button onClick={onClick}>
      <Card
        isFooterBlurred
        className={clsx(
          "text-white/80 w-[100px] h-[100px] bg-white/10 relative",
          {
            "border-2 p-1 border-white/50 rounded-2xl": active,
            "border-none": !active,
          },
        )}
        radius="lg"
      >
        <Image
          alt="Character Image"
          className="object-cover aspect-square"
          src={src}
        />
        <div
          className={clsx(
            "rounded-2xl absolute font-bold bg-black/50 z-10 px-2 py-1 text-[12px]",
            {
              "right-2 top-2": active,
              "right-1 top-1": !active,
            },
          )}
        >
          {level}
        </div>
        <CardFooter
          className={clsx(
            "justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large shadow-small ml-1 z-10",
            {
              "w-[calc(100%_-_16px)] bottom-2": active,
              "w-[calc(100%_-_8px)] bottom-1": !active,
            },
          )}
        >
          <p className="flex flex-col justify-center w-full">
            <span className="text-tiny text-center w-full">{name}</span>
          </p>
        </CardFooter>
      </Card>
    </button>
  );
};

export default CharacterCard;
