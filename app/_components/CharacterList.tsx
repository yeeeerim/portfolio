import React from "react";
import Profile from "./Profile";
import { Button } from "@heroui/button";

const CharacterList = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <Button onPress={() => {}} color="success">
        START
      </Button>
    </div>
  );
};

export default CharacterList;
