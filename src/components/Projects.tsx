import Divider from "./Divider";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { projects, featured } from "../values";

function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-full">
        <Divider number={"02"} title={"Some things I've built"} />
        {featured.map((item, index) => (
          <FeaturedProject
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            tags={item.tags}
            reverse={(index + 1) % 2 == 0}
          />
        ))}

        <h3 className="text-center text-2xl text-accent font-semibold my-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;