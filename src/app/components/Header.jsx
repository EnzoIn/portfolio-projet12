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
      <header className="flex justify-between px-4 py-10 text-sm font-thin md:px-10 custom:px-24">
        <Logo />
        <nav className="hidden items-center md:flex">
          <ul className="mr-5 flex">
            <li className="animate-header1 translate-y-[-50px] p-2.5 opacity-0 hover:text-primary">
              <Link href="#about">
                <span className="text-primary">01.</span> À propos
              </Link>
            </li>
            <li className="animate-header2 translate-y-[-50px] p-2.5 opacity-0 hover:text-primary">
              <Link href="#projects">
                <span className="text-primary">02.</span> Mes projets
              </Link>
            </li>
            <li className="animate-header3 translate-y-[-50px] p-2.5 opacity-0 hover:text-primary">
              <Link href="#contact">
                <span className="text-primary">03.</span> Contact
              </Link>
            </li>
          </ul>
          <div className="animate-header4 translate-y-[-50px] opacity-0">
            <Button
              text="CV"
              onClick={() =>
                (window.location.href = "/assets/cv-enzo-ingraito.pdf")
              }
            />
          </div>
        </nav>
        <button
          className="flex flex-col items-end p-2.5 hover:text-primary md:hidden"
          onClick={toggleModal}
        >
          <div className="mb-2 h-0.5 w-9 rounded bg-primary"></div>
          <div className="mb-2 h-0.5 w-7 rounded bg-primary"></div>
          <div className="h-0.5 w-6 rounded bg-primary"></div>
        </button>
      </header>

      <div
        className={`fixed inset-0 z-50 flex transform justify-end transition-transform duration-500 ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 z-40 h-full w-full bg-opacity-5 backdrop-blur-sm ${
            modalOpen
              ? "opacity-100 transition-opacity delay-500 duration-500"
              : "opacity-0"
          }`}
          onClick={toggleModal}
        ></div>
        <div className="z-40 h-full w-3/4 max-w-xs border-l border-muted-foreground bg-background p-5 shadow-lg">
          <div className="flex justify-end">
            <button className="text-2xl text-primary" onClick={toggleModal}>
              X
            </button>
          </div>
          <nav className="flex h-full flex-col items-center justify-evenly text-center text-xl font-thin">
            <ul>
              <li className="mb-4 p-2.5 hover:text-primary">
                <Link
                  className="flex flex-col items-center"
                  href="#about"
                  onClick={toggleModal}
                >
                  <span className="text-primary">01.</span> À propos
                </Link>
              </li>
              <li className="mb-4 p-2.5 hover:text-primary">
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
