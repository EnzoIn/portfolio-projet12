import Link from "next/link";
import InstagramIcon from "../../../public/icon/InstagramIcon";
import LinkedinIcon from "../../../public/icon/LinkedinIcon";
import GithubIcon from "../../../public/icon/GithubIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-10 pt-20">
      <div className="mb-5 flex gap-9 custom:hidden">
        <Link
          className="hover:fill-primary"
          href="https://github.com/EnzoIn"
          aria-label="Github"
        >
          {" "}
          <GithubIcon />{" "}
        </Link>
        <Link
          className="hover:fill-primary"
          href="https://www.linkedin.com/in/enzo-ingraito-8694692b3"
          aria-label="LinkedIn"
        >
          {" "}
          <LinkedinIcon />{" "}
        </Link>
        <Link
          className="hover:fill-primary"
          href="https://www.instagram.com/enzo_in/"
          aria-label="Instagram"
        >
          {" "}
          <InstagramIcon />{" "}
        </Link>
      </div>
      <h4 className="text-sm font-thin text-primary">
        © 2024 - Enzo Ingraito
      </h4>
    </footer>
  );
};

export default Footer;
