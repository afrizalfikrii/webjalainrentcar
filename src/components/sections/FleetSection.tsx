"use client";

import { useState } from "react";
import { CARS_DATA, FLEET_CATEGORIES } from "@/data/fleet";
import { CarCategory, CarSpec } from "@/types";

interface FleetSectionProps {
  onSelectCar: (car: CarSpec) => void;
}

export function FleetSection({ onSelectCar }: FleetSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<CarCategory>("Semua");

  const featuredCar = CARS_DATA.find((c) => c.featured) ?? CARS_DATA[0];
  const secondaryCars = CARS_DATA.filter((c) => c.key !== featuredCar.key).filter(
    (c) => selectedCategory === "Semua" || c.category === selectedCategory
  );

  const showFeatured =
    selectedCategory === "Semua" || selectedCategory === featuredCar.category;

  return (
    <section
      id="armada"
      className="w-full py-16 lg:py-24 bg-surface-container-low/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
              Koleksi Kendaraan
            </span>
            <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
              Armada Pilihan Untuk Tiap Kebutuhan Perjalanan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Semua unit terawat rutin di bengkel resmi, bersih harum, dan telah
              disinfeksi penuh sebelum diserahterimakan.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:p-1.5 sm:bg-surface-container-lowest sm:rounded-full sm:shadow-sm">
            {FLEET_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    isActive
                      ? "px-4 sm:px-5 py-2 rounded-full font-label-md text-label-md font-bold bg-primary text-on-primary shadow-sm transition-colors whitespace-nowrap"
                      : "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-surface-container-lowest sm:bg-transparent shadow-sm sm:shadow-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors whitespace-nowrap"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {showFeatured && (
            <div
              className={`${
                secondaryCars.length > 0 ? "lg:col-span-7" : "lg:col-span-12"
              } bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all`}
            >
              <div className="flex items-start justify-between z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-label-sm text-label-sm font-bold rounded-full mb-2">
                    ⭐ Paling Favorit Keluarga
                  </span>
                  <h3 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">
                    {featuredCar.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {featuredCar.tagline}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">
                    Mulai dari
                  </span>
                  <span className="font-price-display text-price-display text-primary font-black tabular-nums">
                    {featuredCar.price}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">
                    {featuredCar.unit}
                  </span>
                </div>
              </div>

              <div className="my-6 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary-fixed/20 rounded-full blur-2xl transform scale-75" />
                <img
                  alt={featuredCar.imageAlt}
                  className="w-full max-w-lg object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                  src={featuredCar.image}
                />
              </div>

              <div className="pt-5 border-t border-surface-container-high/50 flex flex-col gap-4 z-10 bg-surface-container-lowest">
                <div className="flex flex-wrap items-center gap-2">
                  {featuredCar.highlights?.map((item) => (
                    <span
                      key={item.label}
                      className="px-3.5 py-2 rounded-xl bg-surface-container-low font-label-md text-label-md text-on-surface flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => onSelectCar(featuredCar)}
                    className="w-full px-5 py-3.5 rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-all shadow-xs whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      info
                    </span>
                    <span>Detail Spesifikasi</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectCar(featuredCar)}
                    className="w-full px-6 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md shadow-secondary-fixed/30 hover:bg-secondary-fixed-dim hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap"
                  >
                    Sewa Unit Ini
                  </button>
                </div>
              </div>
            </div>
          )}

          {secondaryCars.length > 0 && (
            <div
              className={`${
                showFeatured ? "lg:col-span-5" : "lg:col-span-12"
              } flex flex-col justify-between gap-4`}
            >
              {secondaryCars.map((car) => (
                <div
                  key={car.key}
                  className="p-4 sm:p-5 bg-surface-container-lowest rounded-3xl shadow-sm flex items-center justify-between gap-3 sm:gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h4 className="font-headline-sm text-[17px] sm:text-headline-sm font-bold text-on-surface leading-snug">
                        {car.name}
                      </h4>
                      <span
                        className={`px-2 py-0.5 rounded-md font-label-sm text-label-sm whitespace-nowrap flex-shrink-0 ${
                          car.colorTagHighlight
                            ? "bg-primary-fixed text-primary font-bold"
                            : "bg-surface-container-high text-on-surface font-semibold"
                        }`}
                      >
                        {car.colorTag}
                      </span>
                    </div>
                    <p className="font-body-sm text-[13px] sm:text-body-sm text-on-surface-variant mt-1">
                      {car.shortDesc}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <span className="font-headline-sm text-[18px] sm:text-headline-sm font-extrabold text-primary tabular-nums whitespace-nowrap">
                        {car.price}
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                          /hr
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectCar(car)}
                        className="px-3.5 sm:px-4 py-1.5 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-sm text-label-sm font-bold whitespace-nowrap flex-shrink-0 transition-colors"
                      >
                        Detail &amp; Pilih
                      </button>
                    </div>
                  </div>
                  <div className="w-24 h-20 sm:w-28 sm:h-24 rounded-2xl bg-surface-container-lowest flex items-center justify-center p-1 flex-shrink-0 overflow-hidden">
                    <img
                      alt={car.imageAlt}
                      className="w-full h-full object-contain hover:scale-110 transition-transform"
                      src={car.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
