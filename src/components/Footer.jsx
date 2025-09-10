import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-300">
      <div className="container mx-auto mt-20 w-full">
        <footer className="p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="w-full md:col-span-6 lg:col-span-3">
              <h1 className="mb-6 text-2xl font-bold">
                Selengkapnya di Beranda
              </h1>
              <ul className="grid gap-2">
                <li>
                  <a href="" className="hover:underline">
                    Pengendara Bermotor
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Konsumen Bisnis
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Keberlanjutan
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:col-span-6 lg:col-span-3">
              <h1 className="mb-6 text-2xl font-bold">
                Lebih jauh mengenai shell
              </h1>
              <ul className="grid gap-2">
                <li>
                  <a href="" className="hover:underline">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Ruang Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:col-span-6 lg:col-span-3">
              <h1 className="mb-6 text-2xl font-bold">
                Bagaimana kami membantu Anda?
              </h1>
              <ul className="grid gap-2">
                <li>
                  <a href="" className="hover:underline">
                    Kontak Layanan Shell
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Bantuan dan Layanan Pelanggan
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Pencari SPBU Shell
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:col-span-6 lg:col-span-3">
              <h1 className="mb-6 text-2xl font-bold">Terhubung Dengan Kami</h1>
              <ul className="grid gap-6">
                <li>
                  <a href="" className="flex gap-3 hover:underline">
                    <FaInstagram className="text-xl" />
                    <p>Kunjungi Kami di Instagram</p>
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-3 hover:underline">
                    <FaYoutube className="text-xl" />
                    <p>Kunjungi Kami di Youtube</p>
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-3 hover:underline">
                    <FaFacebookF className="text-xl" />
                    <p>Kunjungi Kami di Facebook</p>
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-3 hover:underline">
                    <FaLinkedinIn className="text-xl" />
                    <p>Kunjungi Kami di LinkedIn</p>
                  </a>
                </li>
                <li>
                  <a href="" className="flex gap-3 hover:underline">
                    <AiFillTikTok className="text-xl" />
                    <p>Kunjungi Kami di Tiktok</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-6 md:gap-4 lg:col-span-9">
              <a href="" className="hover:underline">
                Aksesibilitas
              </a>
              <a href="" className="hover:underline">
                Syarat dan ketentuan
              </a>
              <a href="" className="hover:underline">
                Pemberitauan privasi
              </a>
              <a href="" className="hover:underline">
                Kebijakan Cookie
              </a>
            </div>
            <div className="md:col-span-6 lg:col-span-3">
              <a href="" className="hover:underline">
                Modify cookie preferences
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
