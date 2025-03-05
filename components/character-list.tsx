"use client";

import React from "react";
import { Button } from "@heroui/button";

import CharacterCard from "./character-card";
import { characterInfo } from "@/static/character-info";
import { useRouter } from "next/navigation";
import { Character } from "@/types/character";

type CharacterListProps = {
  selectedCharacter: Character;
  setSelectedCharacter: (character: Character) => void;
};

const CharacterList = ({ selectedCharacter, setSelectedCharacter }: CharacterListProps) => {
  const router = useRouter();

  const characters = Object.keys(characterInfo);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            active={selectedCharacter.name.ko === character}
            level={`Lv. ${characterInfo[character].level}`}
            name={character}
            onClick={() => {
              setSelectedCharacter(characterInfo[character]);
            }}
            src={characterInfo[character].profile_image}
          />
        ))}
        <CharacterCard />
      </div>
      <Button
        isDisabled={selectedCharacter.disabled}
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
