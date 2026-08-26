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
        className="border-none bg-white/10 w-[100px] h-[100px]"
        radius="lg"
      />
    );

  return (
    <button onClick={onClick}>
      <Card
        isFooterBlurred
        className={clsx(
          "pixel-card text-[#5b4658] w-[100px] h-[100px] bg-[#fff9e9] relative rounded-none",
          {
            "border-4 p-1 border-[#ff8fa3] rounded-none -translate-y-1": active,
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
            "rounded-none absolute font-black bg-[#83dfc5] text-[#405b57] z-10 px-2 py-1 text-[12px] border border-[#5b4658]",
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
            "justify-start bg-[#fff9e9]/90 border-[#5b4658] border-1 overflow-hidden py-1 absolute rounded-none shadow-none ml-1 z-10",
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
