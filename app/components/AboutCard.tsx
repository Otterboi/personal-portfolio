import Image from "next/image";
import { Container } from "./Container";

export default function AboutCard() {
  return (
    <Container>
      <div className="card flex flex-col md:flex-row shadow-sm border border-slate-200 rounded-lg my-6 w-full overflow-hidden">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src="./me.jpg"
            alt="profile picture"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-between p-6 md:p-10">
          <div>
            <h4 className="mb-2 text-2xl md:text-3xl font-semibold ">
              Joseph Pagliuca
            </h4>

            <p className="muted-text text-sm md:text-base font-semibold uppercase">
              Software Developer
            </p>

            <p className="text-base md:text-lg mt-4 md:mt-6 font-light leading-relaxed">
              I have a strong foundation in object-oriented programming and full-stack development.
              I am more comfortable with backend programming, but I am also open to working on frontend
              tasks. 
              <br/><br/>
              To me, software development is like solving a puzzle. I enjoy finding all the pieces
              and building scalable, efficient and reliable applications.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="https://github.com/Otterboi" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joseph-pagliuca-9ba852183/" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            LinkedIn
          </a>
          <a href="mailto:jpagliuca98@gmail.com" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            Email
          </a>
          </div>
        </div>
      </div>
    </Container>
  );
}