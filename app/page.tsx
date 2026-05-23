import AboutCard from "./components/AboutCard";
import { Container } from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import projects from "./dependencies/projects.json"

export default function Home() {
  return (
    <div className="">
      <main className="pt-13">
        <Header />
        
        <section id="home" className="scroll-mt-24">
          <AboutCard />
        </section>

        <section id="skills" className="scroll-mt-10">
          <Skills />
        </section>

        <section id="projects">
          <Container>
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
          </Container>
        </section>

        <Footer />
      </main>
    </div>
  );
}
