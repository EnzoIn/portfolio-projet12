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
        className={`flex h-screen items-center justify-center transition-all duration-500 ${
          containerVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div
          className={`text-4xl font-bold text-primary ${
            titleVisible
              ? "duration-400 scale-100 opacity-100 transition-opacity"
              : "duration-400 scale-0 opacity-0 transition-opacity"
          }`}
        >
          E
        </div>

        <div className="absolute h-[51px] w-[90px]">
          <div className="relative h-full w-full">
            <span className="animate-loader6 absolute left-0 w-[6px] bg-primary"></span>
            <span className="animate-loader3 absolute right-0 w-[6px] bg-primary"></span>
          </div>
        </div>

        <div className="rotate-60 absolute h-[51px] w-[90px] transform">
          <div className="relative h-full w-full">
            <span className="animate-loader1 absolute left-0 w-[6px] bg-primary"></span>
            <span className="animate-loader4 absolute right-0 w-[6px] bg-primary"></span>
          </div>
        </div>

        <div className="absolute h-[51px] w-[90px]">
          <div className="-rotate-60 relative h-full w-full transform">
            <span className="animate-loader5 absolute left-0 w-[6px] bg-primary"></span>
            <span className="animate-loader2 absolute right-0 w-[6px] bg-primary"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
