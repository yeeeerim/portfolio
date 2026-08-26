"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(pathname === "/");

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => setIsLoading(false), 3000); // 3초 로딩

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gradient-to-b from-[#bdeeff] to-[#b8e99b] text-[#5b4658]">
        <p className="text-3xl font-black animate-pulse">모험을 준비하는 중… ✦</p>
        <div className="w-64 h-4 bg-[#fff9e9] border-2 border-[#5b4658] overflow-hidden shadow-[4px_4px_0_#5b4658]">
          <div className="h-full bg-[#ff9eb5] animate-progressBar" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
