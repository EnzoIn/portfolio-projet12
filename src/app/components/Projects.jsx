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
        }
      );
    });
  }, [projectsData]);

  return (
    <>
      {projectsData.map((project) => (
        <article
          ref={(el) => projectsRef.current.push(el)}
          key={project.id}
          className={`flex items-start justify-start relative w-full h-full mb-12 ${
            project.id % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div className="w-96 h-80 group relative">
            <div className="w-96 h-80 absolute bg-primary rounded-lg z-10 opacity-50 group-hover:bg-transparent transition-all duration-300"></div>
            <Image
              className="absolute top-0 left-0 w-full h-full object-fill rounded-lg filter grayscale-[100%] group-hover:filter-none transition-all duration-300"
              src={project.image}
              alt={project.alt}
              width={500}
              height={500}
              priority
            />
          </div>
          <div
            className={`flex flex-col z-30 top-0 gap-2.5 absolute ${
              project.id % 2 === 0
                ? "items-start right-[20rem]"
                : "items-end left-[20rem]"
            }`}
          >
            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
            <div className="w-full h-auto border border-border rounded-lg bg-card p-6">
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex">
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
    })
  ).isRequired,
};
