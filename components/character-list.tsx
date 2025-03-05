"use client";

import React from "react";
import { Button } from "@heroui/button";

import CharacterCard from "./character-card";
import { characterInfo } from "@/static/character-info";
import { useRouter } from "next/navigation";

type CharacterListProps = {
  selectedCharacter: string;
  setSelectedCharacter: (character: string) => void;
};

const CharacterList = ({ selectedCharacter, setSelectedCharacter }: CharacterListProps) => {
  const router = useRouter();

  const characters = Object.keys(characterInfo);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={`${character}-${index}`}
            active={selectedCharacter === character}
            buttonText={`Lv. ${characterInfo[character].level}`}
            description={characterInfo[character].shortJob}
            src={characterInfo[character].profile_image}
            title={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
        <CharacterCard />
      </div>
      <Button
        isDisabled={selectedCharacter !== "진예림"}
        color="success"
        onPress={() => {
          router.push("/playground");
        }}
      >
        START
      </Button>
    </div>
  );
};

export default CharacterList;
