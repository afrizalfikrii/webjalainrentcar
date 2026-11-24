export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20JALAN.IN%2C%20saya%20ingin%20tanya%20ketersediaan%20mobil"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp JALAN.IN"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-extrabold shadow-xl shadow-secondary-fixed/40 hover:bg-secondary-fixed-dim hover:scale-105 active:scale-95 transition-all"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span className="hidden sm:inline whitespace-nowrap">Chat Admin</span>
    </a>
  );
}
