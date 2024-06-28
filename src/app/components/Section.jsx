import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="max-w-4xl w-full py-20 lg:px-4" id={id}>
      <h4 className="flex items-center font- text-xl md:text-2xl">
        <span className="text-primary font-thin md:text-2xl mr-2">{number}.</span> {title}
        <span className="h-px flex-grow rounded bg-muted-foreground ml-4 md:max-w-80"></span>
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
