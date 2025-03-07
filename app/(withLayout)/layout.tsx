import React from "react";

import { Navbar } from "@/components/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1 mt-20">{children}</main>
      {/* <footer className="w-full flex items-center justify-center py-3">
        <Link isExternal className="flex items-center gap-1 text-current" href="/" title="heroui.com homepage">
          <span className="text-default-600">JIN YERIM</span>
        </Link>
      </footer> */}
    </div>
  );
};

export default PageLayout;
