"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface CarouselProps {
  images: string[];
  itemsPerPage?: number;
}

export default function Carousel({ images, itemsPerPage = 2 }: CarouselProps) {
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goPrev = () =>
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const goNext = () =>
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  const getVisibleImages = () => {
    const start = currentPage * itemsPerPage;

    return images.slice(start, start + itemsPerPage);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* 이미지 그룹 */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
        }}
      >
        {getVisibleImages().map((src, idx) => (
          <div
            key={idx}
            className="relative h-64 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              fill
              alt={`Banner ${idx}`}
              className="object-cover"
              src={src}
            />
          </div>
        ))}
      </div>

      {/* 좌우 버튼 */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 shadow"
        onClick={goPrev}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 shadow"
        onClick={goNext}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* 페이지네이션 불릿 */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx !== currentPage ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentPage(idx)}
          />
        ))}
      </div>
    </div>
  );
}
