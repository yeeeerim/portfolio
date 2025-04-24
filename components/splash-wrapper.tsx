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
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[url('/rpg-bg.jpg')] bg-cover text-white">
        <p className="text-3xl animate-pulse drop-shadow-lg">Loading...</p>
        <div className="w-64 h-2 bg-white/20 rounded overflow-hidden">
          <div className="h-full bg-yellow-400 animate-progressBar" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
