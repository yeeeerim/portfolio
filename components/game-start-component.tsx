"use client";

import React, { useState } from "react";

import CharacterInfo from "@/components/character-info";
import CharacterList from "@/components/character-list";
import { characterInfo } from "@/static/character-info";
import { Character } from "@/types/character";

const GameStartComponent = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    characterInfo["진예림"],
  );

  return (
    <>
      <CharacterList
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      <div
        className="flex-1 flex items-center justify-center h-[700px] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${selectedCharacter.image_url})`,
        }}
      />
      <CharacterInfo character={selectedCharacter} />
    </>
  );
};

export default GameStartComponent;
