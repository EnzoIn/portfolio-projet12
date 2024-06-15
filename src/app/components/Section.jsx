const Section = ({ id, number, title, children }) => {
  return (
    <section className="max-w-4xl w-full pt-20" id={id}>
      <h4 className="flex items-center font-bold text-xl md:text-3xl">
        <span className="text-primary font-thin md:text-4xl mr-2">{number}.</span> {title}
        <span className="h-px flex-grow rounded bg-muted-foreground ml-4 md:max-w-80"></span>
      </h4>
      {children}
    </section>
  );
};

export default Section;
