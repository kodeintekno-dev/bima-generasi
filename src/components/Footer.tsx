import React from "react";
import Instagram from "../../public/img/instagram.png";
import Tiktok from "../../public/img/tiktok.png";
import Youtube from "../../public/img/youtube.png";
import Facebook from "../../public/img/facebook.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#024A71]">
      {/* our information */}
      <div className="container mx-auto flex flex-col md:flex-row  justify-between gap-12 py-16 px-6">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h6 className="text-white text-xl font-medium ">Our Information</h6>
          <div className="text-white/75 flex flex-col gap-2 text-sm md:text-base text-center  md:text-start">
            <p>📍 Haurgajrug, Kec. Cipanas, Kabupaten Lebak, Banten 42372</p>
            <p>📞 +14345822000</p>
            <p>🌐 www.liberty.edu</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-28 ">
          {/* section */}
          <div className="flex flex-col gap-4">
            <h6 className="text-white text-xl font-medium text-center">Sections</h6>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              {[
                "Hero",
                "About Us",
                "Featured Program",
                "Gallery Activity",
                "Testimonials",
                "Contact & Location",
              ].map((item) => (
                <button
                  key={item}
                  className="text-white/75 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* pages */}
          <div className="flex flex-col gap-4 ">
            <h6 className="text-white text-xl font-medium">Pages</h6>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              {["Home", "Profile", "Program", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[#F0F9FF]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-6 px-6">
          <p className="text-center md:text-left text-gray-600 text-sm">
            Copyright © 2025 PKBM Bina Generasi. All Rights Reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex justify-center gap-3 text-gray-500 text-sm items-center">
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
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="Instagram" width={28} height={28} />
              </a>
              <a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tiktok} alt="Tiktok" width={28} height={28} />
              </a>
              <a
                href="https://youtube.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Youtube} alt="Youtube" width={28} height={28} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Facebook} alt="Facebook" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
