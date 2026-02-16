import React from "react";
import Instagram from "../../public/img/instagram.png";
import Tiktok from "../../public/img/tiktok.png";
import Youtube from "../../public/img/youtube.png";
import Facebook from "../../public/img/facebook.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const sections = [
    { label: "Hero", id: "hero" },
    { label: "Tentang Kami", id: "tentang-kami" },
    { label: "Visi & Misi", id: "vision-mission " },
    { label: "Program", id: "program" },
    { label: "Kurikulum", id: "kurikulum" },
    { label: "Galeri", id: "galeri" },
    { label: "Testimoni", id: "testimoni" },
    { label: "Kontak & Lokasi", id: "kontak" },
  ];
  return (
    <footer className="bg-[#024A71]">
      {/* our information */}
      <div className="container mx-auto flex flex-col md:flex-row  justify-between gap-12 py-16 ">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h6 className="text-white text-xl font-medium ">Our Information</h6>
          <div className="text-white/75 flex flex-col gap-2 text-sm md:text-base text-center  md:text-start">
            <p>📍 Haurgajrug, Kec. Cipanas, Kabupaten Lebak, Banten 42372</p>
            <p>📞 +14345822000</p>
            <p>🌐 www.liberty.edu</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-0 md:w-1/3 items-center md:items-start justify-center md:justify-between">
          <div className="flex flex-col text-center gap-4">
            <h6 className="text-white text-xl font-medium">Sections</h6>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white/75 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* pages */}
          <div className="flex flex-col gap-4 text-center">
            <h6 className="text-white text-xl font-medium">Pages</h6>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <Link
                href="/"
                className="text-white/75 hover:text-white transition-colors duration-200"
              >
                Beranda
              </Link>

              <Link
                href="/article"
                className="text-white/75 hover:text-white transition-colors duration-200"
              >
                Artikel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[#F0F9FF]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          <p className="text-center md:text-left text-gray-600 text-sm">
            Copyright © 2025 PKBM Bina Generasi. All Rights Reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center  gap-6">
            <div className="flex justify-center gap-3 text-gray-500 text-sm items-center text-center">
              <a
                href="https://example.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms of Use
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="https://example.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Statement
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="https://example.com/social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Other Social Media Channels
              </a>
            </div>

            {/* social media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pkbmbinagenerasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="Instagram" width={36} height={36} />
              </a>
              <a
                href="https://www.tiktok.com/@pkbm.bina.generasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tiktok} alt="Tiktok" width={36} height={36} />
              </a>
              <a
                href="https://www.youtube.com/@PKBMBinaGenerasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Youtube} alt="Youtube" width={36} height={36} />
              </a>
              <a
                href="https://www.facebook.com/PKBMBinaPrestasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Facebook} alt="Facebook" width={36} height={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
