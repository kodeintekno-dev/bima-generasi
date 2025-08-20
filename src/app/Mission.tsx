export default function Mission() {
  return (
    <div>
      <main className="min-h-screen bg-[#f2f9ff] text-[#1a1a1a] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-[#0f62a0] mb-10">
              Visi Dan Misi
            </h1>
            <p className="max-w-md">
              Visi dan Misi kami agar semua program yang kami buat berjalan
              dengan sempurna
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-[#d7ebfb] rounded-xl px-18 py-44 text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-[#0f62a0] text-4xl font-bold mb-2">
                  🎯 Visi Kami
                </div>
                <p className="text-gray-700 text-3xl">
                  Integer imperdiet nulla non urna volutpat, at aliquam felis
                  porttitor.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[#d7ebfb] rounded-xl px-18 py-10">
              <div className="text-[#0f62a0] text-4xl font-bold mb-4">
                🎯 Misi Kami
              </div>
              <p className="mb-2 text-xl text-gray-800">
                Misi SLB Negeri 12 Jakarta adalah sebagai berikut:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-xl leading-6 text-gray-800">
                <li>
                  Mengembangkan nilai-nilai religius dan budi pekerti sehingga
                  membentuk pribadi yang beriman dan berakhlak mulia.
                </li>
                <li>
                  Menyelenggarakan pembelajaran yang berkualitas sehingga mampu
                  mengembangkan kreativitas dan penguasaan literasi dan numerasi
                  yang mendukung keberadaan peserta didik sebagai pembelajar
                  sepanjang
                </li>
                <li>
                  Menanamkan sikap kerja keras, pantang menyerah sehingga
                  membentuk pribadi yang percaya diri, mandiri dan
                </li>
                <li>
                  Mengembangkan sikap toleransi, tolong menolong dan bergotong
                  royong tanpa membedakan agama, ras dan suku
                </li>
                <li>
                  Menyediakan Pendidik dan Tenaga Kependidikan sesuai dengan
                  kebutuhan sekolah baik secara kuantitatif maupun kualitatif
                </li>
                <li>
                  Menyelenggarakan kemitraan dengan instansi untuk peningkatan
                  layanan
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
