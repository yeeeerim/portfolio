import React from "react";

import GameItem from "./_components/game-item";

import { gameList } from "@/static/game-data";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-4 min-h-[500px] py-6">
      {gameList.map((game) => (
        <GameItem key={game.url} game={game} />
      ))}
    </div>
  );
};

export default page;
