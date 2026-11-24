import { FaqItem, StepItem, TestimonialItem } from "@/types";

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda", id: "beranda" },
  { label: "Armada", href: "#armada", id: "armada" },
  { label: "Cara Sewa", href: "#cara-sewa", id: "cara-sewa" },
  { label: "Paket & Harga", href: "#paket-harga", id: "paket-harga" },
  { label: "Testimoni", href: "#testimoni", id: "testimoni" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export const STEPS_DATA: StepItem[] = [
  {
    number: "01",
    icon: "directions_car",
    title: "Pilih Mobil",
    description:
      "Telusuri armada sesuai kebutuhan kapasitas penumpang, jenis transmisi, dan medan destinasi wisata Anda.",
    badgeIcon: "check_circle",
    badgeText: "Foto unit sesuai kondisi asli",
    numberBgClass: "bg-primary text-on-primary",
    footerBgClass: "bg-surface-container-low/50 text-primary",
  },
  {
    number: "02",
    icon: "edit_calendar",
    title: "Atur Jadwal & Lokasi",
    description:
      "Tentukan tanggal pemakaian dan titik serah terima: gratis di bandara, stasiun kereta, atau hotel tempat kamu menginap.",
    badgeIcon: "check_circle",
    badgeText: "Antar tepat waktu 24 jam",
    numberBgClass: "bg-surface-container-high text-on-surface",
    footerBgClass: "bg-surface-container-low/50 text-primary",
  },
  {
    number: "03",
    icon: "qr_code_scanner",
    title: "Pembayaran Aman",
    description:
      "Konfirmasi pesanan dengan DP instan lewat QRIS resmi, transfer virtual account bank terpercaya, atau e-wallet.",
    badgeIcon: "verified",
    badgeText: "Resi digital & invoice resmi",
    numberBgClass: "bg-primary-fixed text-primary",
    footerBgClass: "bg-surface-container-low/50 text-on-surface",
  },
  {
    number: "04",
    icon: "key",
    title: "Mobil Langsung Jalan",
    description:
      "Kunci dan surat kendaraan diserahkan setelah cek fisik kilat. Siap meluncur menjelajahi kota dengan hati tenang!",
    badgeIcon: "sentiment_satisfied",
    badgeText: "Happy Trip & Explore!",
    numberBgClass: "bg-primary-fixed text-primary",
    footerBgClass: "bg-primary-fixed/60 text-primary font-bold",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    initials: "RK",
    name: "Rian Kusuma",
    role: "Keluarga Liburan — Yogyakarta",
    quote:
      "“Pelayanan JALAN.IN juara! Innova Reborn-nya wangi dan suspensinya empuk banget pas liburan keluarga di Jogja. Driver Mas Bagus juga super ramah dan tau rute jalan tikus anti macet.”",
    avatarBgClass: "bg-primary-fixed text-primary",
  },
  {
    initials: "DS",
    name: "Dini Saraswati",
    role: "Solo Traveler — Solo Surakarta",
    quote:
      "“Booking lewat WhatsApp cepet banget direspons dalam 3 menit. Calya-nya irit bensin banget buat keliling Solo-Karanganyar. Recommended buat yang mau road trip santai tanpa ribet!”",
    avatarBgClass: "bg-surface-container-high text-primary",
  },
  {
    initials: "HW",
    name: "Hendra Wijaya",
    role: "Business Trip — Semarang",
    quote:
      "“Unit diantar tepat waktu di Stasiun Tawang Semarang saat kereta saya tiba subuh. Kondisi Avanza sangat bersih dan bensin sudah terisi. Pasti sewa lagi untuk kunjungan kerja berikutnya!”",
    avatarBgClass: "bg-surface-container-high text-on-surface",
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "Apa saja syarat untuk sewa mobil lepas kunci?",
    answer:
      "Sangat mudah! Kamu hanya perlu menyiapkan foto e-KTP asli, foto SIM A yang masih berlaku, bukti reservasi tiket perjalanan/hotel, serta akun media sosial aktif (Instagram/LinkedIn). Proses verifikasi memakan waktu sekitar 5-10 menit via WhatsApp.",
  },
  {
    question: "Apakah mobil bisa diantar ke bandara atau stasiun?",
    answer:
      "Tentu saja! Kami menyediakan layanan antar-jemput unit secara gratis di seluruh Bandara Internasional (seperti YIA Kulon Progo, Solo Adi Soemarmo, Semarang Ahmad Yani) serta stasiun kereta api utama dalam radius operasional kota kami.",
  },
  {
    question: "Bagaimana kebijakan pengisian bahan bakar (BBM)?",
    answer:
      "Untuk paket lepas kunci, kami menerapkan kebijakan Same-to-Same. Jika indikator bensin berada di posisi 3/4 bar saat serah terima, unit dikembalikan dengan takaran yang sama. Sedangkan untuk Paket All-In dengan Sopir, bahan bakar sudah sepenuhnya kami tanggung.",
  },
  {
    question: "Bagaimana cara melakukan pembatalan atau ubah jadwal?",
    answer:
      "Kami sangat fleksibel. Perubahan jadwal (reschedule) dapat dilakukan bebas biaya hingga H-1 sebelum waktu pengambilan. Untuk pembatalan lebih dari 48 jam sebelum jadwal, DP dikembalikan utuh 100%.",
  },
];
