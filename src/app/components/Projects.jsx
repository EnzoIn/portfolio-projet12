import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import GithubIcon from "../../../public/icon/GithubIcon";
import LinkIcon from "../../../public/icon/LinkIcon";
import Stacks from "./Stacks";
import projectsData from "../../../public/data/projectsData.json";

const Projects = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    projectsRef.current.forEach((project, index) => {
      const direction = index % 2 === 0 ? 1 : -1;

      gsap.fromTo(
        project,
        { x: 1000 * direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <>
      {projectsData.map((project) => (
        <article
          ref={(el) => projectsRef.current.push(el)}
          key={project.id}
          className={`relative sm:mb-40 lg:mb-12 flex h-full w-full items-start justify-start ${
            project.id % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div className="group relative h-80 w-96">
            <div className="absolute z-10 h-80 w-96 rounded-lg bg-primary opacity-50 transition-all duration-300 group-hover:bg-transparent"></div>
            <Image
              className="absolute left-0 top-0 h-full w-full rounded-lg object-fill grayscale-[100%] filter transition-all duration-300 group-hover:filter-none"
              src={project.image}
              alt={project.alt}
              width={500}
              height={500}
              priority
            />
          </div>
          <div
            className={`absolute top-0 z-30 flex flex-col gap-2.5 ${
              project.id % 2 === 0
                ? "right-[20rem] items-start"
                : "left-[20rem] items-end"
            }`}
          >
            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
            <div className="h-auto w-full rounded-lg border border-border bg-card p-6">
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex">
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

export default Projects;

Projects.propTypes = {
  projectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};
