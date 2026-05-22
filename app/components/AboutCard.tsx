import Image from "next/image";
import { Container } from "./Container";

export default function AboutCard() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-full overflow-hidden">
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
            <h4 className="mb-2 text-2xl md:text-3xl font-semibold text-slate-800">
              About Me
            </h4>

            <p className="text-sm md:text-base font-semibold text-slate-500 uppercase">
              Software Developer
            </p>

            <p className="text-base md:text-lg text-slate-600 mt-4 md:mt-6 font-light leading-relaxed">
              Hi, I’m Natalie Paisley — a software developer passionate about building clean,
              efficient, and user-friendly applications. I enjoy solving problems and turning ideas
              into real-world projects.
              <br /><br />
              I specialize in full-stack development and enjoy working across frontend and backend systems.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="rounded-md bg-slate-800 py-3 px-6 text-sm text-white shadow-md hover:bg-slate-700 transition">
              Contact Me
            </button>

            <button className="rounded-md border border-slate-300 py-3 px-6 text-sm text-slate-700 hover:bg-slate-100 transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}