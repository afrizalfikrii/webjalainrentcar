"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const [activeId, setActiveId] = useState("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        <a
          href="#beranda"
          onClick={() => handleLinkClick("beranda")}
          className="flex-shrink-0"
        >
          <BrandLogo />
        </a>

        <nav className="hidden xl:flex items-center gap-0.5 bg-surface-container-low p-1.5 rounded-full">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "px-3.5 py-1.5 whitespace-nowrap transition-all duration-200 bg-surface-container-high text-primary font-label-md text-label-md font-bold rounded-full shadow-sm"
                    : "px-3.5 py-1.5 whitespace-nowrap rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all duration-200"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 rounded-full font-label-lg text-label-lg text-on-surface bg-surface-container-lowest shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-surface-container-high/60 hover:bg-surface-container-low hover:text-primary transition-all duration-150"
            href="#kontak"
          >
            Hubungi Kami
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full font-label-lg text-label-lg bg-secondary-fixed text-on-secondary-fixed shadow-[0_4px_14px_rgba(22,26,47,0.22)] hover:bg-secondary-fixed-dim hover:shadow-[0_6px_20px_rgba(22,26,47,0.32)] active:scale-95 transition-all duration-150"
            href="#armada"
          >
            Pesan Sekarang
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileOpen}
            className="xl:hidden w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-surface-container-high/60 bg-surface-container-lowest/95 backdrop-blur-lg px-4 sm:px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-1.5 max-w-7xl mx-auto">
            {NAV_LINKS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={
                    isActive
                      ? "px-4 py-2.5 rounded-2xl bg-surface-container-high text-primary font-label-lg text-label-lg font-bold"
                      : "px-4 py-2.5 rounded-2xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-lg text-label-lg font-medium transition-colors"
                  }
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#kontak"
              onClick={() => setMobileOpen(false)}
              className="sm:hidden mt-2 px-4 py-2.5 rounded-2xl bg-surface-container-low text-on-surface font-label-lg text-label-lg font-bold text-center"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
