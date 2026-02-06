"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Program() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const cards = [
    {
      title: "KELAS HOME SCHOOLING",
      description:
        "Belajar dirumah dengan Bimbingan orang tua dan tutor Kunjungan terdaftar di Dapodik dan mengikuti Kurikulum Merdeka yang dikembangkan oleh lembaga dan tetap mengembangkan pemberdayaan dalam mewujudkan Projek Penguatan profil Pelajar Pancasila",
    },
    {
      title: "KELAS PROFESI",
      description:
        "Belajar sambil bekerja dengan dibekali keterampilam yang disesuaikan dengan tempat bekerja peserta didik untuk meningkatkan kualitas kerja secara profesional.",
    },
    {
      title: "KELAS LIFE SKILL",
      description:
        "Belajar dibekali dengan keterampilan sesuai pilihan keterampilan TIK (window & MS.office), Tata rias pengantin, dan Design grafis",
    },
    {
      title: "KELAS BOARDING (PESANTREN)",
      description:
        "Belajar dan dibekali pendidikan agama, kitab kuning, dan lain-lain. Bekerjasama dengan pondok pesantren, menggunakan kurikulum Merdeka yang dipadukan dengan kurikulum Pondok.",
    },
    {
      title: "KELAS REGULER",
      description:
        "Belajar dengan kumer, yang lebih menekankan pada akademik & tetap mengembangkan pemberdayaan dalam mewujudkan projek penguatan profil pelajar panacasila.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Model layanan kelas PKBM Bina Generasi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71]">
              Program
            </h2>
          </div>
        </div>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-[#024A71]" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-[#024A71]" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#DFF2FE] rounded-lg p-8 py-16 flex-shrink-0 w-[400px] md:w-[500px]"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex items-center justify-center">
                  {card.title}
                </h3>

                <p className="leading-relaxed text-gray-600 text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            <ChevronLeft size={20} className="text-[#024A71]" />
            <p className="text-sm text-gray-600">
              Geser untuk melihat lebih banyak
            </p>
            <ChevronRight size={20} className="text-[#024A71]" />
          </div>
        </div>
      </div>

    </div>
  );
}
