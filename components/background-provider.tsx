"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDefaultBg = !pathname.includes("/achievement/");

  return (
    <div
      className="w-full h-full min-h-screen"
      style={
        isDefaultBg
          ? {
              background: "url('/images/background-default.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {
              background: "url('/images/background-achievement.png')",
              backgroundSize: "contain",
            }
      }
    >
      {children}
    </div>
  );
};

export default BackgroundProvider;
