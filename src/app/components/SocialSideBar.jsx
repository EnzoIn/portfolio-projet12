import Link from "next/link";
import GithubIcon from "../../../public/icon/GithubIcon";
import InstagramIcon from "../../../public/icon/InstagramIcon";
import LinkedinIcon from "../../../public/icon/LinkedinIcon";

const SocialSideBar = () => {
  return (
    <div className=" hidden custom:flex flex-col px-10 fixed items-center bottom-0 opacity-0 animate-sidebar">
      <div className="flex flex-col items-center justify-end gap-5 mb-5">
        <Link
          className="hover:fill-primary"
          href="https://github.com/EnzoIn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GithubIcon />
        </Link>
        <Link
          className="hover:fill-primary"
          href="https://www.linkedin.com/in/enzo-ingraito-8694692b3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </Link>
        <Link
          className="hover:fill-primary"
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
  );
};

export default SocialSideBar;
