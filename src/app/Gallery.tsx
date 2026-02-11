/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleries = [
    {
      title: "Ngaji",
      image: "/gallery/1.png",
    },
    {
      title: "Belajar",
      image: "/gallery/2.png",
    },
    {
      title: "Olahraga",
      image: "/gallery/3.png",
    },
    {
      title: "Kegiatan",
      image: "/gallery/4.png",
    },
    {
      title: "Olimpiade Tingkat Nasional",
      image: "/gallery/5.png",
    },
    {
      title: "Test 1",
      image: "/gallery/6.png",
    },
  ];

  return (
    <section id="galeri" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-md">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Gallery kegiatan-kegiatan PKBM Bina Generasi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71] ">
              Aktifitas Galeri
            </h2>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#024A71 #DFF2FE",
            }}
          >
            {galleries.map((item, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index ? "w-96" : "w-64"
                } h-96 group hover:border-4 hover:border-[#024A71]`}
                onClick={() =>
                  setSelectedImage(selectedImage === index ? null : index)
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            ← Geser untuk melihat lebih banyak →
          </p>
        </div>
      </div>
    </section>
  );
}
