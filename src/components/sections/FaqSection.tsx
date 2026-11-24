import { FAQS_DATA } from "@/data/content";

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Pusat Informasi
          </span>
          <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Semua hal yang perlu Anda ketahui sebelum menyewa mobil di JALAN.IN.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS_DATA.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-container-lowest p-6 rounded-3xl shadow-sm open:shadow-md transition-all cursor-pointer"
            >
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm font-bold text-on-surface list-none">
                <span>{faq.question}</span>
                <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                  <span className="material-symbols-outlined text-[20px]">
                    keyboard_arrow_down
                  </span>
                </span>
              </summary>
              <div className="mt-4 pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
