import { CheckCircle } from "lucide-react";

export default function VisiMisi() {
  return (
    <section id="vision-mission" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71]">
            Visi Dan Misi
          </h2>
          <p className="text-gray-600 text-base md:text-xl max-w-md mt-4 md:mt-0">
            Visi dan Misi kami agar semua program yang kami buat berjalan
            dengan sempurna
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Visi */}
          <div className="bg-[#DFF2FE] rounded-xl px-10 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#024A71] flex items-center justify-center mb-4">
              <CheckCircle className="text-white" size={26} />
            </div>

            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#024A71] mb-3">
              Visi Kami
            </h3>

            <p className="text-gray-600 text-sm md:text-base max-w-sm">
              Integer imperdiet nulla non urna volutpat, at aliquam felis
              porttitor.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-[#DFF2FE] rounded-xl px-10 py-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#024A71] flex items-center justify-center">
                <CheckCircle className="text-white" size={22} />
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#024A71]">
                Misi Kami
              </h3>
            </div>

            <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
              <li>
                Mengembangkan nilai-nilai religius dan budi pekerti sehingga
                membentuk pribadi yang beriman dan berakhlak mulia.
              </li>
              <li>
                Menyelenggarakan pembelajaran berkualitas untuk kreativitas dan literasi.
              </li>
              <li>
                Menanamkan sikap kerja keras, pantang menyerah, dan percaya diri.
              </li>
              <li>
                Mengembangkan toleransi, tolong menolong, dan gotong royong.
              </li>
              <li>
                Menyediakan pendidikan dan tenaga kependidikan sesuai kebutuhan.
              </li>
              <li>
                Menjalin kemitraan dengan berbagai instansi.
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
