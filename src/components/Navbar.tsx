/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { label: "Program", id: "program" },
    { label: "Kurikulum", id: "kurikulum" },
    { label: "Testimoni", id: "testimoni" },
  ];

  const handleSectionClick = (id: string) => {
    setIsOpen(false);

    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full mt-4 z-50">
      <div className="bg-white container mx-auto shadow-md rounded-lg">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="Logo PKBM BIMA"
                width={40}
                height={20}
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
              {sections.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSectionClick(item.id)}
                    className="hover:text-sky-600 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/article"
                  className="hover:text-sky-600 cursor-pointer transition-colors duration-200"
                >
                  Artikel
                </Link>
              </li>
            </ul>

            <button className="hidden lg:block bg-[#00A89F] hover:bg-[#00a8a0b4] text-white px-5 py-2 rounded-md font-medium transition">
              Daftar Sekarang
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-600" />
              ) : (
                <Menu size={24} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 px-6 bg-white rounded-b-lg">
            <ul className="space-y-4">
              {sections.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSectionClick(item.id)}
                    className="block w-full text-left text-gray-600 hover:text-sky-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/artikel"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-sky-600 font-medium transition-colors duration-200 py-2"
                >
                  Artikel
                </Link>
              </li>
              <li className="pt-2">
                <button className="w-full bg-[#00A89F] hover:bg-[#00a8a0b4] text-white px-5 py-3 rounded-md font-medium transition">
                  Daftar Sekarang
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
