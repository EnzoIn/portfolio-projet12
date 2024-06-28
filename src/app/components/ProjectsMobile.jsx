import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/icon/GithubIcon";
import LinkIcon from "../../../public/icon/LinkIcon";
import Stacks from "./Stacks";
import projectsData from "../../../public/data/projectsData.json";

const ProjectsMobile = () => {
  return (
    <>
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="relative w-full h-full mb-12 sm:px-20"
          >
            <div className="z-0"></div>
            <Image
              className="absolute top-0 left-0 w-full h-full object-fill filter grayscale-[100%] sm:px-20"
              src={project.image}
              alt={project.alt}
              width={500}
              height={500}
              priority
            />
            <div className="flex flex-col items-start justify-start p-5 gap-3 bg-card border border-border z-20 opacity-85">
              <h2 className="font-bold text-primary text-xl">
                {project.title}
              </h2>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap">
                <Stacks stacks={project.stacks} />
              </div>
              <div className="flex gap-5 mr-2">
                <Link
                  className="hover:fill-primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <GithubIcon />
                </Link>
                {project.link && (
                  <Link
                    className="hover:fill-primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lien"
                  >
                    <LinkIcon />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </>
  );
};

export default ProjectsMobile;