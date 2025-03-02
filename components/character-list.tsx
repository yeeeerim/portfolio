"use client";

import React from "react";
import { Button } from "@heroui/button";

import CharacterCard from "./character-card";

const CharacterList = () => {
  const [selectedCharacter, setSelectedCharacter] = React.useState("진예림");

  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        <CharacterCard
          active={selectedCharacter === "진예림"}
          buttonText="Lv. 3"
          description="Frontend"
          src={"https://heroui.com/images/hero-card.jpeg"}
          title="진예림"
          onClick={() => setSelectedCharacter("진예림")}
        />
        <CharacterCard
          active={selectedCharacter === "OOO"}
          buttonText="Lv. 1"
          description="Frontend"
          src={"https://heroui.com/images/album-cover.png"}
          title="OOO"
          onClick={() => setSelectedCharacter("OOO")}
        />
        <CharacterCard />
      </div>
      <Button color="success" onPress={() => {}}>
        START
      </Button>
    </div>
  );
};

export default CharacterList;
