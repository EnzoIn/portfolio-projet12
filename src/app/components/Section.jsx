import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Section = ({ id, number, title, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-4xl py-20 lg:px-4"
      id={id}
    >
      <h4 className="flex items-center text-xl md:text-2xl">
        <span className="mr-2 font-thin text-primary md:text-2xl">
          {number}.
        </span>{" "}
        {title}
        <span className="ml-4 h-px flex-grow rounded bg-muted-foreground md:max-w-80"></span>
      </h4>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
