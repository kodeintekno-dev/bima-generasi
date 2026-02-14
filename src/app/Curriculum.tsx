export default function Curriculum() {
  const cards = [
    {
      letter: "A",
      bgColor: "#FF0000",
      title: "PAKET A",
      description:
        "Paket A merupakan jenjang pertama dalam program Kesetaraan dan setara dengan pendidikan dasar (SD). Dalam program ini, peserta akan belajar materi-materi yang sejalan dengan kurikulum pendidikan nasional untuk SD. Materi pelajaran mencakup berbagai mata pelajaran penting seperti Matematika, Bahasa Indonesia, Ilmu Pengetahuan Alam, dan lain sebagainya. Setiap mata pelajaran dirancang untuk membantu peserta memahami konsep dasar dan membangun fondasi pendidikan yang kokoh.",
    },
    {
      letter: "B",
      bgColor: "#003D6E",
      title: "PAKET B",
      description:
        "Paket B merupakan jenjang kedua dalam program Kesetaraan dan setara dengan pendidikan menengah pertama (SMP). Dalam program ini, peserta akan belajar materi-materi yang sejalan dengan kurikulum pendidikan nasional untuk SMP. Materi pelajaran mencakup berbagai mata pelajaran penting seperti Matematika, Bahasa Indonesia, Ilmu Pengetahuan Alam, Bahasa Inggris, dan lain sebagainya. Setiap mata pelajaran dirancang untuk memperdalam pengetahuan dan keterampilan peserta.",
    },
    {
      letter: "C",
      bgColor: "#808080",
      title: "PAKET C",
      description:
        "Paket C adalah jenjang tertinggi dalam program Kesetaraan dan setara dengan pendidikan menengah atas (SMA). Dalam program ini, peserta akan belajar materi-materi yang sejalan dengan kurikulum pendidikan nasional untuk SMA. Mata pelajaran yang diajarkan mencakup berbagai bidang seperti Matematika, Bahasa Indonesia, Bahasa Inggris, Ilmu Pengetahuan Alam, Ilmu Pengetahuan Sosial, dan lain sebagainya. Setiap mata pelajaran dirancang untuk memberikan pemahaman mendalam dalam bidangnya.",
    },
  ];

  return (
    <section id="kurikulum" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71]">
              Kurikulum
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Gambaran singkat kurikulum belajar yang membentuk karakter,
              pengetahuan, dan keterampilan siswa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#DFF2FE] rounded-lg p-8">
              <div className="mb-6 flex items-center justify-center">
                <div className="inline-flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    {card.letter}
                  </div>
                  <div className="w-8 h-8 bg-gray-600 -ml-2 rounded"></div>
                </div>
              </div>

              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex items-center justify-center"
                style={{ color: card.bgColor }}
              >
                {card.title}
              </h3>

              <p className=" leading-relaxed text-gray-600 text-sm md:text-base text-justify">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
