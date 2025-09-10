const NewsCard = () => {
  return (
    <div className="container mx-auto w-full px-2 md:px-4">
      <div className="bg-white">
        {/**product card */}
        <div className="container mx-auto">
          <h1 className="font-montserrat mb-2 pt-10 text-center text-3xl font-bold text-gray-700">
            Latest News.
          </h1>

          <div className="mt-15 grid grid-cols-1 justify-items-center gap-5 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Informasi produk BBM di SPBU Shell pada Agustus 2025
                </div>
                <p className="font-arimo text-base text-gray-700">
                  27 Agu 2025
                </p>
                <p className="font-arimo text-base text-gray-700">
                  Shell Indonesia ingin menginformasikan bahwa produk bahan
                  bakar minyak (BBM) Shell Super, Shell V-Power, dan Shell
                  V-Power Nitro+ tidak tersedia di beberapa jaringan Stasiun
                  Pengisian Bahan Bakar Umum atau SPBU Shell hingga waktu yang
                  belum dapat dipastikan.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Shell Indonesia dan Astra Otoparts Pecahkan Rekor MURI untuk
                  Ganti Oli Mobil Serentak Terbanyak
                </div>
                <p className="font-arimo text-base text-gray-700">
                  27 Agu 2025
                </p>
                <p className="font-arimo text-base text-gray-700">
                  Jakarta - Shell Indonesia dan Astra Otoparts meraih
                  penghargaan Museum Rekor-Dunia Indonesia (MURI) untuk kategori
                  “Ganti Oli Mobil Serentak di Jaringan Bengkel Terbanyak”.
                  Lebih dari 2.500 mobil mengganti oli Shell Helix Astra secara
                  serentak di 403 titik Shop & Drive yang tersebar di lebih dari
                  100 kota dan kabupaten di Indonesia.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Shell Indonesia mengadakan forum eksekutif untuk wujudkan
                  pertumbuhan bisnis yang berkelanjutan, adaptif, dan tangguh
                </div>
                <p className="font-arimo text-base text-gray-700">
                  23 Jun 2025
                </p>
                <p className="font-arimo text-base text-gray-700">
                  Jakarta − Shell Indonesia menyelenggarakan forum untuk para
                  eksekutif bertajuk Sustainable Success: Balancing Growth and
                  Agility, pada 26 Juni 2025 di Jakarta, dengan menghadirkan
                  Gita Wirjawan, mantan Menteri Perdagangan Republik Indonesia
                  yang kini dikenal sebagai pembawa acara siniar atau podcast
                  Endgame; Phillia Wibowo, Partner & Leader of People &
                  Organizational Performance Practice Southeast Asia, McKinsey &
                  Company; dan Andri Pratiwa, Managing Director Lubricants,
                  Shell Indonesia. Forum yang dimoderatori oleh Hendra
                  Soeprajitno, Editor-in-Chief Fortune Indonesia, ini menyoroti
                  tantangan dan peluang dalam mencapai pertumbuhan ekonomi
                  Indonesia di tengah ketidakpastian global.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Shell ExpertConnect 2025: dorong efisiensi dan produktivitas
                  berkelanjutan di sektor agrikultur
                </div>
                <p className="font-arimo text-base text-gray-700">
                  18 Jun 2025
                </p>
                <p className="font-arimo text-base text-gray-700">
                  Jakarta − Shell Indonesia kembali menyelenggarakan Shell
                  ExpertConnect sebagai platform diskusi strategis untuk
                  mendorong peningkatan produktivitas sektor agrikultur melalui
                  praktik perawatan operasional yang efisien dan berkelanjutan.
                  Mengusung tema Unstoppable Agriculture: Peak Productivity and
                  Operations Efficiency, Shell ExpertConnect 2025 digelar hari
                  ini di Bandung, Jawa Barat, yang mempertemukan lebih dari 150
                  profesional dengan latar belakang pelaku industri, pembuat
                  kebijakan, perwakilan asosiasi, serta pemangku kepentingan
                  dari industri kelapa sawit.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
          </div>
        </div>
        {/**product card */}
      </div>
    </div>
  );
};

export default NewsCard;
