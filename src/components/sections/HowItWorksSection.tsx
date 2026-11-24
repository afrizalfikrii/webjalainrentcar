import { STEPS_DATA } from "@/data/content";

export function HowItWorksSection() {
  return (
    <section id="cara-sewa" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Proses Praktis
          </span>
          <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
            Sewa Mobil Cuma 4 Langkah Singkat
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Didesain tanpa ribet. Tidak perlu berkas fisik tebal atau jaminan
            sertifikat yang menyulitkan.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS_DATA.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`w-12 h-12 rounded-2xl font-headline-md text-headline-md font-black flex items-center justify-center ${step.numberBgClass}`}
                  >
                    {step.number}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div
                className={`mt-6 pt-4 rounded-xl px-3 py-2 flex items-center gap-2 font-label-sm text-label-sm font-semibold ${step.footerBgClass}`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {step.badgeIcon}
                </span>
                {step.badgeText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
