"use client";

  import { useState } from "react";
  import { Play, X, MessageSquareQuote } from "lucide-react";

  export default function TestimonialsSection() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const testimonials = [
      {
        title: 'Sarojah "Alumni Paket C PKBM BIMA GENERASI"',
        videoId: "1MEl3uM8d22gsfe3JmOUhoSYgMFz4Lv4e",
        thumbnail: "/testimonials/1.png",
      },
      {
        title: 'Siswa-siswa yang telahh lulus',
        videoId: "1E8Q8s3AltVmVl_HkXyoTboBm0Tpa45ac",
        thumbnail: "/testimonials/2.png",
      },
      {
        title: 'Mohammad Rizky "Alumni Paket C PKBM BIMA GENERASI"',
        videoId: "1Kw2bow_gVOQzlOpBblsYYYeUegl8_EE1",
        thumbnail: "/testimonials/3.png",
      },
      {
        title: 'Abdul "Alumni PKBM BIMA GENERASI"',
        videoId: "1PMtlk-Si5rvddncT6R00MMQ2VORsorEn",
        thumbnail: "/testimonials/4.png",
      },
      {
        title: 'Abdul "Alumni PKBM BIMA GENERASI"',
        videoId: "1Hk4kxPHDCLiJ2rm4Sh5MUBOMvIaimVVN",
        thumbnail: "/testimonials/5.png",
      },
    ];

    const getEmbedUrl = (videoId: string) => {
      return `https://drive.google.com/file/d/${videoId}/preview`;
    };

  return (
    <section id="testimoni" className="bg-[#024A71] py-12 lg:py-16">
      <div className="container mx-auto px-6 md:px-0">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquareQuote className="w-8 h-8 text-white" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              Testimoni
            </h2>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: " #a0a0a0 #DFF2FE",
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  expandedCard === index ? "w-md" : "w-96"
                } h-80 group bg-gray-800`}
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(index);
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-lg"
                >
                  <Play
                    className="w-8 h-8 text-red-500 ml-1"
                    fill="currentColor"
                  />
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video click */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close*/}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Video Player */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={getEmbedUrl(testimonials[selectedVideo].videoId)}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
