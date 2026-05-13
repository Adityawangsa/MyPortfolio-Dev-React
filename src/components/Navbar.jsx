import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek apakah device mobile
      const isMobile = window.innerWidth < 768;

      if (isMobile && window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex justify-between items-center py-8">
      {/* Bagian logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold bg-white md:bg-transparent text-black md:text-white p-1 md:p-0">
          MyPortfolio
        </h1>
      </div>
      {/* Bagian menu */}
      <div className="nav-menu">
        <ul
          className={`flex space-x-4 md:space-x-6 lg:space-x-10 fixed md:static left-1/2 transition-all duration-150 ease-in-out transform -translate-x-1/2 md:translate-x-0 mt-4 py-4 px-6 rounded-full md:py-0 bg-white/30 md:bg-transparent backdrop-blur-md md:top-0 md:opacity-100
                ${active ? "top-0 opacity-100" : "-top-20 opacity-0"}`}
        >
          <li>
            <a
              href="#tentang"
              className="relative md:px-3 md:py-1 text-base md:text-lg font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#beranda"
              className="relative md:px-3 md:py-1 text-base md:text-lg font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#projek"
              className="relative md:px-3 md:py-1 text-base md:text-lg font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Projek
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="relative md:px-3 md:py-1 text-base md:text-lg font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
