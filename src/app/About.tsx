/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About() {
  return (
    <section id="tentang-kami" className="bg-[#024A71] py-12 lg:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-7 md:gap-14 lg:gap-28 px-6 ">
        {/* Left */}
        <div className="text-white sm:px-5 md:px-0 md:w-1/2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Tentang Kami
          </h2>
          <div className="text-base md:text-xl font-light leading-relaxed gap-3 flex flex-col">
            <p>
              Pusat kegiatan belajar masyarakat (PKBM) Bina Generasi yang
              berlokasi di Jl. Raya Cipanas Haurgajrug Kab. Lebak, Banten
              merupakan lembaga pendidikan non formal yang bertujuan
              mencerdaskan masyarakat sasarannya adalah warga yang putus sekolah
              dan siswa terkena Drop Out.
            </p>
            <p>
              “Alhamdulilah, PKBM yang kami kelola sudah sudan berdikari
              sendiri, kiprah kami dalam mencerdaskan kehidupan masyarakat
              sampai sekarang telah meluluskan banyak warga belajar, sehingga
              memiliki ijasah paket A setara SD, paket B setara SMP, dan paket C
              setara dengan SMA, ungkapnya, Rabu (12/09/2023).
            </p>
            <p className="font-semibold">Ketua Pengelola PKBM Bina Generasi Arif Rohman Hakim, S.M</p>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2">
          <img
            src="/img/about.jpg"
            alt="Tentang Kami"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
