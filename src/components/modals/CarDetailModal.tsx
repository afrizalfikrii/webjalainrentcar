"use client";

import { useEffect, useState } from "react";
import { BookingSearchState, CarSpec } from "@/types";

interface CarDetailModalProps {
  car: CarSpec | null;
  bookingSearch: BookingSearchState;
  onClose: () => void;
}

type TabKey = "specs" | "safety" | "rules";

function parseRupiah(priceStr: string): number {
  const digits = priceStr.replace(/\D/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

function calculateRentalDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 1;
  }
  const diffDays = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return Math.max(1, diffDays);
}

export function CarDetailModal({
  car,
  bookingSearch,
  onClose,
}: CarDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("specs");

  useEffect(() => {
    if (!car) return;
    setActiveTab("specs");
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  const rentalDays = calculateRentalDays(
    bookingSearch.startDate,
    bookingSearch.endDate
  );
  const dailyRate = parseRupiah(car.price);
  const estimatedTotal = dailyRate * rentalDays;
  const formattedTotal = formatRupiah(estimatedTotal);

  const scheduleSummary = `${bookingSearch.location} | ${bookingSearch.startDate} s/d ${bookingSearch.endDate} (${rentalDays} Hari) | ${bookingSearch.serviceType} | Estimasi ${formattedTotal}`;
  const waBookUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo JALAN.IN, saya ingin booking ${car.title} (${scheduleSummary})`
  )}`;
  const waCsUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo JALAN.IN, saya tertarik sewa ${car.title} (${scheduleSummary})`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-inverse-surface/60 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <div className="p-4 sm:p-6 bg-surface-container-lowest border-b border-surface-container-high flex items-start justify-between gap-3 flex-shrink-0">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                  directions_car
                </span>
              </span>
              <h3 className="font-headline-md text-[18px] sm:text-headline-md font-extrabold text-on-surface tracking-tight leading-snug">
                {car.title}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold whitespace-nowrap">
                {car.badge}
              </span>
            </div>
            <p className="font-body-sm text-[13px] sm:text-body-sm text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="whitespace-nowrap">
                Tarif Sewa:{" "}
                <strong className="text-primary font-bold tabular-nums">
                  {car.price}
                </strong>{" "}
                / 24 Jam
              </span>
              <span className="hidden sm:inline text-outline-variant">•</span>
              <span>Unit Terawat &amp; Siap Kirim Bandara / Stasiun</span>
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
              close
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 sm:flex sm:items-center sm:gap-2 px-3 sm:px-6 pt-2 bg-surface-container-lowest border-b border-surface-container-high flex-shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("specs")}
            className={`px-2 sm:px-4 py-2.5 font-label-md text-[12px] sm:text-label-md border-b-2 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
              activeTab === "specs"
                ? "font-bold text-primary border-primary"
                : "font-semibold text-on-surface-variant hover:text-on-surface border-transparent"
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
              tune
            </span>
            <span className="sm:hidden">Spesifikasi</span>
            <span className="hidden sm:inline">Spesifikasi Teknis</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("safety")}
            className={`px-2 sm:px-4 py-2.5 font-label-md text-[12px] sm:text-label-md border-b-2 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
              activeTab === "safety"
                ? "font-bold text-primary border-primary"
                : "font-semibold text-on-surface-variant hover:text-on-surface border-transparent"
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
              verified_user
            </span>
            <span className="sm:hidden">Keamanan</span>
            <span className="hidden sm:inline">Fitur &amp; Keamanan</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rules")}
            className={`px-2 sm:px-4 py-2.5 font-label-md text-[12px] sm:text-label-md border-b-2 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
              activeTab === "rules"
                ? "font-bold text-primary border-primary"
                : "font-semibold text-on-surface-variant hover:text-on-surface border-transparent"
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
              policy
            </span>
            <span className="sm:hidden">Kebijakan</span>
            <span className="hidden sm:inline">Kebijakan Sewa</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-surface-container-low/30">
          <div className="relative w-full rounded-3xl bg-surface-container-lowest border border-surface-container-high/60 p-2 sm:p-4 flex flex-col items-center justify-center overflow-hidden mb-4 sm:mb-6 shadow-sm">
            <div className="relative w-full max-w-2xl flex items-center justify-center">
              <img
                alt={car.imageAlt}
                className="w-full h-[210px] sm:h-[380px] object-contain scale-110"
                src={car.image}
              />
            </div>
          </div>

          {activeTab === "specs" && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-headline-sm">
                    <span className="material-symbols-outlined">power</span>
                    Performa &amp; Mesin
                  </div>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    {car.engine.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-headline-sm">
                    <span className="material-symbols-outlined">settings</span>
                    Transmisi &amp; Kaki-kaki
                  </div>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    {car.trans.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-headline-sm">
                    <span className="material-symbols-outlined">
                      local_gas_station
                    </span>
                    Konsumsi BBM &amp; Tangki
                  </div>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    {car.fuel.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-headline-sm">
                    <span className="material-symbols-outlined">
                      aspect_ratio
                    </span>
                    Dimensi &amp; Daya Angkut
                  </div>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    {car.dim.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="flex flex-col gap-4">
              <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                <h4 className="font-headline-sm text-headline-sm font-bold mb-3 flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">shield</span>
                  Fitur Keselamatan &amp; Kenyamanan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm text-on-surface-variant">
                  {car.safety.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div className="flex flex-col gap-4">
              <div className="p-5 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high">
                <h4 className="font-headline-sm text-headline-sm font-bold mb-3 flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined">checklist</span>
                  Ringkasan Ketentuan Sewa
                </h4>
                <div className="space-y-3 text-body-sm text-on-surface-variant">
                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <strong className="text-on-surface block mb-1">
                      1. Syarat Lepas Kunci (Self-Drive):
                    </strong>
                    e-KTP Asli, SIM A aktif, bukti tiket kereta/pesawat atau
                    booking hotel, akun sosmed aktif. Tanpa jaminan sertifikat
                    atau deposit memberatkan.
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <strong className="text-on-surface block mb-1">
                      2. Waktu &amp; Toleransi:
                    </strong>
                    Sewa 24 jam dihitung sejak serah terima kunci. Overtime Rp
                    50.000/jam (toleransi keterlambatan 30 menit).
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <strong className="text-on-surface block mb-1">
                      3. Pengembalian BBM:
                    </strong>
                    Kebijakan Same-to-Same (dikembalikan pada indikator meteran
                    yang sama seperti saat terima unit).
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 bg-surface-container-lowest border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <div className="flex items-baseline justify-center sm:justify-start gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Estimasi Total:
              </span>
              <span className="font-headline-lg text-[24px] sm:text-headline-lg font-black text-primary tabular-nums">
                {formattedTotal}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">
              {rentalDays} Hari × {car.price} ({bookingSearch.location} •{" "}
              {bookingSearch.serviceType})
            </span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={waCsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-3 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
              Tanya CS
            </a>
            <a
              href={waBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 sm:px-6 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md shadow-secondary-fixed/40 hover:bg-secondary-fixed-dim hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[20px]">key</span>
              <span className="sm:hidden">Pesan Unit Ini</span>
              <span className="hidden sm:inline">Pesan Unit Ini Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
