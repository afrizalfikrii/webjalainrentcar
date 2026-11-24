"use client";

import { useState } from "react";

type DurationKey = "daily" | "weekly" | "monthly";

const PRICING_TIERS: Record<
  DurationKey,
  { selfDrive: string; selfUnit: string; driver: string; driverUnit: string }
> = {
  daily: {
    selfDrive: "Rp 275.000",
    selfUnit: "/ 24 Jam",
    driver: "Rp 500.000",
    driverUnit: "/ 12 Jam",
  },
  weekly: {
    selfDrive: "Rp 1.730.000",
    selfUnit: "/ 7 Hari (Hemat 10%)",
    driver: "Rp 3.150.000",
    driverUnit: "/ 7 Hari",
  },
  monthly: {
    selfDrive: "Rp 5.900.000",
    selfUnit: "/ Bulan",
    driver: "Rp 10.500.000",
    driverUnit: "/ Bulan",
  },
};

export function PricingSection() {
  const [duration, setDuration] = useState<DurationKey>("daily");
  const current = PRICING_TIERS[duration];

  return (
    <section id="paket-harga" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Pilihan Paket Nyaman
          </span>
          <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
            Paket Sewa Transparan Sesuai Rencana
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Pilih tingkat kebebasan perjalanan Anda: kemudi sendiri dengan
            penuh privasi, atau duduk santai ditemani sopir profesional.
          </p>

          <div className="grid grid-cols-3 sm:inline-flex gap-1 p-1.5 bg-surface-container-low rounded-full mt-6 shadow-inner w-full sm:w-auto">
            {(
              [
                {
                  key: "daily",
                  mobileLabel: "Harian",
                  label: "Sewa Harian (12/24 Jam)",
                },
                {
                  key: "weekly",
                  mobileLabel: "Mingguan",
                  label: "Paket Mingguan (Diskon 10%)",
                },
                {
                  key: "monthly",
                  mobileLabel: "Bulanan",
                  label: "Bulanan Korporat",
                },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setDuration(tab.key)}
                className={
                  duration === tab.key
                    ? "px-2 sm:px-5 py-2 rounded-full font-label-md text-[12px] sm:text-label-md font-bold bg-surface-container-lowest text-primary shadow-sm transition-all whitespace-nowrap text-center"
                    : "px-2 sm:px-5 py-2 rounded-full font-label-md text-[12px] sm:text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap text-center"
                }
              >
                <span className="sm:hidden">{tab.mobileLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="p-8 bg-surface-container-lowest rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">
                  Privasi Maksimal
                </span>
                <span className="material-symbols-outlined text-primary text-[28px]">
                  key
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md font-black text-on-surface">
                Paket Lepas Kunci (Self-Drive)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Bebas keliling kota sesuka hati bersama keluarga atau sahabat
                tanpa ada orang luar di kabin mobil.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-surface-container-low/60">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  Mulai dari
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-xl text-headline-xl font-black text-on-surface tabular-nums">
                    {current.selfDrive}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {current.selfUnit}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-3 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Durasi full 24 jam pemakaian
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Kilometer unlimited dalam provinsi
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Gratis antar jemput di area kota (Solo/Jogja/Semarang)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Termasuk asuransi perlindungan standar TLO
                </li>
                <li className="flex items-center gap-2.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    info
                  </span>
                  BBM ditanggung penyewa (Same to Same)
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20JALAN.IN%2C%20saya%20mau%20tanya%20Paket%20Lepas%20Kunci"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-full bg-surface-container-low hover:bg-primary hover:text-on-primary font-label-lg text-label-lg font-bold text-on-surface transition-all text-center"
            >
              Pilih Lepas Kunci
            </a>
          </div>

          <div className="p-8 bg-surface-container-lowest rounded-3xl shadow-xl shadow-surface-variant/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-extrabold px-6 py-1.5 rounded-bl-2xl">
              PALING PRAKTIS &amp; SANTAI
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">
                  All-In Service
                </span>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[28px]">
                  person_pin_circle
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md font-black text-on-surface">
                Paket Lengkap Dengan Sopir
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Duduk manis dan nikmati keindahan panorama wisata tanpa lelah
                menghadapi kemacetan dan cari parkir.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-surface-container-low/60">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  Mulai dari
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-xl text-headline-xl font-black text-primary tabular-nums">
                    {current.driver}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {current.driverUnit}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-3 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Sudah termasuk jasa driver ramah &amp; profesional
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Bebas resiko lecet &amp; tanggung jawab klaim kecelakaan
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Opsi paket All-In (Termasuk BBM, Tol, Parkir, &amp; Makan
                  Driver)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Driver siap merangkap tour guide lokal &amp; fotografer
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  Gratis overtime 30 menit jika macet lalu lintas
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20JALAN.IN%2C%20saya%20mau%20pesan%20Paket%20Dengan%20Sopir"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-extrabold shadow-md shadow-secondary-fixed/40 hover:bg-secondary-fixed-dim hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              Pesan Paket Sopir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
