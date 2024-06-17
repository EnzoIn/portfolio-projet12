import React from "react";
import Image from "next/image";

const PortraitFrame = () => {
  return (
    <div className="relative group w-40 h-40 md:w-72 md:h-72">
      <div className="translate-x-4 translate-y-4 border-2 border-primary rounded-lg w-full h-full group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
      <div className="w-full h-full z-20 absolute rounded-lg top-0 left-0 bg-primary opacity-40 group-hover:opacity-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
      </div>
        <Image
          className="rounded-lg filter grayscale-[100%] group-hover:filter-none group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
          src="/images/photo-profil.jpg"
          alt="Photo de profil de Enzo Ingraito"
          layout="fill"
          objectFit="cover"
        />
    </div>
  );
};

export default PortraitFrame;
