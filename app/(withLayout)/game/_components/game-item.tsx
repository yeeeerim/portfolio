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
        "group relative block w-full overflow-hidden rounded-2xl",
        "border border-white/15 bg-[#07111d]/80 text-white shadow-[0_22px_55px_rgba(0,0,0,0.3)]",
        "backdrop-blur-md transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#63bcff]/55 hover:shadow-[0_26px_70px_rgba(9,98,168,0.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63bcff] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
      )}
      color="foreground"
      href={game.url}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#63bcff]/10 via-transparent to-[#8b5cf6]/10 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

      <article className="relative flex h-full flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#050b12]">
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
              <PlayIcon className="h-10 w-10 text-white/25" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/70 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-black/55 px-2 py-1 text-[9px] font-semibold tracking-[0.14em] text-emerald-200 backdrop-blur-md">
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
              <h3 className="mb-0 truncate text-lg font-bold tracking-tight text-white">
                {game.title}
              </h3>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#63bcff] px-3 py-1.5 text-[10px] font-bold text-[#04101b] shadow-[0_0_20px_rgba(99,188,255,0.18)] transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_28px_rgba(99,188,255,0.38)]">
              <PlayIcon className="h-3 w-3" />
              게임 시작
            </span>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/60">
            {game.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default GameItem;
