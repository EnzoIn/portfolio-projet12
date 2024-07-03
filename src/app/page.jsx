"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Loader from "./components/Loader";
import PortraitFrame from "./components/PortraitFrame";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Stacks from "./components/Stacks";
import ProjectsMobile from "./components/ProjectsMobile";

export default function Home() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Loader />
      <main className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 md:px-10">
        <section className="pb-24 pt-20">
          <h1 className="text-m animate-intro1 mb-4 translate-y-[50px] font-thin text-primary opacity-0">
            Salut, je m&apos;appelle
          </h1>
          <h2 className="animate-intro2 mb-5 translate-y-[50px] text-5xl font-bold text-sky-200 opacity-0 md:text-6xl">
            Enzo Ingraito.
          </h2>
          <h3 className="animate-intro3 mb-5 translate-y-[50px] text-4xl font-semibold text-sky-900 opacity-0 md:mb-10 md:text-6xl">
            Accro aux pixels, je me passionne pour le Web.
          </h3>
          <p className="animate-intro4 max-w-xl translate-y-[50px] text-lg opacity-0">
            Je suis un développeur web junior passionné par la création pour le
            web. Récemment diplômé en tant qu&apos;intégrateur web, je suis
            motivé pour mettre en pratique mes compétences et apprendre de
            nouvelles technologies.
          </p>
        </section>
        <Section id="about" number="01" title="À propos">
          <div className="pt-5 md:flex">
            <div>
              <p className="max-w-xl text-lg">
                Salut ! Je suis Enzo Ingraito. Depuis mon plus jeune âge, les
                jeux vidéo et la technologie m&apos;ont fasciné. Après 15 ans
                dans la restauration, j&apos;ai décidé de changer de cap.
                J&apos;ai toujours pensé que le monde du web et du code était
                hors de ma portée, mais j&apos;ai décidé de me lancer.
                <br />
                <br /> Maintenant, je suis en plein dans cette nouvelle
                aventure. Chaque ligne de code que j&apos;écris est une
                découverte, chaque projet une nouvelle opportunité
                d&apos;apprentissage. Mon objectif ? Maîtriser le web et le
                développement informatique tout en trouvant un épanouissement
                total dans mes activités.
              </p>
              <h2 className="mb-5 mt-5 text-xl font-bold">
                Voici quelques technologies avec lesquelles j&apos;ai travaillé
                :
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:px-0 lg:grid-cols-3">
                <Stacks />
              </div>
            </div>
            <div className="mt-16 flex items-center justify-center md:ml-12 md:items-start">
              <PortraitFrame />
            </div>
          </div>
        </Section>
        <Section id="projects" number="02" title="Mes projets"></Section>
        {mobile ? <ProjectsMobile /> : <Projects />}
        <Section id="contact" number="03" title="Contact">
          <div className="flex w-full flex-col items-center pt-11 text-center">
            <p className="mb-9 max-w-lg">
              Je suis actuellement à la recherche d&apos;opportunités de travail
              pour acquérir de l&apos;expérience et continuer à développer mes
              compétences. Si vous avez des projets ou des offres d&apos;emploi
              qui pourraient correspondre à mon profil, n&apos;hésitez pas à me
              contacter. Je serais ravi de discuter avec vous !
            </p>
            <Button
              text="Contactez moi !"
              onClick={() =>
                (window.location.href = "mailto:enzo.ingraito@gmail.com")
              }
            />
          </div>
        </Section>
      </main>
    </>
  );
}
