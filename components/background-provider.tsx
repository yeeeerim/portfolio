"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDefaultBg = !pathname.includes("/achievement/");

  return (
    <div
      className="pixel-world w-full h-full min-h-screen"
      style={
        isDefaultBg
          ? {
              backgroundColor: "#dff7ff",
            }
          : {
              backgroundColor: "#fff2c7",
            }
      }
    >
      {children}
    </div>
  );
};

export default BackgroundProvider;
