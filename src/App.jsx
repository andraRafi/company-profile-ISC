import "./App.css";

function App() {
  return (
    <>
      {/**card */}
      <div className='card mx-auto pt-6 mb-10'>
        <div className='grid md:grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center'>
          <div
            className='max-w-sm rounded-xl overflow-hidden  bg-gray-100 
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/motorists/oil-and-lubricant/shell-advance-vip-experience-gp-italia/_jcr_content/root/metadata.shellimg.png/1756699680214/gtl-malayasia.png?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Rasakan VIP Experience di GP Malaysia
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                ikuti Shell Advance VIP Experience GP italia dengan membeli
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
          <div
            className=' max-w-sm rounded-xl overflow-hidden  bg-gray-100 
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/_jcr_content/root/main/section/promo_copy.shellimg.jpeg/1751272341428/scuderia.jpeg?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Shell Kasih Lebih Untuk Member Shell GO+
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                Dapatkan kesempatan mendapatkan VIP Experience nonton F1 di
                Singapura dan puluhan ribu hadiah menarik.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
          <div
            className=' max-w-sm rounded-xl overflow-hidden  bg-gray-100 
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
          >
            <img
              className='w-full'
              src='https://www.shell.co.id/in_id/motorists/oil-and-lubricant/lubematch/_jcr_content/root/metadata.shellimg.png/1742224421766/shell-lubematch-logo-dripping-oil-can.png?imwidth=392&impolicy=amidala-image&imdensity=1'
              alt='Sunset in the mountains '
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
                Shell LubeMatch
              </div>
              <p className='text-gray-700 text-base font-arimo'>
                ikuti Shell Advance VIP Experience GP italia dengan membeli
              </p>
            </div>
            <div class='px-6 pt-4 pb-2 text-right'>
              <i class='ri-arrow-right-line text-2xl opacity-70'></i>
            </div>
          </div>
        </div>
      </div>
      {/**card */}
    </>
  );
}

export default App;
