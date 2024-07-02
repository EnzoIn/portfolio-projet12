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
          className="relative mb-12 h-full w-full sm:px-20"
        >
          <div className="z-0"></div>
          <Image
            className="absolute left-0 top-0 h-full w-full object-fill grayscale-[100%] filter sm:px-20"
            src={project.image}
            alt={project.alt}
            width={500}
            height={500}
            priority
          />
          <div className="z-20 flex flex-col items-start justify-start gap-3 border border-border bg-card p-5 opacity-85">
            <h2 className="text-xl font-bold text-primary">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap">
              <Stacks stacks={project.stacks} />
            </div>
            <div className="mr-2 flex gap-5">
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
