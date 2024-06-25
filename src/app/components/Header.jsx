"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <header className="flex justify-between px-4 py-10 font-thin text-sm md:px-10 custom:px-24">
        <Logo />
        <nav className="hidden md:flex items-center">
          <ul className="flex mr-5">
            <li className="p-2.5 hover:text-primary opacity-0 translate-y-[-50px] animate-header1">
              <Link href="#about">
                <span className="text-primary">01.</span> À propos
              </Link>
            </li>
            <li className="p-2.5 hover:text-primary opacity-0 translate-y-[-50px] animate-header2">
              <Link href="#projects">
                <span className="text-primary">02.</span> Mes projets
              </Link>
            </li>
            <li className="p-2.5 hover:text-primary opacity-0 translate-y-[-50px] animate-header3">
              <Link href="#contact">
                <span className="text-primary">03.</span> Contact
              </Link>
            </li>
          </ul>
          <div className="opacity-0 translate-y-[-50px] animate-header4">
            <Button
              text="CV"
              onClick={() =>
                (window.location.href = "/assets/cv-enzo-ingraito.pdf")
              }
            />
          </div>
        </nav>
        <button
          className="md:hidden p-2.5 hover:text-primary flex flex-col items-end"
          onClick={toggleModal}
        >
          <div className="w-9 h-0.5 bg-primary rounded mb-2"></div>
          <div className="w-7 h-0.5 bg-primary rounded mb-2"></div>
          <div className="w-6 h-0.5 bg-primary rounded"></div>
        </button>
      </header>

      <div
        className={`fixed inset-0 flex justify-end transition-transform transform duration-500 ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`bg-black bg-opacity-5 w-full h-full backdrop-blur-sm ${
            modalOpen ? "transition-opacity duration-500 delay-500 opacity-100" : "opacity-0"
          }`}
          onClick={toggleModal}
        ></div>
        <div className="bg-background h-full w-3/4 max-w-xs border-l border-muted-foreground shadow-lg p-5">
          <div className="flex justify-end">
            <button className="text-primary text-2xl" onClick={toggleModal}>
              X
            </button>
          </div>
          <nav className="flex flex-col items-center justify-evenly h-full text-xl font-thin text-center">
            <ul>
              <li className="p-2.5 hover:text-primary mb-4">
                <Link
                  className="flex flex-col items-center"
                  href="#about"
                  onClick={toggleModal}
                >
                  <span className="text-primary">01.</span> À propos
                </Link>
              </li>
              <li className="p-2.5 hover:text-primary mb-4">
                <Link
                  className="flex flex-col items-center"
                  href="#projects"
                  onClick={toggleModal}
                >
                  <span className="text-primary">02.</span> Mes projets
                </Link>
              </li>
              <li className="p-2.5 hover:text-primary">
                <Link
                  className="flex flex-col items-center"
                  href="#contact"
                  onClick={toggleModal}
                >
                  <span className="text-primary">03.</span> Contact
                </Link>
              </li>
            </ul>
            <Button
              text="CV"
              onClick={() => {
                window.location.href = "/assets/cv-enzo-ingraito.pdf";
                toggleModal();
              }}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
