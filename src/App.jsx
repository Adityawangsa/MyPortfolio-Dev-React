import DataImage from "./data";
import { listTools, listProyek } from "./data";

export default function App() {
  return (
    <>
      {/* Hero section */}
      <div className="hero grid grid-cols-1 items-center md:grid-cols-2 gap-10 pt-10">
        {/* Content text */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan. 😁</q>
          </div>
          <h1 className="text-4xl/tight lg:text-5xl/tight font-bold mb-6">
            Hai, Saya Adityawangsa
          </h1>
          <p className="text-sm/loose font-medium mb-6 opacity-60 md:text-base/loose">
            Saya mempunyai ketertarikan dalam bidang Programing, Fotografi dan
            Desainer, terutama pada pembuatan website dan desain seperti poster,
            pamflet, serta banner. Ketertarikan pada bidang ini sudah
            berlangsung lebih dari 6 tahun semenjak awal masuk Madrasah Aliyah.
          </p>
          {/* Ikon gambar */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 bg-violet-700 py-4 px-6 rounded-2xl hover:bg-violet-600 transition">
              <a href="#" className="text-sm md:text-base">
                Download CV
              </a>
              <i className="ri-download-line ri-lg"></i>
            </div>
            <div className="flex items-center space-x-2 bg-zinc-700 py-4 px-6 rounded-2xl hover:bg-zinc-600 transition">
              <a href="#" className="text-sm md:text-base">
                Lihat Proyek
              </a>
              <i className="ri-arrow-down-line ri-lg"></i>
            </div>
          </div>
        </div>
        {/* Content image */}
        <div className="flex items-end justify-center md:justify-end">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[330px] md:w-full lg:w-[500px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* About section */}
      <div className="about mt-32 py-10">
        {/* Kotak informasi about (deskripsi diri sendiri) */}
        <div className="w-full md:3/4 xl:w-2/3 mx-auto p-8 bg-zinc-800 rounded-lg">
          {/* Deskripsi diri */}
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="block sm:hidden w-12 rounded-md mb-6"
            loading="lazy"
          />
          <p className="text-sm/relaxed md:text-base/loose mb-10">
            Hi, perkenalkan saya Adityawangsa, seorang Fullstack Web Developer,
            Fotografer, dan Desainer untuk UI/UX Desain maupun Produk Digital.
            Saya Percaya bahwa desain dan fungsionalitas harus berjalan
            beriringan sehingga setiap proyek yang saya kembangkan tidak hanya
            terlihat menarik, tetapi juga memberikan pengalaman pengguna yang
            optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="hidden sm:block w-12 rounded-md"
            />
            <div className="flex items-center space-x-6">
              {/* Deskripsi mini */}
              <div>
                <h1 className="text-2xl md:text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              {/* Deskripsi mini */}
              <div>
                <h1 className="text-2xl md:text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* Kotak informasi about (beberapa keahlian) */}
        <div className="tools mt-32">
          <h1 className="text-2xl/snug md:text-4xl/snug font-bold mb-4">
            Tools yang dipakai
          </h1>
          <p className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 text-sm/relaxed md:text-base/loose opacity-60">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website ataupun desain.
          </p>
          {/* Informasi beberapa tools */}
          <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listTools.map((tool, index) => (
              <div
                className="group flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={index}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project section */}
      <div className="project mt-32 py-10">
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-2">
          Proyek
        </h1>
        <p className="text-center text-sm md:text-base/loose opacity-60">
          Berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="project-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {/* Looping project */}
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-4 bg-zinc-800 rounded-md"
            >
              <img src={project.gambar} alt="Gambar projek" loading="lazy" />
              <div className="my-4">
                <h1 className="text-lg md:text-2xl font-bold mb-4">
                  {project.nama}
                </h1>
                <p className="text-sm/relaxed md:text-base/relaxed opacity-60">
                  {project.desk}
                </p>
              </div>
              {/* Looping tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-violet-700 p-4 rounded-lg block border border-zinc-500 hover:bg-violet-600"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
