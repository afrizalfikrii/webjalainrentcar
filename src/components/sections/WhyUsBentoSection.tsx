export function WhyUsBentoSection() {
  return (
    <section className="w-full py-20 bg-surface-container-low/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Keunggulan Standar Layanan
          </span>
          <h2 className="font-headline-xl text-headline-xl font-extrabold text-on-surface mt-1">
            Pengalaman Rental Mobil Yang Lebih Menenangkan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Dibuat khusus agar waktu liburan atau urusan dinas Anda tidak
            terganggu urusan teknis kendaraan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="md:col-span-2 lg:col-span-2 bg-primary text-on-primary p-8 rounded-3xl shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-primary-container/40 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest/15 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-amber-300 text-[28px]">
                  flight_takeoff
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold mb-3">
                Antar-Jemput Gratis ke Bandara &amp; Stasiun
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container max-w-md">
                Turun dari pesawat atau kereta, unit sudah standby rapi di lobby
                kedatangan. Bebas repot antri taksi umum dengan bawaan koper
                banyak.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                "YIA Airport",
                "SOC Adi Soemarmo",
                "Stasiun Solo Balapan",
                "Stasiun Tugu",
              ].map((spot) => (
                <span
                  key={spot}
                  className="px-3 py-1 rounded-full bg-surface-container-lowest/20 font-label-sm text-label-sm"
                >
                  {spot}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  badge
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Sopir Ramah &amp; Paham Jalur Lokal
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Driver terverifikasi SKCK, bebas rokok di kabin, ramah anak, dan
                hafal spot kuliner hidden-gem yang lezat.
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-bold mt-4">
              Tersedia Bahasa Inggris
            </span>
          </div>

          <div className="bg-surface-container-high/70 p-7 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  receipt_long
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Harga Transparan Tanpa Tipu-Tipu
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tarif yang Anda lihat di situs adalah harga final. Bebas biaya
                admin mendadak atau pungutan aneh saat pengembalian.
              </p>
            </div>
            <div className="font-label-md text-label-md font-bold text-on-surface mt-4">
              Jaminan All-Inclusive
            </div>
          </div>

          <div className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  cleaning_services
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Unit Selalu Bersih &amp; Wangi
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Interior disedot vakum dan disemprot disinfektan tiap serah
                terima. Kabin bebas bau apek atau sisa rokok.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-semibold mt-4">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              Standar Higienis Bintang 5
            </div>
          </div>

          <div className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  phone_in_talk
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Bantuan Darurat 24 Jam
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Ban bocor atau aki ngedrop di tengah jalan? Tim teknis kami
                langsung menuju lokasi atau kirim unit pengganti segera.
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-4">
              Roadside Assistance Siap Sedia
            </span>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-surface-container-high p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                  Verifikasi Instan
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                  Proses ACC Kilat 5 Menit
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  timer
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-6">
              Cukup kirimkan foto KTP, SIM A aktif, dan akun media sosial via
              WhatsApp. Tanpa jaminan sertifikat rumah atau deposit yang
              memberatkan wisatawan.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold">
                100% Paperless
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md font-bold">
                Data Pribadi Aman Terenkripsi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
