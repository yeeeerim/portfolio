import React from "react";

import GameItem from "./_components/game-item";

import { gameList } from "@/static/game-data";

const page = () => {
  return (
    <div className="mx-auto grid min-h-[500px] w-full max-w-[1020px] grid-cols-1 items-start gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
      {gameList.map((game) => (
        <GameItem key={game.url} game={game} />
      ))}
    </div>
  );
};

export default page;
