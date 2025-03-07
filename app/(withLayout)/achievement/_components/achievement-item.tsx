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
        "border shadow-card p-3 h-[400px] duration-300 justify-center gap-4 border-default-200 items-center rounded-lg flex w-[200px]",
        "hover:shadow-card-hover",
      )}
      color="foreground"
      href={`/achievement/${post.slug}`}
      isDisabled={isBlock}
    >
      <div className="flex flex-col items-center">
        <h4 className="whitespace-pre-line text-center">
          {post.title.split("").map((char, index) => (
            <span key={index} className="block min-h-2">
              {char}
            </span>
          ))}
        </h4>

        {isBlock && <LockIcon height={24} opacity={0.6} width={24} />}
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
