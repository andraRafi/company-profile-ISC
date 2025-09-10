const Hero = () => {
  return (
    <div>
      {/**hero */}
      <div className='banner mt-6 mb-6'>
        <img
          src='https://www.shell.co.id/in_id/_jcr_content/root/main/section/page_header_74984238.shellimg.png/1755161805163/shell-helix-home-banner.png?imwidth=1118&impolicy=amidala-image&imdensity=1'
          className='rounded-3xl w-full'
          alt=''
        />
      </div>
      <div className='mt-6 mb-6 max-w-6xl mx-auto'>
        <div className='space-y-5'>
          <h1 className='font-montserrat text-3xl font-semibold text-gray-700'>
            Double shell helix experience - pengalaman VIP di italia atau Abu
            Dabi
          </h1>
          <div className='flex items-center gap-2 sm:gap-4'>
            <a
              href='#'
              className='rounded-xl bg-yellow-500 p-4 font-arimo text-gray-700 font-semibold'
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
      {/**hero */}
    </div>
  );
};

export default Hero;
