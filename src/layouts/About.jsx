import DataImage from "../data";
import { listTools } from "../data";

export default function About() {
  return (
    <section>
      <div className="about mt-32 py-10" id="tentang">
        {/* Kotak informasi about (deskripsi diri sendiri) */}
        <div
          className="w-full md:3/4 xl:w-2/3 mx-auto p-8 bg-zinc-800 rounded-lg animate__animated animate__fadeInUp animate__delay-4s"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
          <h1
            className="text-2xl/snug md:text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 text-sm/relaxed md:text-base/loose opacity-60"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website ataupun desain.
          </p>
          {/* Informasi beberapa tools */}
          <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listTools.map((tool, index) => (
              <div
                className="group flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000ms"
                data-aos-delay={index * 100}
                data-aos-once="true"
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
    </section>
  );
}
