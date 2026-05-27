import { useState, useEffect } from "react";

// Data menu disimpan dalam array agar mudah ditambah, dihapus, atau diubah
// tanpa perlu menulis ulang struktur <li> dan <a> berkali-kali.
const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

// Breakpoint mobile disamakan dengan ukuran md Tailwind CSS, yaitu 768px.
const MOBILE_BREAKPOINT = 768;

// Menu mobile akan muncul setelah user melakukan scroll lebih dari 150px.
const SCROLL_THRESHOLD = 150;

// Class link dibuat satu kali karena semua item navigasi memakai style yang sama.
// Ini membuat JSX lebih ringkas dan mengurangi duplikasi kode.
const linkClassName =
  "relative md:px-3 md:py-1 text-base md:text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  // State ini menyimpan status apakah menu mobile sedang terlihat atau tidak.
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    // Fungsi ini mengecek ukuran layar dan posisi scroll user.
    const handleScroll = () => {
      // Navbar hanya memakai behavior muncul/hilang pada layar mobile.
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

      // Menu terlihat hanya jika layar mobile dan posisi scroll melewati batas.
      setIsMenuVisible(isMobile && window.scrollY > SCROLL_THRESHOLD);
    };

    // Event scroll dipakai untuk mengubah visibility menu saat user menggulir halaman.
    window.addEventListener("scroll", handleScroll);

    // Event resize dipakai agar status menu tetap benar saat ukuran layar berubah.
    window.addEventListener("resize", handleScroll);

    // Dipanggil sekali saat komponen pertama kali dirender agar state langsung sesuai kondisi halaman.
    handleScroll();

    // Cleanup wajib dilakukan agar event listener tidak menumpuk saat komponen dilepas.
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar flex justify-between items-center py-8">
      {/* Bagian logo website. */}
      <div className="logo">
        <h1 className="text-2xl font-bold bg-white md:bg-transparent text-black md:text-white p-1 md:p-0">
          MyPortfolio
        </h1>
      </div>

      {/* Bagian daftar navigasi utama. */}
      <div className="nav-menu">
        <ul
          // aria-label membantu screen reader memahami fungsi daftar link ini.
          aria-label="Navigasi utama"
          className={`flex space-x-4 md:space-x-6 lg:space-x-10 fixed md:static left-1/2 transition-all duration-150 ease-in-out transform -translate-x-1/2 md:translate-x-0 mt-4 py-4 px-6 rounded-full md:py-0 bg-white/30 md:bg-transparent backdrop-blur-xl z-40 md:top-0 md:opacity-100
                ${isMenuVisible ? "top-0 opacity-100" : "-top-20 opacity-0"}`}
        >
          {/* map digunakan untuk membuat item menu dari data NAV_LINKS secara otomatis. */}
          {NAV_LINKS.map((link) => (
            // key membantu React mengenali setiap item saat melakukan render ulang.
            <li key={link.href}>
              <a href={link.href} className={linkClassName}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}