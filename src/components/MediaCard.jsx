const MediaCard = () => {
  return (
    <div className="container mx-auto w-full px-2 md:px-4">
      <div className="my-15 px-4 py-4">
        <div className="mx-auto max-w-2xl transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
          <img
            className="w-full"
            src="https://www.shell.co.id/in_id/media/_jcr_content/root/metadata.shellimg.jpeg/1742802057745/shell-service-station.jpeg?imwidth=662&impolicy=amidala-image&imdensity=1"
            alt="Sunset in the mountains "
          />
          <div className="px-6 py-4">
            <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
              Bahan Bakar Shell
            </div>
            <p className="font-arimo text-base text-gray-700">
              Dapatkan informasi mengenai berita pers dan pidato dari para
              pimpinan Shell serta lihat laporan kami.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-right">
            <i className="ri-arrow-right-line text-2xl opacity-70"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
