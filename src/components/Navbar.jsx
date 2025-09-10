import { useState } from "react";
import shellLogo from "../assets/shell-seeklogo.png";

const Navbar = () => {
  const [active, setActive] = useState("Beranda");

  const menus = [
    { name: "Beranda", href: "#" },
    { name: "Pengendara Bermotor", href: "#" },
    { name: "Konsumen Bisnis", href: "#" },
    { name: "Keberlanjutan", href: "#" },
    { name: "Tentang Kami", href: "#" },
  ];

  return (
    <nav className='navbar max-w-full m-auto border-b border-gray-200'>
      <div className='max-w-[1400px] mx-auto px-6'>
        <div className='top-header m-auto max-w-page flex'>
          <div className='grow'></div>
          <div className='flex'>
            <div className='grow-0'>
              <div className='h-full transition px-1 pb-2 pt-1'>
                <a
                  class='clickable cursor-pointer h-full'
                  target='_blank'
                  href='https://support.shell.id/hc/id'
                  rel='noopener'
                >
                  <div className='h-full transition hover:bg-txa/10 pe-2 py-1 flex space-x-2 items-center justify-center rounded overflow-hidden w-full min-h-8  ps-2 '>
                    <div className='grow'>
                      <span className='space-x-1'>
                        <span className='text-sm text-gray-700'>
                          Bantuan dan Layanan Pelanggan
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='grow-0'>
              <div className='h-full transition px-1 pb-2 pt-1'>
                <a
                  class='clickable cursor-pointer h-full'
                  target='_blank'
                  href='https://support.shell.id/hc/id'
                  rel='noopener'
                >
                  <div className='h-full transition hover:bg-txa/10 pe-2 py-1 flex space-x-2 items-center justify-center rounded overflow-hidden w-full min-h-8  ps-2 '>
                    <div className='grow'>
                      <span className='space-x-1'>
                        <span className='text-sm text-gray-700'>karir</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='grow-0'>
              <div className='h-full transition px-1 pb-2 pt-1'>
                <a
                  class='clickable cursor-pointer h-full'
                  target='_blank'
                  href='https://support.shell.id/hc/id'
                  rel='noopener'
                >
                  <div className='h-full transition hover:bg-txa/10 pe-2 py-1 flex space-x-2 items-center justify-center rounded overflow-hidden w-full min-h-8  ps-2 '>
                    <div className='grow'>
                      <span className='space-x-1'>
                        <span className='text-sm text-gray-700'>
                          Ruang media
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='grow-0'>
              <div className='h-full transition px-1 pb-2 pt-1'>
                <a
                  class='clickable cursor-pointer h-full'
                  target='_blank'
                  href='https://support.shell.id/hc/id'
                  rel='noopener'
                >
                  <div className='h-full transition hover:bg-txa/10 pe-2 py-1 flex space-x-2 items-center justify-center rounded overflow-hidden w-full min-h-8  ps-2 '>
                    <div className='grow'>
                      <span className='space-x-1'>
                        <span className='text-sm text-gray-700'>
                          change market
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className='flex items-center'>
          <a href='#' className='clickable cursor-pointer'>
            <div className='min-h-16 border-txa flex'>
              <div className='flex shrink-0 grow-0 items-center'>
                <div
                  className='bg-no-repeat bg-center bg-contain h-16'
                  style={{
                    backgroundImage: "var(--logo)",
                    width: "calc(var(--logo-ratio) * 64px)",
                  }}
                ></div>

                {/* Logo pakai import gambar */}
                <img src={shellLogo} alt='Shell Logo' className='h-12 ms-2' />
              </div>
            </div>
          </a>
          <div className='flex' role='list'>
            {menus.map((menu) => (
              <div
                key={menu.name}
                className='shrink tracking-tight relative'
                role='listitem'
              >
                <div
                  className={`h-full transition px-1 pb-1 pt-2 border-b-4 ${
                    active === menu.name
                      ? "border-yellow-500"
                      : "border-transparent"
                  }`}
                >
                  <a
                    href={menu.href}
                    className='clickable cursor-pointer h-full'
                    onClick={() => setActive(menu.name)}
                  >
                    <div className='h-full transition hover:bg-txa/10 pe-2 py-1 flex space-x-2 items-center justify-center rounded overflow-hidden w-full min-h-12 ps-2'>
                      <span className='text-sm text-gray-700'>{menu.name}</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className='grow'></div>
          <div role='listitem' className='flex shrink'>
            <div role='listitem'>
              <div className='h-full transition border-bgb/0 p-2'>
                <i class='ri-search-line'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
