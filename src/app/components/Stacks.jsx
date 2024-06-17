const Stacks = ({ stackName }) => {
  const stacksData = [
    { name: "HTML/CSS", svg: "/icon/htmlcss-icon.svg" },
    { name: "SASS", svg: "/icon/sass-icon.svg" },
    { name: "Javascript", svg: "/icon/javascript-icon.svg" },
    { name: "React", svg: "/icon/react-icon.svg" },
    { name: "Next.js", svg: "/icon/nextjs-icon.svg" },
    { name: "Node.js", svg: "/icon/nodejs-icon.svg" },
    { name: "Tailwind CSS", svg: "/icon/tailwindcss-icon.svg" },
    { name: "Swagger", svg: "/icon/swagger-icon.svg" },
    { name: "Redux", svg: "/icon/redux-icon.svg" }
  ];

  const filteredStacks = stackName
    ? stacksData.filter(stack => stack.name.toLowerCase() === stackName.toLowerCase())
    : stacksData;

  return (
    <div className="grid grid-cols-1 px-14 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-0">
      {filteredStacks.map((stack, index) => (
        <div key={index} className="flex items-center border border-border bg-card rounded-xl px-2 py-1">
          <img src={stack.svg} alt={stack.name} className="size-10" />
          <h5 className="text-md font-bold text-primary ml-1">{stack.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Stacks;