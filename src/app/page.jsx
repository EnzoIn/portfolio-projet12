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
      <main className="max-w-5xl px-4 mx-auto flex flex-col items-center justify-center gap-8 md:px-10">
        <section className=" pb-24 pt-20">
          <h1 className="text-m font-thin mb-4 text-primary opacity-0 translate-y-[50px] animate-intro1">
            Salut, je m&apos;appelle
          </h1>
          <h2 className="text-5xl font-bold mb-5 text-sky-200 md:text-6xl opacity-0 translate-y-[50px] animate-intro2">
            Enzo Ingraito.
          </h2>
          <h3 className="text-4xl font-semibold mb-5 text-sky-900 md:text-6xl md:mb-10 opacity-0 translate-y-[50px] animate-intro3">
            Accro aux pixels, je me passionne pour le Web.
          </h3>
          <p className="text-lg max-w-xl opacity-0 translate-y-[50px] animate-intro4">
            Je suis un développeur web junior passionné par la création pour le
            web. Récemment diplômé en tant qu&apos;intégrateur web, je suis motivé
            pour mettre en pratique mes compétences et apprendre de nouvelles
            technologies.
          </p>
        </section>
        <Section id="about" number="01" title="À propos">
          <div className="pt-5 md:flex">
            <div>
            <p className="text-lg max-w-xl">
              Salut ! Je suis Enzo Ingraito. Depuis mon plus jeune âge, les jeux
              vidéo et la technologie m&apos;ont fasciné. Après 15 ans dans la
              restauration, j&apos;ai décidé de changer de cap. J&apos;ai toujours pensé
              que le monde du web et du code était hors de ma portée, mais j&apos;ai
              décidé de me lancer.
              <br />
              <br /> Maintenant, je suis en plein dans cette nouvelle aventure.
              Chaque ligne de code que j&apos;écris est une découverte, chaque projet
              une nouvelle opportunité d&apos;apprentissage. Mon objectif ? Maîtriser
              le web et le développement informatique tout en trouvant un
              épanouissement total dans mes activités.
            </p>
            <h2 className="text-xl font-bold mt-5 mb-5">
              Voici quelques technologies avec lesquelles j&apos;ai travaillé :
            </h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-0">
            <Stacks />
            </div>
           </div>
            <div className="flex items-center justify-center mt-16 md:ml-12  md:items-start">
              <PortraitFrame />
            </div>
          </div>
        </Section>
        <Section id="projects" number="02" title="Mes projets"></Section>
        {mobile ? <ProjectsMobile /> : <Projects />}
        <Section id="contact" number="03" title="Contact">
          <div className="flex flex-col items-center text-center w-full pt-11">
            <p className=" mb-9 max-w-lg">
              Je suis actuellement à la recherche d&apos;opportunités de travail pour
              acquérir de l&apos;expérience et continuer à développer mes
              compétences. Si vous avez des projets ou des offres d&apos;emploi qui
              pourraient correspondre à mon profil, n&apos;hésitez pas à me
              contacter. Je serais ravi de discuter avec vous !
            </p>
            <Button
              text="Contactez moi !"
              onClick={() => (window.location.href = "enzo.ingraito@gmail.com")}
            />
          </div>
        </Section>
      </main>
    </>
  );
}
