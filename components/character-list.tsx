"use client";

import React from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import CharacterCard from "./character-card";

import { characterInfo } from "@/static/character-info";
import { Character } from "@/types/character";

type CharacterListProps = {
  selectedCharacter: Character;
  setSelectedCharacter: (character: Character) => void;
};

const CharacterList = ({
  selectedCharacter,
  setSelectedCharacter,
}: CharacterListProps) => {
  const router = useRouter();

  const characters = Object.keys(characterInfo);

  const handleStartClick = () => {
    Cookies.set("auth_token", JSON.stringify(selectedCharacter), {
      expires: 7,
      path: "/",
    });

    router.push("/character");
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            active={selectedCharacter.name.ko === character}
            level={`Lv. ${characterInfo[character].level}`}
            name={character}
            src={characterInfo[character].profile_image}
            onClick={() => {
              setSelectedCharacter(characterInfo[character]);
            }}
          />
        ))}
        <CharacterCard />
      </div>
      <Button
        className="font-bold text-medium"
        color="success"
        isDisabled={selectedCharacter.disabled}
        onPress={handleStartClick}
      >
        START
      </Button>
    </div>
  );
};

export default CharacterList;
