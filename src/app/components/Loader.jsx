"use client";
import { useEffect, useState } from "react";
import "../globals.css";

const Loader = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [containerVisible, setContainerVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTitleVisible(true);
    }, 1500);
    setTimeout(() => {
      setContainerVisible(false);
    }, 2500);
    setTimeout(() => {
      setLoaderVisible(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background ${
        loaderVisible ? "" : "hidden"
      }`}
    >
      <div
        className={`flex justify-center items-center h-screen transition-all duration-500  ${
          containerVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <div
          className={`text-primary font-bold text-4xl ${
            titleVisible
              ? "opacity-100 scale-100 transition-opacity duration-400"
              : "opacity-0 scale-0 transition-opacity duration-400"
          }`}
        >
          E
        </div>

        <div className=" absolute w-[90px] h-[51px] ">
          <div className="w-full h-full relative">
            <span className="absolute left-0 w-[6px] bg-primary animate-loader6"></span>
            <span className="absolute right-0 w-[6px] bg-primary animate-loader3"></span>
          </div>
        </div>

        <div className=" absolute w-[90px] h-[51px] transform rotate-60">
          <div className="w-full h-full relative">
            <span className="absolute left-0 w-[6px] bg-primary animate-loader1"></span>
            <span className="absolute right-0 w-[6px] bg-primary animate-loader4"></span>
          </div>
        </div>

        <div className=" absolute w-[90px] h-[51px]">
          <div className=" w-full h-full relative transform -rotate-60">
            <span className="absolute left-0 w-[6px] bg-primary animate-loader5"></span>
            <span className="absolute right-0 w-[6px] bg-primary animate-loader2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
