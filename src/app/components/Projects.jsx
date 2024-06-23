import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import projectsData from "/Users/skyfax/Desktop/portfolio-projet12/public/data/projectsData.json";
import GithubIcon from "../../../public/icon/GithubIcon";
import LinkIcon from "../../../public/icon/LinkIcon";

const Projects = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (mobile) {
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
            />
            <div className="flex flex-col items-start justify-start p-5 gap-3 bg-card border border-border z-20 opacity-85">
              <h2 className="font-bold text-primary text-xl">
                {project.title}
              </h2>
              <p className="text-muted-foreground">{project.description}</p>
              <h3 className="text-primary">{project.stack}</h3>
              <div className="flex gap-5 mr-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <GithubIcon />
                </Link>
                {project.link && (
                  <Link
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
  }

  return (
    <>
      {projectsData.map((project) => (
        <article
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
            <div className=" w-full h-auto border border-border rounded-lg bg-card p-6">
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex items-center justify-center bg-card border py-1 px-2 border-border rounded-lg">
              <div className="text-primary">{project.stack}</div>
            </div>
            <div className="flex  gap-5 mr-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GithubIcon />
              </Link>
              {project.link && (
                <Link
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

Projects.propTypes = {
  mobile: PropTypes.bool,
  projectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
};

export default Projects;
