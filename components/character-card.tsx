"use client";

import { Button } from "@heroui/button";
import { Card, CardFooter, Image } from "@heroui/react";
import React from "react";

interface CharacterCardProps {
  src: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

const CharacterCard = ({
  src,
  title,
  description,
  buttonText,
}: CharacterCardProps) => {
  return (
    <div>
      <Card isFooterBlurred className="border-none" radius="lg">
        <Image
          alt="Character Image"
          className="object-cover"
          height={200}
          src={src}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <ul>
            <li className="text-sm text-white/80 font-semibold">{title}</li>
            <li className="text-tiny text-white/80">{description}</li>
          </ul>
          <Button
            className="text-sm font-semibold text-white bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CharacterCard;
