import Image from "next/image";

const PortraitFrame = () => {
  return (
    <div className="group relative h-40 w-40 md:h-72 md:w-72">
      <div className="h-full w-full translate-x-4 translate-y-4 rounded-lg border-2 border-primary transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
      <div className="absolute left-0 top-0 z-20 h-full w-full rounded-lg bg-primary opacity-40 transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0"></div>
      <Image
        className="absolute left-0 top-0 h-full w-full rounded-lg object-cover grayscale-[100%] filter transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:filter-none"
        src="/images/photo-profil.webp"
        alt="Photo de profil de Enzo Ingraito"
        width={500}
        height={500}
      />
    </div>
  );
};

export default PortraitFrame;
