import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer
      id="kontak"
      className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.03)] pt-16 pb-12 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <BrandLogo />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Solusi rental mobil modern, mudah, dan transparan di Indonesia.
              Layanan lepas kunci maupun dengan pengemudi profesional
              berstandar kenyamanan tinggi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center text-on-surface transition-colors"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
              </a>
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center text-on-surface transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  photo_camera
                </span>
              </a>
              <a
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center text-on-surface transition-colors"
                href="mailto:halo@jalan.in"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">
              Navigasi Cepat
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#beranda"
              >
                Beranda
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#armada"
              >
                Pilihan Armada
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#cara-sewa"
              >
                Cara &amp; Ketentuan Sewa
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#paket-harga"
              >
                Paket &amp; Harga Hemat
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#testimoni"
              >
                Testimoni Pelanggan
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href="#faq"
              >
                Pusat Bantuan &amp; FAQ
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">
              Kota Layanan
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              {[
                "Solo (Surakarta)",
                "Yogyakarta",
                "Semarang",
                "Jabodetabek (Jakarta)",
              ].map((city) => (
                <span key={city} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    location_on
                  </span>
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">
              Kontak &amp; Operasional
            </span>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm">
              <div className="flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim mt-0.5">
                  support_agent
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    Hotline 24/7 (WhatsApp)
                  </p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    Jam Operasional
                  </p>
                  <p>Buka Setiap Hari (24 Jam Penuh)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-4 bg-surface-container-low rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Metode Pembayaran Resmi:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { name: "BCA", src: "/images/payments/bca.svg" },
                { name: "Mandiri", src: "/images/payments/mandiri.svg" },
                { name: "BRI", src: "/images/payments/bri.svg" },
                { name: "QRIS", src: "/images/payments/qris.svg" },
                { name: "GoPay", src: "/images/payments/gopay.svg" },
              ].map((method) => (
                <div
                  key={method.name}
                  className="h-8 px-3 rounded-lg bg-surface-container-lowest shadow-xs border border-surface-container-high/40 flex items-center justify-center"
                >
                  <img
                    src={method.src}
                    alt={`Logo ${method.name}`}
                    className="h-4 w-auto max-w-[72px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
            © 2025 PT Jalan Terus Indonesia (JALAN.IN). Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
