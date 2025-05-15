import React from "react";

import { Navbar } from "@/components/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1 mt-10 md:mt-20 mb-20 max-w-[100vw] w-[1280px] mx-auto">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
