"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className={clsx(
        linkStyles({ color: "foreground" }),
        "data-[active=true]:text-primary !text-lg font-semibold",
      )}
      onClick={() => router.back()}
    >{`< Back`}</button>
  );
};

export default BackButton;
