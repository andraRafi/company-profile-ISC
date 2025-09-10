import { useState } from "react";
import shellLogo from "../assets/shell-seeklogo.png";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Beranda", href: "#" },
    { name: "Pengendara Bermotor", href: "#" },
    { name: "Konsumen Bisnis", href: "#" },
    { name: "Keberlanjutan", href: "#" },
    { name: "Tentang Kami", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 border-gray-300">
      <div className="container mx-auto w-full px-2 md:px-4">
        <nav>
          <div>
            <ul className="text-md flex justify-end gap-5 py-4">
              <li>Bantuan dan Layanan Pelanggan</li>
              <li>Karir</li>
              <li>Ruang Media</li>
              <li>Change Market</li>
            </ul>
          </div>
        </nav>
        <div className="nav-wrapper flex items-center justify-between gap-5 py-4 md:justify-start">
          <a href="#" className="brand-logo flex items-center gap-2">
            <img
              src={shellLogo}
              alt="Shell Logo"
              className="logo"
              width={45}
              height={45}
            />
          </a>

          {/* Tablet/Desktop Menu */}
          <div className="hidden w-full items-center justify-between md:flex">
            <div className="flex items-center gap-6">
              {menus.map((menu) => (
                <a
                  key={menu.name}
                  href={menu.href}
                  className={`${
                    active === menu.name ? "font-semibold text-red-500" : ""
                  } hover:text-red-400`}
                  onClick={() => setActive(menu.name)}
                >
                  {menu.name}
                </a>
              ))}
            </div>
            <div className="ml-auto">
              <IoMdSearch className="cursor-pointer" size={22} />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <IoMdSearch className="cursor-pointer" size={22} />
            {!isMenuOpen ? (
              <HiMenuAlt4
                className="cursor-pointer"
                size={28}
                onClick={toggleMenu}
              />
            ) : (
              <IoCloseSharp
                className="cursor-pointer"
                size={28}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 border-t border-b border-gray-200 bg-white px-4 py-4 md:hidden">
            {menus.map((menu) => (
              <li key={menu.name}>
                <a
                  href={menu.href}
                  className={`block ${
                    active === menu.name ? "font-semibold text-red-500" : ""
                  } hover:text-red-400`}
                  onClick={() => {
                    setActive(menu.name);
                    setIsMenuOpen(false); // Close menu after click
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
