import { listProyek } from "../data";

export default function Project() {
  return (
    <section>
      <div className="project mt-32 py-10" id="proyek">
        <h1
          className="text-center text-2xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-center text-sm md:text-base/loose opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="project-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {/* Looping project */}
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000ms"
              data-aos-delay={project.id * 100}
              data-aos-once="true"
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
    </section>
  );
}
