import AboutCard from "./components/AboutCard";
import ProjectList from "./components/ProjectList";
import projects from "./projects/projects.json"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <AboutCard />
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Projects
        </h2>
        
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
