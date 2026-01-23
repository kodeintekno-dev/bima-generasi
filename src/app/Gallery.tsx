/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleries = [
    {
      title: 'Ngaji',
      image: 'https://i.pinimg.com/736x/a9/2a/23/a92a23ef51787fd9536a0995149144a0.jpg'
    },
    {
      title: 'Belajar',
      image: 'https://i.pinimg.com/736x/be/0d/98/be0d981b6c0e0eeca290dd6f0b96089b.jpg'
    },
    {
      title: 'Olahraga',
      image: 'https://i.pinimg.com/1200x/a5/42/18/a5421878aeafba9a5e93e0e0f934c2da.jpg'
    },
    {
      title: 'kegiatan',
      image: 'https://i.pinimg.com/1200x/5b/a3/a3/5ba3a3cdfb97c5257f9fc2244486f1ef.jpg'
    },
    {
      title: 'olimpiade tingkat nasional',
      image: 'https://i.pinimg.com/736x/01/61/6b/01616b7daa1d2ef8846022bffc253d68.jpg'
    },
    {
      title: 'test 1',
      image: 'https://i.pinimg.com/1200x/d4/65/c5/d465c59541afb9595f27bedaaaff03da.jpg'
    },
    {
      title: 'test 323212312',
      image: 'https://i.pinimg.com/736x/c1/ca/d1/c1cad18ed049c479da78aa17b535c115.jpg'
    }
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71] ">Aktifitas Galeri</h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Gallery kegiatan-kegiatan PKBM Bina Generasi.
            </p>
          </div>
        </div>

        {/* Gallery Grid with Horizontal Scroll */}
        <div className="relative">
          <div 
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#024A71 #DFF2FE'
            }}
          >
            {galleries.map((item, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index ? 'w-96' : 'w-64'
                } h-96 group hover:border-4 hover:border-[#024A71]`}
                onClick={() => setSelectedImage(selectedImage === index ? null : index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">← Geser untuk melihat lebih banyak →</p>
        </div>
      </div>
    </div>
  );
}