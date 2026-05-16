import ProjectList from "./components/ProjectList";
import projects from "./projects/projects.json"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="grid grid-cols-3 gap-5">
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
