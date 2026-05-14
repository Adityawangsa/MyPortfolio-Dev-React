import DataImage from "./data";

export default function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 items-center md:grid-cols-2 gap-10 pt-10">
        {/* Content text */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
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
          />
        </div>
      </div>
    </>
  );
}
