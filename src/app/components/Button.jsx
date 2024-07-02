"use client";

import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <div className="inline-flex rounded bg-primary text-primary">
      <button
        className="duration-400 transform rounded border border-primary bg-background px-4 py-2 text-primary transition-transform ease-in-out hover:-translate-x-1 hover:-translate-y-1"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
