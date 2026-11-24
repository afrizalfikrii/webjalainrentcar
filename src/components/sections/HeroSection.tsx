"use client";

import { HERO_CAR_IMAGE } from "@/data/fleet";
import { BookingSearchState } from "@/types";

interface HeroSectionProps {
  bookingSearch: BookingSearchState;
  onBookingChange: (next: BookingSearchState) => void;
}

export function HeroSection({
  bookingSearch,
  onBookingChange,
}: HeroSectionProps) {
  const handleSearch = () => {
    const armadaEl = document.getElementById("armada");
    if (armadaEl) {
      armadaEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface pt-8 pb-16 lg:pb-24"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-fixed/30 rounded-full blur-[120px] pointer-events-none z-0" />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(#0284c7 1.25px, transparent 1.25px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm mb-6 hover:shadow-md transition-shadow">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="font-label-md text-label-md text-on-surface font-bold tracking-tight">
            ✨ Rental Mobil Zaman Now #TanpaRibet
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface font-black leading-tight sm:text-5xl lg:text-6xl">
            Sewa Mobil Jadi Gampang, <br className="hidden sm:inline" />
            <span className="relative inline-block text-primary">
              Tinggal Tap.
            </span>
          </h1>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Pilih mobil, atur jadwal, langsung jalan. Tanpa ribet, tanpa biaya
            tersembunyi. Tersedia lepas kunci maupun dengan sopir
            berpengalaman.
          </p>
        </div>

        <div className="w-full max-w-6xl bg-surface-container-lowest/90 backdrop-blur-xl p-3 sm:p-4 rounded-3xl shadow-xl shadow-surface-variant/40 mb-14 z-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.35fr] gap-3 items-stretch"
          >
            <div className="flex flex-col justify-center px-4 py-3 bg-surface-container-low/70 rounded-2xl hover:bg-surface-container-low transition-colors">
              <label
                htmlFor="hero-location"
                className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  location_on
                </span>
                Lokasi Jemput
              </label>
              <select
                id="hero-location"
                value={bookingSearch.location}
                onChange={(e) =>
                  onBookingChange({ ...bookingSearch, location: e.target.value })
                }
                className="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface font-bold mt-1 focus:outline-none cursor-pointer"
              >
                <option value="Solo (Surakarta)">Solo (Surakarta)</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Semarang">Semarang</option>
                <option value="Jabodetabek">Jabodetabek</option>
                <option value="Denpasar Bali">Denpasar Bali</option>
              </select>
            </div>

            <div className="flex flex-col justify-center px-4 py-3 bg-surface-container-low/70 rounded-2xl hover:bg-surface-container-low transition-colors">
              <label
                htmlFor="hero-start-date"
                className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  calendar_today
                </span>
                Tanggal Mulai
              </label>
              <input
                id="hero-start-date"
                className="w-full bg-transparent font-headline-sm text-[17px] leading-7 text-on-surface font-bold mt-1 focus:outline-none cursor-pointer text-left [&::-webkit-date-and-time-value]:text-left"
                type="date"
                value={bookingSearch.startDate}
                onChange={(e) =>
                  onBookingChange({
                    ...bookingSearch,
                    startDate: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex flex-col justify-center px-4 py-3 bg-surface-container-low/70 rounded-2xl hover:bg-surface-container-low transition-colors">
              <label
                htmlFor="hero-end-date"
                className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  event_repeat
                </span>
                Tanggal Selesai
              </label>
              <input
                id="hero-end-date"
                className="w-full bg-transparent font-headline-sm text-[17px] leading-7 text-on-surface font-bold mt-1 focus:outline-none cursor-pointer text-left [&::-webkit-date-and-time-value]:text-left"
                type="date"
                min={bookingSearch.startDate}
                value={bookingSearch.endDate}
                onChange={(e) =>
                  onBookingChange({ ...bookingSearch, endDate: e.target.value })
                }
              />
            </div>

            <div className="flex items-stretch gap-2.5">
              <div className="flex-1 flex flex-col justify-center px-4 py-3 bg-surface-container-low/70 rounded-2xl hover:bg-surface-container-low transition-colors">
                <label
                  htmlFor="hero-service"
                  className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    directions_car
                  </span>
                  Layanan
                </label>
                <select
                  id="hero-service"
                  value={bookingSearch.serviceType}
                  onChange={(e) =>
                    onBookingChange({
                      ...bookingSearch,
                      serviceType: e.target.value,
                    })
                  }
                  className="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface font-bold mt-1 focus:outline-none cursor-pointer"
                >
                  <option value="Lepas Kunci">Lepas Kunci</option>
                  <option value="+ Sopir Ramah">+ Sopir Ramah</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="px-6 rounded-2xl bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-secondary-fixed/40 hover:bg-secondary-fixed-dim hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap flex-shrink-0"
                type="button"
              >
                <span>Cari</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="hidden sm:flex absolute left-4 top-12 z-20 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-surface-container-high/50 items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-on-surface font-extrabold">
              ⭐
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface font-bold">
                4.9 / 5.0
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                12.000+ Tamu Bahagia
              </p>
            </div>
          </div>

          <div className="hidden sm:flex absolute right-6 top-6 z-20 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-surface-container-high/50 items-center gap-3 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
              <span className="material-symbols-outlined text-[20px]">
                verified_user
              </span>
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface font-bold">
                Asuransi Lengkap
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Perlindungan All-Risk
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-surface-container-lowest/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-surface-container-high/50 flex items-center gap-2 whitespace-nowrap">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold">
              Konfirmasi Cepat 5 Menit Langsung Siap
            </span>
          </div>

          <div className="w-full max-w-3xl bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-xl shadow-surface-variant/30 border border-surface-container-high/40 flex justify-center items-center">
            <img
              alt="3D Mobil Rental JALAN.IN Innova Reborn di atas aspal"
              className="w-full max-w-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
              src={HERO_CAR_IMAGE}
            />
          </div>
        </div>

        <div className="w-full max-w-5xl mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 bg-surface-container-lowest rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                directions_car
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="font-headline-sm text-[16px] sm:text-headline-sm font-extrabold text-on-surface whitespace-nowrap">
                50+ Unit
              </h4>
              <p className="font-body-sm text-[12px] sm:text-body-sm text-on-surface-variant leading-snug">
                Armada Terawat Siap Pakai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary-fixed/60 flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                support_agent
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="font-headline-sm text-[16px] sm:text-headline-sm font-extrabold text-on-surface whitespace-nowrap">
                24/7 Siaga
              </h4>
              <p className="font-body-sm text-[12px] sm:text-body-sm text-on-surface-variant leading-snug">
                Bantuan Teknis &amp; CS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                price_check
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="font-headline-sm text-[16px] sm:text-headline-sm font-extrabold text-on-surface whitespace-nowrap">
                100% Pas
              </h4>
              <p className="font-body-sm text-[12px] sm:text-body-sm text-on-surface-variant leading-snug">
                Tanpa Biaya Terselubung
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                sentiment_very_satisfied
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="font-headline-sm text-[16px] sm:text-headline-sm font-extrabold text-on-surface whitespace-nowrap">
                12.000+
              </h4>
              <p className="font-body-sm text-[12px] sm:text-body-sm text-on-surface-variant leading-snug">
                Perjalanan Menyenangkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
