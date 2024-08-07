import Image from "next/image";
import PropTypes from "prop-types";

const Stacks = ({ stacks }) => {
  const allStacksData = [
    { name: "HTML/CSS", svg: "/icon/htmlcss-icon.svg" },
    { name: "SASS", svg: "/icon/sass-icon.svg" },
    { name: "Javascript", svg: "/icon/javascript-icon.svg" },
    { name: "React", svg: "/icon/react-icon.svg" },
    { name: "Next.js", svg: "/icon/nextjs-icon.svg" },
    { name: "Node.js", svg: "/icon/nodejs-icon.svg" },
    { name: "Tailwind CSS", svg: "/icon/tailwindcss-icon.svg" },
    { name: "Swagger", svg: "/icon/swagger-icon.svg" },
    { name: "Redux", svg: "/icon/redux-icon.svg" },
    { name: "SEO", svg: "/icon/seo-icon.svg" },
  ];

  const filteredStacks = stacks
    ? allStacksData.filter((stack) => stacks.includes(stack.name))
    : allStacksData;

  return (
    <>
      {filteredStacks.map((stack, index) => (
        <div
          key={index}
          className="flex items-center rounded-xl border border-border bg-card px-2 py-1"
        >
          <Image
            src={stack.svg}
            alt={stack.name}
            width={20}
            height={20}
            className="size-10"
          />
          <h5 className="text-md ml-1 font-bold text-primary">{stack.name}</h5>
        </div>
      ))}
    </>
  );
};

Stacks.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.string),
};

export default Stacks;
