import { TESTIMONIALS_DATA } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="w-full py-20 bg-surface-container-low/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
              Kisah Pelanggan
            </span>
            <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
              Cerita Manis di Tiap Kilometer
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Ulasan jujur dari wisatawan dan pebisnis yang mempercayakan
              mobilitasnya pada JALAN.IN.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span
                  key={idx}
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="font-label-lg text-label-lg text-on-surface font-extrabold">
              4.9 / 5.0 Rating Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.name}
              className="p-7 bg-surface-container-lowest rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="mt-6 pt-5 bg-surface-container-low/40 -mx-7 -mb-7 px-7 py-4 rounded-b-3xl flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md text-label-md font-bold ${item.avatarBgClass}`}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                    {item.name}
                  </h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
