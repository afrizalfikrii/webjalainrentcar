"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsBentoSection } from "@/components/sections/WhyUsBentoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CarDetailModal } from "@/components/modals/CarDetailModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BookingSearchState, CarSpec } from "@/types";

function formatDateInput(offsetDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split("T")[0];
}

export default function HomePage() {
  const [selectedCar, setSelectedCar] = useState<CarSpec | null>(null);
  const [bookingSearch, setBookingSearch] = useState<BookingSearchState>(() => ({
    location: "Solo (Surakarta)",
    startDate: formatDateInput(1),
    endDate: formatDateInput(4),
    serviceType: "Lepas Kunci",
  }));

  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <HeroSection
            bookingSearch={bookingSearch}
            onBookingChange={setBookingSearch}
          />
          <FleetSection onSelectCar={setSelectedCar} />
          <HowItWorksSection />
          <WhyUsBentoSection />
          <PricingSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaBanner onSelectCar={setSelectedCar} />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CarDetailModal
        car={selectedCar}
        bookingSearch={bookingSearch}
        onClose={() => setSelectedCar(null)}
      />
    </>
  );
}
