"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hasBackground = !pathname.includes("/achievement/");

  return (
    <div
      className="w-full h-full min-h-screen"
      style={
        hasBackground
          ? {
              background: "url('/images/background-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default BackgroundProvider;
