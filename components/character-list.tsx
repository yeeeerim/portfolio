"use client";

import React from "react";
import { Button } from "@heroui/button";

import Profile from "@/components/profile";

const CharacterList = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-[120px] items-center flex-col gap-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <Button color="success" onPress={() => {}}>
        START
      </Button>
    </div>
  );
};

export default CharacterList;
