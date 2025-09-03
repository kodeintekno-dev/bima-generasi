/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About() {
  return (
    <section className="bg-[#024A71] py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-7 md:gap-14 lg:gap-28 px-6 md:px-0">
        {/* Left */}
        <div className="text-white sm:px-5 md:px-0 md:w-1/2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Tentang Kami
          </h2>
          <p className="text-base md:text-xl font-light leading-relaxed">
            At Wakwaw School, we believe that education should be an inspiring
            and empowering experience. The moment you step through our doors,
            you’ll sense something different – a vibrant atmosphere filled with
            energy, respect, and belonging. Our dedicated team of educators,
            leaders, and staff work hand in hand to create an environment where
            every student feels seen, supported, and motivated to reach their
            full potential. At Wakwaw School, learning goes beyond the classroom
            – it becomes a life-shaping adventure. We don’t just teach; we
            nurture dreams and shape futures. <br />
            <strong>Amira Santoso, M.Ed. Head of School</strong>
          </p>
        </div>

        {/* Right */}
        <div className="md:w-1/2">
          <img
            src="/img/about.png"
            alt="Tentang Kami"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    
  );
}
