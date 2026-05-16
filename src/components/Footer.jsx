export default function Footer() {
  return (
    <footer className="mt-32 py-4 flex flex-col gap-4 justify-between items-center md:flex-row">
      <h1 className="text-xl md:text-2xl font-bold">MyPortfolio</h1>
      {/* Membuat bungkus untuk menu-menu footer yang akan saya buat, agar lebih mudah untuk mengatur tata letak dan desainnya. Saya akan menggunakan elemen <footer> untuk menandai bagian bawah halaman web saya, dan di dalamnya saya akan menambahkan beberapa elemen seperti teks, tautan, atau ikon media sosial sesuai kebutuhan. Dengan menggunakan CSS, saya dapat mengatur tampilan footer agar sesuai dengan desain keseluruhan situs web saya, seperti memberikan latar belakang yang kontras, mengatur jarak antar elemen, dan memastikan bahwa footer tetap responsif di berbagai perangkat. */}
      <div className="flex space-x-7">
        <a href="#" className="font-medium hover:text-violet-500">
          Beranda
        </a>
        <a href="#tentang" className="font-medium hover:text-violet-500">
          Tentang
        </a>
        <a href="#proyek" className="font-medium hover:text-violet-500">
          Proyek
        </a>
      </div>
      {/* Ikon media sosial */}
      <div className="flex space-x-3">
        {/* Github icon */}
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        {/* Instagram icon */}
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        {/* Reddit icon */}
        <a href="#">
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        {/* Youtube icon */}
        <a href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </footer>
  );
}
