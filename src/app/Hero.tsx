"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/hero/1.png", "/hero/2.png", "/hero/3.png"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id="hero"
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
    >
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
        }}
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,74,113,1) 100%)",
        }}
      />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mb-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-wider">
          BERSAMA
          <br />
          <span className="text-[#DFF2FE]">PKBM BINA GENERASI</span>
          <br />
          MENUJU INDONESIA EMAS
        </h1>

        <div className="flex gap-4 justify-center items-center mt-6">
          <button className="bg-[#00A89F] hover:bg-[#00a8a0b4] text-white font-semibold py-2 px-4 rounded-md text-base transition-colors duration-300">
            Apply now
          </button>
          <button className="border-2 border-[#E71F69] text-[#E71F69] hover:bg-[#E71F69] hover:text-white font-semibold py-2 px-4 text-base rounded-md transition-all duration-300">
            About us
          </button>
        </div>
      </div>
    </main>
  );
}
