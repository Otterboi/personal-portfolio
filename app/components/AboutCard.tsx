import Image from "next/image";
import { Container } from "./Container";

export default function AboutCard() {
  return (
    <Container>
      <div className="card flex flex-col md:flex-row shadow-sm border border-slate-200 rounded-lg my-6 w-full overflow-hidden">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="profile picture"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-between p-6 md:p-10">
          <div>
            <h4 className="mb-2 text-2xl md:text-3xl font-semibold ">
              About Me
            </h4>

            <p className="muted-text text-sm md:text-base font-semibold uppercase">
              Software Developer
            </p>

            <p className="text-base md:text-lg mt-4 md:mt-6 font-light leading-relaxed">
              Hi, I’m Natalie Paisley — a software developer passionate about building clean,
              efficient, and user-friendly applications. I enjoy solving problems and turning ideas
              into real-world projects.
              <br /><br />
              I specialize in full-stack development and enjoy working across frontend and backend systems.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            GitHub
          </a>
          <a href="#" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="button rounded-md py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            Email
          </a>
          </div>
        </div>
      </div>
    </Container>
  );
}