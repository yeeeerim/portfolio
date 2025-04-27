"use client";

import React, { useState } from "react";
import clsx from "clsx";

import CharacterList from "./character-list";
import CharacterInfo from "./character-info";

import { characterInfo } from "@/static/character-info";
import { Character } from "@/types/character";

const GameStartComponent = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    characterInfo["진예림"],
  );

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-full gap-3",
        "md:flex-row md:gap-0",
      )}
    >
      <CharacterList
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      <div
        className="flex-1 flex items-center justify-center h-[700px] w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${selectedCharacter.image_url})`,
        }}
      />
      <CharacterInfo character={selectedCharacter} />
    </div>
  );
};

export default GameStartComponent;
