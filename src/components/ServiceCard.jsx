const ServiceCard = () => {
  return (
    <div className=' bg-gray-100'>
      {/**product card */}
      <div className='container mx-auto '>
        <h1 className='mb-2 text-center font-montserrat text-3xl  text-gray-700 font-bold pt-10'>
          Produk dan layanan untuk perjalanan Anda.
        </h1>

        <div className='mt-15 pb-10 grid md:grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center'>
          <div
            className='max-w-sm rounded-xl overflow-hidden  bg-white
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo.shellimg.png/1745580708166/bensin-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Bahan Bakar Shell
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                Kenali rangkai bahan bakar berkualitas Shell di sini
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
          <div
            className=' max-w-sm rounded-xl overflow-hidden  bg-white 
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo_copy.shellimg.png/1742888911201/oli-pelumas-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Oli & Pelumas Shell
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                Temukan Oli & Pelumas yang Tepat!
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
          <div
            className=' max-w-sm rounded-xl overflow-hidden  bg-white 
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/_jcr_content/root/main/section_1407347491/promo_copy_1087602520.shellimg.png/1744881939436/konsumen-bisnis-shell.png?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Konsumen Bisnis Shell
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                Solusi Oli & Pelumas untuk Kebutuhan Bisnis Anda!
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
        </div>
      </div>
      {/**product card */}
    </div>
  );
};

export default ServiceCard;
