import React from "react";

import Carousel from "@/components/carousel";

interface QuestBodyProps {
  content: string;
  banners: string[];
}

const QuestBody = ({ content, banners }: QuestBodyProps) => {
  return (
    <>
      {banners?.length > 0 && <Carousel images={banners} />}

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-white"
      />
    </>
  );
};

export default QuestBody;
