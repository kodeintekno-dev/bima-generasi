import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#024A71]">
      {/* our information */}
      <div className="container mx-auto flex justify-between py-28">
        <div className="flex flex-col gap-8">
          <h6 className="text-white text-xl font-medium">Our Information</h6>
          <div className="text-white/75 flex flex-col gap-2">
            <p>📍 Haurgajrug, Kec. Cipanas, Kabupaten Lebak, Banten 42372</p>
            <p>📞 +14345822000</p>
            <p>🌐 www.liberty.edu</p>
          </div>
        </div>
        <div className="flex gap-80 items-start">
          {/* section */}
          <div className="flex flex-col gap-8 justify-center items-center">
            <h6 className="text-white text-xl font-medium">Sections</h6>
            <div className="flex flex-col gap-2">
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
                  className="text-white/75  hover:text-white transition-colors duration-200 "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* pages */}
          <div className="flex flex-col gap-8 justify-center items-center">
            <h6 className="text-white text-xl font-medium">Pages</h6>
            <div className="flex flex-col gap-2">
              {["Home", "Profile", "Program", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-white/75  hover:text-white transition-colors duration-200 "
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F9FF]">
        <div className="container mx-auto flex">
          Copyright © 2025 PKBM Bina Generasi. All Rights Reserved.{" "}
          <ul>
            <li>fffdsfsf</li>
            <li>f</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
