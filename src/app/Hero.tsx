import React from "react";

export default function Hero() {
  return (
    <main id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center "
        style={{
          backgroundImage: "url('/img/hero.png')",
        }}
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,74,113,1) 100%)`,
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
          <button className="bg-[#00A89F] hover:bg-[#00a8a0b4] text-white font-semibold py-2 px-4  rounded-md text-base transition-colors duration-300 ">
            Apply now
          </button>
          <button className="border-2 border-[#E71F69] text-[#E71F69] hover:bg-[#E71F69] hover:text-white font-semibold py-2 px-4  text-base rounded-md transition-all duration-300 ">
            About us
          </button>
        </div>
      </div>
    </main>
  );
}
