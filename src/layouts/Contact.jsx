export default function Contact() {
  return (
    <section>
      <div className="contact mt-32 py-10" id="kontak">
        <h1
          className="text-2xl md:text-4xl font-bold mb-2 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-sm/relaxed md:text-base/loose opacity-60 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi saya!
        </p>
        <form
          action="https://formsubmit.co/adityawangsaa@gmail.com"
          method="POST"
          className="bg-zinc-800 p-8 sm:p-10 w-full sm:w-fit mx-auto rounded-md mt-10"
          autoCapitalize="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            {/* Input name */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="Nama"
                placeholder="Masukkan Nama..."
                className="text-sm md:text-base border border-zinc-500 px-4 py-2 rounded-md bg-zinc-700 outline-none focus:outline-violet-500 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all"
                required
              ></input>
            </div>
            {/* Input email */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-semibold">Masukkan Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 px-4 py-2 rounded-md bg-zinc-700 outline-none focus:outline-violet-500 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all"
                required
              ></input>
            </div>
            {/* Input message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-base font-semibold">
                Masukkan Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="text-sm md:text-base border border-zinc-500 px-4 py-2 rounded-md bg-zinc-700 outline-none focus:outline-violet-500 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all"
                required
              ></textarea>
            </div>
            {/* Input name */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-4 rounded-lg cursor-pointer border border-zinc-500 hover:bg-violet-600 active:bg-violet-800 w-full"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
