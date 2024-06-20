const Section = ({ id, number, title, children }) => {
  return (
    <section className="max-w-4xl w-full py-20 lg:px-4" id={id}>
      <h4 className="flex items-center font- text-xl md:text-2xl">
        <span className="text-primary font-thin md:text-2xl mr-2">{number}.</span> {title}
        <span className="h-px flex-grow rounded bg-muted-foreground ml-4 md:max-w-80"></span>
      </h4>
      {children}
    </section>
  );
};

export default Section;
