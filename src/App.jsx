import "./App.css";

function App() {
  return (
    <div className="container mx-auto w-full px-2 md:px-4">
      {/**card */}
      <div className="card mx-auto mb-10 pt-6">
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
            <img
              className="w-full"
              src="https://www.shell.co.id/in_id/motorists/oil-and-lubricant/shell-advance-vip-experience-gp-italia/_jcr_content/root/metadata.shellimg.png/1756699680214/gtl-malayasia.png?imwidth=392&impolicy=amidala-image&imdensity=1"
              alt="Sunset in the mountains "
            />
            <div className="px-6 py-4">
              <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                Rasakan VIP Experience di GP Malaysia
              </div>
              <p className="font-arimo text-base text-gray-700">
                ikuti Shell Advance VIP Experience GP italia dengan membeli
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-right">
              <i className="ri-arrow-right-line text-2xl opacity-70"></i>
            </div>
          </div>
          <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
            <img
              className="w-full"
              src="https://www.shell.co.id/in_id/_jcr_content/root/main/section/promo_copy.shellimg.jpeg/1751272341428/scuderia.jpeg?imwidth=392&impolicy=amidala-image&imdensity=1"
              alt="Sunset in the mountains "
            />
            <div className="px-6 py-4">
              <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                Shell Kasih Lebih Untuk Member Shell GO+
              </div>
              <p className="font-arimo text-base text-gray-700">
                Dapatkan kesempatan mendapatkan VIP Experience nonton F1 di
                Singapura dan puluhan ribu hadiah menarik.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-right">
              <i className="ri-arrow-right-line text-2xl opacity-70"></i>
            </div>
          </div>
          <div className="max-w-sm transform overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:-translate-y-3 hover:shadow-xl">
            <img
              className="w-full"
              src="https://www.shell.co.id/in_id/motorists/oil-and-lubricant/lubematch/_jcr_content/root/metadata.shellimg.png/1742224421766/shell-lubematch-logo-dripping-oil-can.png?imwidth=392&impolicy=amidala-image&imdensity=1"
              alt="Sunset in the mountains "
            />
            <div className="px-6 py-4">
              <div className="font-montserrat mb-2 text-xl font-bold text-gray-700">
                Shell LubeMatch
              </div>
              <p className="font-arimo text-base text-gray-700">
                ikuti Shell Advance VIP Experience GP italia dengan membeli
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-right">
              <i className="ri-arrow-right-line text-2xl opacity-70"></i>
            </div>
          </div>
        </div>
      </div>
      {/**card */}
    </div>
  );
}

export default App;
