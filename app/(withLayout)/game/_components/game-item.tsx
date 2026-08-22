"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "@heroui/link";
import Image from "next/image";

import { Game } from "@/static/game-data";

interface GameItemProps {
  game: Game;
}

const GameItem = ({ game }: GameItemProps) => {
  const [thumbnail, setThumbnail] = useState<string>();

  useEffect(() => {
    fetch(`/api/og-image?url=${encodeURIComponent(game.url)}`)
      .then((res) => res.json())
      .then((data) => setThumbnail(data.image));
  }, [game.url]);

  return (
    <Link
      isExternal
      className={clsx(
        "group flex w-full max-w-[640px] text-white",
        "transition-colors duration-200",
      )}
      color="foreground"
      href={game.url}
    >
      <div
        className={clsx(
          "flex flex-1 flex-col sm:flex-row",
          "bg-black/40 border border-white/30",
          "transition-colors duration-200",
          "group-hover:border-white/60 group-hover:bg-black/55",
        )}
      >
        <div className="flex items-center justify-center w-full sm:w-[320px] shrink-0 border-b sm:border-b-0 sm:border-r border-white/20 bg-white/5 p-5">
          {thumbnail ? (
            <Image
              alt={game.title}
              className="w-full h-full object-cover"
              height={110}
              src={thumbnail}
              width={320}
            />
          ) : (
            <></>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold truncate">{game.title}</h3>
            <span
              className={clsx(
                "text-tiny font-semibold border border-white/40 px-2.5 py-1 shrink-0",
                "transition-colors duration-200",
                "group-hover:border-[#63bcff]/60 group-hover:text-[#63bcff]",
              )}
            >
              START →
            </span>
          </div>

          <p className="text-sm text-white/55 leading-relaxed">
            {game.description}
          </p>

          {game.tags && game.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-tiny px-2 py-0.5 border border-white/20 bg-white/5 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default GameItem;
