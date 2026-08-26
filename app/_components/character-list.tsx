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
    <div className="flex md:flex-col gap-4 justify-between items-center">
      <div className="flex items-center md:flex-col gap-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            active={selectedCharacter.name.ko === character}
            level={`Lv. ${characterInfo[character].level}`}
            name={character}
            src={characterInfo[character].profile_image_url}
            onClick={() => {
              setSelectedCharacter(characterInfo[character]);
            }}
          />
        ))}
        <CharacterCard />
      </div>
      <Button
        className="pixel-button font-black text-medium w-full text-[#5b4658] bg-[#ffe36e] border-2 border-[#5b4658]"
        color="success"
        isDisabled={selectedCharacter.disabled}
        onPress={handleStartClick}
      >
        모험 시작! ✦
      </Button>
    </div>
  );
};

export default CharacterList;
