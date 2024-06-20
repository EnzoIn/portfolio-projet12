"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GithubIcon from "../../../public/icon/GithubIcon";
import InstagramIcon from "../../../public/icon/InstagramIcon";
import LinkedinIcon from "../../../public/icon/LinkedinIcon";

const SideBar = ({ social }) => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!desktop) {
    return (
      <>
        {social ? (
          <div className="flex flex-col px-10 fixed items-center bottom-0">
            <div className="flex flex-col items-center justify-end gap-5 mb-5">
              <Link
                href="https://github.com/EnzoIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/enzo-ingraito-8694692b3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href="https://www.instagram.com/enzo_in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
            </div>
            <div className="h-40 w-px bg-muted-foreground"></div>
          </div>
        ) : (
          <div className="flex flex-col w-5 px-10 fixed items-center bottom-0 right-0">
            <div className="flex items-center justify-end mb-24 rotate-90 hover:text-primary">
              <Link
                href="mailto:enzo.ingraito@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <p>enzo.ingraito@gmail.com</p>
              </Link>
            </div>
            <div className="h-20 w-px bg-muted-foreground"></div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export default SideBar;
