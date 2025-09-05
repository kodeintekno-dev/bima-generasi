import Carousel from "@/components/Carousel";

export const Kurikulum = () => {
  return (
    <main className="min-h-screen bg-[#f2f9ff] text-[#1a1a1a] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f62a0]">
            Kurikulum
          </h1>
          <p className="text-left sm:tex-right max-w-md text-base sm:text-lg text-gray-700">
            Gambaran singkat program belajar yang membentuk karakter,
            pengetahuan, dan keterampilan siswa.
          </p>
        </div>
      </div>
      <Carousel/>
    </main>
  );
};