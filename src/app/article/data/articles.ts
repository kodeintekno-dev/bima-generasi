// Article Type
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
}

export const articlesData: Article[] = [
  {
    id: 1,
    slug: "bimtek-kurikulum-merdeka",
    title:
      "PKBM Bina Generasi Menghadiri Bimtek Implementasi Kurikulum Merdeka",
    excerpt:
      "PKBM Bina Generasi menghadiri acara Bimbingan Teknis dan Implementasi Kurikulum Merdeka yang diselenggarakan oleh FKPKBM Kabupaten Lebak.",
    author: "Arif Rohman Hakim, S.M",
    date: "9 Februari 2024",
    imageUrl: "/article/bimtek-kurikulum-merdeka.jpg",
    category: "Berita",
  },
  {
    id: 2,
    slug: "peringatan-isra-miraj",
    title:
      "PKBM Bina Generasi Peringati Isra Mi'raj Bersama Mitra Pondok Pesantren",
    excerpt:
      "PKBM Bina Generasi menggelar peringatan Isra Mi'raj Nabi Muhammad SAW yang melibatkan mitra pondok pesantren serta warga belajar dari berbagai jenjang pendidikan.",
    author: "Firdaus",
    date: "06 Februari 2026",
    imageUrl: "/article/isra-miraj.jpg",
    category: "Kegiatan",
  },
  {
    id: 3,
    slug: "evaluasi-rutin-bulanan",
    title:
      "PKBM Bina Generasi Gelar Evaluasi Rutin Bulanan, Fokus Tingkatkan Mutu dan Pembelajaran Layanan Fleksibel",
    excerpt:
      "PKBM Bina Generasi mengadakan evaluasi rutin bulanan sebagai upaya meningkatkan mutu dan kualitas layanan pendidikan nonformal dengan pendekatan pembelajaran yang fleksibel.",
    author: "Firdaus",
    date: "31 Januari 2026",
    imageUrl: "/article/evaluasi-bulanan.png",
    category: "Berita",
  },
  {
    id: 4,
    slug: "kelas-berbasis-pesantren",
    title:
      "Pembelajaran di PKBM Bina Generasi Terapkan Kelas Berbasis Pesantren dengan Sistem Tutor Visit",
    excerpt:
      "PKBM Bina Generasi mengembangkan program kelas berbasis pesantren dengan sistem kunjungan tutor bulanan yang terintegrasi dengan kegiatan kepesantrenan.",
    author: "Yeyen",
    date: "20 Oktober 2025",
    imageUrl: "/article/kelas-berbasis-pesantren.jpg",
    category: "Program",
  },
  {
    id: 5,
    slug: "cerdaskan-masyarakat-putus-sekolah",
    title:
      "PKBM Bina Generasi Turut Sumbang Cerdaskan Masyarakat Putus Sekolah",
    excerpt:
      "PKBM Bina Generasi bekerja sama dengan Pondok Pesantren Darul Ibtida dan Tokoh Pemuda melaksanakan pertemuan dalam rangka mengentaskan masyarakat putus sekolah.",
    author: "Arif Rohman Hakim, S.M",
    date: "11 Oktober 2023",
    imageUrl: "/article/cerdaskan-masyarakat-putus-sekolah.jpg",
    category: "Berita",
  },
  {
    id: 6,
    slug: "visitasi-akreditasi",
    title: "Sebagai Refleksi, PKBM Bina Generasi Jalani Visitasi Akreditasi",
    excerpt:
      "PKBM Bina Generasi menjalani proses akreditasi oleh Badan Akreditasi Nasional sebagai bagian dari upaya peningkatan mutu pendidikan di lembaga masyarakat.",
    author: "Muhamad Agus Salim",
    date: "5 November 2025",
    imageUrl: "/article/visitasi-akreditasi.png",
    category: "Berita",
  },
  {
    id: 7,
    slug: "buka-akses-pendidikan-kesetaraan",
    title:
      "Tak Ada Alasan Putus Sekolah, PKBM Bina Generasi Buka Akses Pendidikan Kesetaraan",
    excerpt:
      "PKBM Bina Generasi resmi membuka Sistem Penerimaan Murid Baru Tahun Ajaran 2026/2027 dengan program gratis untuk anak putus sekolah usia maksimal 21 tahun.",
    author: "Redaksi",
    date: "6 Januari 2026",
    imageUrl: "/article/buka-akses-pendidikan-kesetaraan.jpeg",
    category: "Pengumuman",
  },
  {
    id: 8,
    slug: "teknologi-pembelajaran-modern-3",
    title: "Teknologi dalam Pembelajaran Modern",
    excerpt:
      "Mengintegrasikan teknologi dalam pembelajaran membantu siswa lebih siap menghadapi tantangan dunia yang terus berkembang pesat.",
    author: "linonel messi",
    date: "3 Januari 2026",
    imageUrl: "/gallery/2.png",
    category: "Teknologi",
  },
  {
    id: 9,
    slug: "teknologi-pembelajaran-modern-4",
    title: "Teknologi dalam Pembelajaran Modern",
    excerpt:
      "Mengintegrasikan teknologi dalam pembelajaran membantu siswa lebih siap menghadapi tantangan dunia yang terus berkembang pesat.",
    author: "Cristiano Ronaldo",
    date: "3 Januari 2026",
    imageUrl: "/gallery/3.png",
    category: "Teknologi",
  },
];
