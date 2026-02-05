import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full mt-4 z-50">
      <div className="bg-white container mx-auto shadow-md rounded-lg">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-semibold text-sky-600 text-lg">
                Wakwaw School
              </span>
            </Link>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
              <li>
                <Link
                  href="#program"
                  className="hover:text-sky-600 cursor-pointer"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="#kurikulum"
                  className="hover:text-sky-600 cursor-pointer"
                >
                  Kurikulum
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="hover:text-sky-600 cursor-pointer"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonial"
                  className="hover:text-sky-600 cursor-pointer"
                >
                  Testimonial
                </Link>
              </li>
            </ul>

            {/* Button */}
            <button className="bg-[#00A89F] hover:bg-[#00a8a0b4] text-white px-5 py-2 rounded-md font-medium transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
