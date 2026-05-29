import AboutCard from "./components/AboutCard";
import { Container } from "./components/Container";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import projects from "./dependencies/projects.json"
import { Folder, Settings } from "lucide-react"


export default function Home() {
  return (
    <div className="px-6 sm:px-8 lg:px-12">
      <main className="pt-13">
        <Header />
        
        <section id="home" className="scroll-mt-24">
          <AboutCard />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Container>
            <div className="mb-3 mt-9">
              <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
                <Settings size={35}/>
                Skills & Technologies
              </h2>

              <p className="muted-text mt-2 text-sm sm:text-base">
                Technologies and tools I am experianced with.
              </p>
            </div>
            <Skills />
          </Container>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Container>
            <div className="mb-1 mt-12">
              <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
                <Folder size={35}/>
                Projects
              </h2>

              <p className="muted-text mt-2 text-sm sm:text-base">
                Projects and assignments I have completed and contributed to.
              </p>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {projects.map((project, index) => (
                <ProjectList 
                key={index} 
                name={project.project_name}
                description={project.project_description}
                link={project.project_link}
                visibility={project.visibility}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
