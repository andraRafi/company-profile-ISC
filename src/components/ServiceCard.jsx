const ServiceCard = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto w-full px-2 md:px-4">
        {/**product card */}
        <div className="container mx-auto">
          <h1 className="font-montserrat mb-2 pt-10 text-center text-3xl font-bold text-gray-700">
            Produk dan layanan untuk perjalanan Anda.
          </h1>

          <div className="mt-15 grid grid-cols-1 justify-items-center gap-5 pb-15 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <img
                className="w-full"
                src="https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo.shellimg.png/1745580708166/bensin-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1"
                alt="Sunset in the mountains "
              />
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Bahan Bakar Shell
                </div>
                <p className="font-arimo text-base text-gray-700">
                  Kenali rangkai bahan bakar berkualitas Shell di sini
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <img
                className="w-full"
                src="https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo_copy.shellimg.png/1742888911201/oli-pelumas-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1"
                alt="Sunset in the mountains "
              />
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Oli & Pelumas Shell
                </div>
                <p className="font-arimo text-base text-gray-700">
                  Temukan Oli & Pelumas yang Tepat!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-right">
                <i className="ri-arrow-right-line text-2xl opacity-70"></i>
              </div>
            </div>
            <div className="max-w-sm transform overflow-hidden rounded-xl bg-white transition duration-300 hover:-translate-y-3 hover:shadow-xl">
              <img
                className="w-full"
                src="https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo_copy_1087602520.shellimg.png/1744881939436/konsumen-bisnis-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1"
                alt="Sunset in the mountains "
              />
              <div className="px-6 py-4">
                <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                  Konsumen Bisnis Shell
                </div>
                <p className="font-arimo text-base text-gray-700">
                  Solusi Oli & Pelumas untuk Kebutuhan Bisnis Anda!
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

export default ServiceCard;
