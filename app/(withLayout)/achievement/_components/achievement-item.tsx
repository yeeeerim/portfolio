import React from "react";
import clsx from "clsx";
import { Link } from "@heroui/link";

import { Post } from "@/types/post";
import { LockIcon } from "@/components/icons";

interface AchievementItemProps {
  post: Post;
}

const AchievementItem = ({ post }: AchievementItemProps) => {
  const isBlock = new Date(post.date) > new Date();

  return (
    <Link
      key={post.slug}
      className={clsx(
        "transition-transform border-3 border-[#5b4658] bg-[#fff9e9] text-[#5b4658] font-bold shadow-[5px_5px_0_rgba(91,70,88,.2)] p-3 h-[400px] duration-300 justify-center gap-4 items-center rounded-sm flex w-[200px]",
        "hover:shadow-card-hover hover:transform hover:translate-y-7",
      )}
      color="foreground"
      href={`/achievement/${post.slug}`}
      isDisabled={isBlock}
    >
      <div className="flex flex-col items-center">
        <h4 className="whitespace-pre-line text-lg text-center">
          {post.title.split("").map((char, index) => (
            <span key={index} className="block min-h-2">
              {char}
            </span>
          ))}
        </h4>

        {isBlock && <LockIcon height={24} width={24} />}
      </div>
      <p className="whitespace-pre-line text-sm text-center">
        {isBlock ? (
          <span className="block">
            {"Locked".split("").map((char, index) => (
              <span key={index} className="block min-h-2">
                {char}
              </span>
            ))}
          </span>
        ) : (
          post.date
            .replaceAll("-", ".")
            .split("")
            .map((char, index) => (
              <span key={index} className="block min-h-2">
                {char}
              </span>
            ))
        )}
      </p>
    </Link>
  );
};

export default AchievementItem;
