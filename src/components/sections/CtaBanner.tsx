"use client";

import { CARS_DATA } from "@/data/fleet";
import { CarSpec } from "@/types";

interface CtaBannerProps {
  onSelectCar: (car: CarSpec) => void;
}

export function CtaBanner({ onSelectCar }: CtaBannerProps) {
  const quickCars = CARS_DATA.filter((c) => !c.featured).slice(0, 4);

  return (
    <section className="w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-3xl bg-primary text-on-primary p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 w-full">
          <div className="w-full lg:max-w-xl flex flex-col items-start flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm mb-4">
              <span className="material-symbols-outlined text-amber-300 text-[18px]">
                local_activity
              </span>
              <span className="font-label-md text-label-md text-on-primary font-bold">
                Diskon Pemesanan Perdana Rp 50.000
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl font-black text-on-primary leading-tight">
              Siap Berangkat? Amankan Mobil Pilihanmu Sekarang!
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mt-4">
              Unit favorit sering cepat habis terutama saat akhir pekan atau
              musim liburan. Booking sekarang tanpa antre dan nikmati garansi
              kendaraan tiba tepat waktu.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="px-8 py-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-extrabold flex items-center gap-3 shadow-lg shadow-secondary-fixed/30 hover:bg-secondary-fixed-dim hover:scale-105 active:scale-95 transition-all"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[22px]">
                  chat
                </span>
                <span>Pesan Cepat via WhatsApp</span>
              </a>
              <a
                className="px-7 py-4 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg font-bold backdrop-blur-sm transition-colors"
                href="#paket-harga"
              >
                Lihat Semua Promo
              </a>
            </div>
            <p className="font-label-sm text-label-sm text-on-primary-container mt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-300 text-[16px]">
                bolt
              </span>
              Konfirmasi otomatis dikirim langsung ke WhatsApp kamu.
            </p>
          </div>

          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickCars.map((car) => (
              <div
                key={car.key}
                className="p-4 bg-surface-container-lowest rounded-2xl shadow-sm flex items-center justify-between gap-2.5 hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="font-headline-sm text-[15px] leading-tight font-bold text-on-surface whitespace-nowrap">
                      {car.shortName}
                    </h4>
                    <span
                      className={`px-1.5 py-0.5 rounded font-label-sm text-[11px] whitespace-nowrap flex-shrink-0 ${
                        car.colorTagHighlight
                          ? "bg-primary-fixed text-primary font-bold"
                          : "bg-surface-container-high text-on-surface font-semibold"
                      }`}
                    >
                      {car.colorTag === "+ Driver" ? "+Sopir" : car.colorTag}
                    </span>
                  </div>
                  <p className="font-body-sm text-[11.5px] text-on-surface-variant mt-1 whitespace-nowrap">
                    {car.category === "Van Wisata"
                      ? "15 Kursi - Wisata"
                      : car.category === "City Car"
                        ? "5 Kursi - City Car"
                        : "7 Kursi - Nyaman"}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <span className="font-headline-sm text-[15px] font-extrabold text-primary tabular-nums whitespace-nowrap">
                      {car.shortPrice}
                      <span className="font-label-sm text-[11px] text-on-surface-variant font-normal">
                        /hr
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCar(car)}
                      className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-sm text-[11px] font-bold text-on-surface whitespace-nowrap flex-shrink-0 transition-colors"
                    >
                      Pilih
                    </button>
                  </div>
                </div>
                <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-xl flex items-center justify-center p-0.5 flex-shrink-0 overflow-hidden">
                  <img
                    alt={car.imageAlt}
                    className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform"
                    src={car.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
