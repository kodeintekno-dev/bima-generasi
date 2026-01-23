export default function Program() {
  const cards = [
    {
      letter: "A",
      bgColor: "#FF0000",
      title: "PAKET A",
      description:
        "Belajar dirumah dengan Bimbingan orang tua dan tutor Kunjungan terdaftar di Dapodik dan mengikuti Kurikulum Merdeka yang dikembangkan oleh lembaga dan tetap mengembangkan pemberdayaan dalam mewujudkan Projek Penguatan profil Pelajar Pancasila",
    },
    {
      letter: "B",
      bgColor: "#003D6E",
      title: "PAKET B",
      description:
        "Belajar dirumah dengan Bimbingan orang tua dan tutor Kunjungan terdaftar di Dapodik dan mengikuti Kurikulum Merdeka yang dikembangkan oleh lembaga dan tetap mengembangkan pemberdayaan dalam mewujudkan Projek Penguatan profil Pelajar Pancasila",
    },
    {
      letter: "C",
      bgColor: "#808080",
      title: "PAKET C",
      description:
        "Belajar dirumah dengan Bimbingan orang tua dan tutor Kunjungan terdaftar di Dapodik dan mengikuti Kurikulum Merdeka yang dikembangkan oleh lembaga dan tetap mengembangkan pemberdayaan dalam mewujudkan Projek Penguatan profil Pelajar Pancasila",
    },
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Gambaran singkat program belajar yang membentuk karakter,
              pengetahuan, dan keterampilan siswa.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71]">
              Kurikulum
            </h2>
          </div>
        </div>

        {/* Cards */}
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

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex items-center justify-center" style={{ color: card.bgColor }}>
                {card.title}
              </h3>

              {/* Description */}
              <p className=" leading-relaxed text-gray-600 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
