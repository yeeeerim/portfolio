"use client";

import React, { useEffect, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "@heroui/link";
import clsx from "clsx";
import Image from "next/image";

import { Game } from "@/static/game-data";

interface GameItemProps {
  game: Game;
}

const GameItem = ({ game }: GameItemProps) => {
  const [thumbnail, setThumbnail] = useState<string>();
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setThumbnail(undefined);
    setIsImageLoading(true);

    fetch(`/api/og-image?url=${encodeURIComponent(game.url)}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load game thumbnail");

        return res.json();
      })
      .then((data) => {
        if (typeof data.image === "string") setThumbnail(data.image);
      })
      .catch(() => setIsImageLoading(false));

    return () => controller.abort();
  }, [game.url]);

  return (
    <Link
      isExternal
      aria-label={`${game.title} 게임 시작하기 (새 창)`}
      className={clsx(
        "group relative block w-full overflow-hidden rounded-sm",
        "border-3 border-[#5b4658] bg-[#fff9e9] text-[#5b4658] shadow-[6px_6px_0_rgba(91,70,88,.22)]",
        "backdrop-blur-md transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#ff8fa3] hover:shadow-[8px_8px_0_rgba(91,70,88,.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63bcff] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
      )}
      color="foreground"
      href={game.url}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#bdeeff]/30 via-transparent to-[#ffb7c7]/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

      <article className="relative flex h-full flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#dff7ff] border-b-2 border-[#5b4658]">
          <div
            className={clsx(
              "absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-white/5 to-transparent",
              !isImageLoading && "hidden",
            )}
          />

          {thumbnail && (
            <Image
              fill
              alt={`${game.title} 게임 미리보기`}
              className={clsx(
                "object-cover transition-all duration-500 group-hover:scale-[1.035]",
                isImageLoading
                  ? "opacity-0"
                  : "opacity-90 group-hover:opacity-100",
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              src={thumbnail}
              onError={() => setIsImageLoading(false)}
              onLoad={() => setIsImageLoading(false)}
            />
          )}

          {!thumbnail && !isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(99,188,255,0.16),transparent_65%)]">
              <PlayIcon className="h-10 w-10 text-[#8cc8d8]" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#fff9e9]/50 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-sm border-2 border-[#5b4658] bg-[#fff9e9]/90 px-2 py-1 text-[9px] font-bold tracking-[0.14em] text-[#4d8a72]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
            PLAYABLE
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-1.5 text-[9px] font-semibold tracking-[0.24em] text-[#63bcff]">
                WEB GAME
              </p>
              <h3 className="mb-0 truncate text-lg font-bold tracking-tight text-[#5b4658]">
                {game.title}
              </h3>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-sm border-2 border-[#5b4658] bg-[#ffe36e] px-3 py-1.5 text-[10px] font-bold text-[#5b4658] shadow-[3px_3px_0_#5b4658] transition-all duration-300 group-hover:bg-[#ffb7c7]">
              <PlayIcon className="h-3 w-3" />
              게임 시작
            </span>
          </div>

          <p className="mt-3 text-xs leading-5 text-[#6b5b6b]">
            {game.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default GameItem;
