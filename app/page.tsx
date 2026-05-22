import AboutCard from "./components/AboutCard";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import projects from "./dependencies/projects.json"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <AboutCard />
        
        <div className="mb-2 mt-9">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Skills & Technologies
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Technologies and tools I have experiance with.
          </p>
        </div>

        <Skills />

        <div className="mb-1 mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Projects
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Projects that I have worked on as a developper.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <ProjectList 
            key={index} 
            name={project.project_name}
            description={project.project_description}
            link={project.project_link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
