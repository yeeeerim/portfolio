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
      <div className="flex-1 h-full border border-default-100" />
      <CharacterInfo character={selectedCharacter} />
    </>
  );
};

export default GameStartComponent;
