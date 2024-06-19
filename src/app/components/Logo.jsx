import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center group items-center ml-5 relative">
      <div className="text-primary font-bold text-xl">E</div>

      <div className=" absolute w-[50px] h-[28px] ">
        <div className="w-full h-full relative">
          <span className="absolute left-0 w-1 bg-primary h-full"></span>
          <span className="absolute right-0 w-1 bg-primary h-full"></span>
        </div>
      </div>

      <div className=" absolute w-[50px] h-[28px] transform rotate-60">
        <div className="w-full h-full relative">
          <span className="absolute left-0 w-1 bg-primary h-full"></span>
          <span className="absolute right-0 w-1 bg-primary h-full"></span>
        </div>
      </div>

      <div className=" absolute w-[50px] h-[28px]">
        <div className=" w-full h-full relative transform -rotate-60">
          <span className="absolute left-0 w-1 bg-primary h-full"></span>
          <span className="absolute right-0 w-1 bg-primary h-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
