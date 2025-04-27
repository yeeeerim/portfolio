"use client";

import React from "react";

import Carousel from "@/components/carousel";

interface QuestBannersProps {
  banners: string[];
}

const QuestBanners = ({ banners }: QuestBannersProps) => {
  return <>{banners?.length > 0 && <Carousel images={banners} />}</>;
};

export default QuestBanners;
