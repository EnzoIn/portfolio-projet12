import Link from "next/link";
import InstagramIcon from "../../../public/icon/InstagramIcon";
import LinkedinIcon from "../../../public/icon/LinkedinIcon";
import GithubIcon from "../../../public/icon/GithubIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-20 pb-10">
      <div className="flex gap-9 mb-5 custom:hidden">
        <Link href="https://github.com/EnzoIn" aria-label="Github"> <GithubIcon /> </Link>
        <Link href="https://www.linkedin.com/in/enzo-ingraito-8694692b3" aria-label="LinkedIn"> <LinkedinIcon /> </Link>
        <Link href="https://www.instagram.com/enzo_in/" aria-label="Instagram"> <InstagramIcon /> </Link>
      </div>
      <h4 className=" font-thin text-primary text-sm">
        © 2024 - Enzo Ingraito
      </h4>
    </footer>
  );
};

export default Footer;
