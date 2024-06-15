import React from "react";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl px-4 mx-auto flex flex-col items-center justify-center gap-8 md:px-10">
        <section className="">
          <h1 className="text-m font-thin mb-4 text-primary">
            Salut, je m'appelle
          </h1>
          <h2 className="text-5xl font-bold mb-4 text-sky-200 md:text-6xl">
            Enzo Ingraito.
          </h2>
          <h3 className="text-4xl font-semibold mb-5 text-sky-900 md:text-6xl md:mb-10 ">
            Accro aux pixels, je me passionne pour le Web.
          </h3>
          <p className="text-lg max-w-xl">
            Je suis un développeur web junior passionné par la création pour le
            web. Récemment diplômé en tant qu'intégrateur web, je suis motivé
            pour mettre en pratique mes compétences et apprendre de nouvelles
            technologies.
          </p>
        </section>
        <Section id="#about" number="01" title="À propos"></Section>
        <Section id="#projects" number="02" title="Mes projets"></Section>
        <Section id="#about" number="01" title="Contact"></Section>
      </main>
    </>
  );
}

{
  /*<container>
          <section id="about">
            <h2>
              <span>01.</span> À propos
            </h2>
          </section>

          <section id="stacks">
            <h2>
              <span>02.</span> Stacks/Soft Skills
            </h2>
          </section>

          <section id="projects">
            <h2>
              <span>03.</span> Mes projets
            </h2>
          </section>

          <section id="contact">
            <h2>
              <span>04.</span> Contact
            </h2>
          </section>
  </container>*/
}
