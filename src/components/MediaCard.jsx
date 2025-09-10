const MediaCard = () => {
  return (
    <div className='mt-15 mb-15'>
      <div
        className='max-w-2xl mx-auto rounded-xl overflow-hidden  bg-white
                    transform transition duration-300 hover:-translate-y-3 hover:shadow-xl'
      >
        <img
          className='w-full'
          src='https://www.shell.co.id/in_id/media/_jcr_content/root/metadata.shellimg.jpeg/1742802057745/shell-service-station.jpeg?imwidth=662&impolicy=amidala-image&imdensity=1'
          alt='Sunset in the mountains '
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 font-montserrat text-gray-700'>
            Bahan Bakar Shell
          </div>
          <p className='text-gray-700 text-base font-arimo'>
            Dapatkan informasi mengenai berita pers dan pidato dari para
            pimpinan Shell serta lihat laporan kami.
          </p>
        </div>
        <div class='px-6 pt-4 pb-2 text-right'>
          <i class='ri-arrow-right-line text-2xl opacity-70'></i>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
