"use client";

import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div className="bg-primary text-primary rounded inline-flex">
    <button
    className="px-4 py-2 border border-primary bg-background text-primary rounded transition-transform duration-400 ease-in-out transform hover:-translate-x-1 hover:-translate-y-1"
      onClick={onClick}
    >
      {text}
    </button>
    </div>
  );
};

export default Button;
