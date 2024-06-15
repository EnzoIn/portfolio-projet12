import React from "react";
import Section from "./components/Section";
import Stacks from "./components/Stacks";

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
        <Section id="about" number="01" title="À propos">
        <div className="pt-5">
  <p className="text-lg max-w-xl">
    Salut ! Je suis Enzo Ingraito. Depuis mon plus jeune âge, les jeux vidéo et la technologie m'ont fasciné. Après 15 ans dans la restauration, j'ai décidé de changer de cap. J'ai toujours pensé que le monde du web et du code était hors de ma portée, mais j'ai décidé de me lancer.<br/><br/> Maintenant, je suis en plein dans cette nouvelle aventure. Chaque ligne de code que j'écris est une découverte, chaque projet une nouvelle opportunité d'apprentissage. Mon objectif ? Maîtriser le web et le développement informatique tout en trouvant un épanouissement total dans mes activités.
  </p>
  <h2 className="text-xl font-bold mt-5 mb-5">
    Voici quelques technologies avec lesquelles j'ai travaillé :
  </h2>
  <Stacks />
</div>
        </Section>
        <Section id="projects" number="02" title="Mes projets"></Section>
        <Section id="contact" number="03" title="Contact"></Section>
      </main>
    </>
  );
}