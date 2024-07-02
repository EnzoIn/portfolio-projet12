import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const MailSideBar = ({ mail }) => {
  return (
    <div className="animate-sidebar fixed bottom-0 right-0 hidden w-5 flex-col items-center px-10 opacity-0 custom:flex">
      <div className="mb-24 flex rotate-90 items-center justify-end hover:text-primary">
        <Link
          href={`mailto:${mail}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Send an email to ${mail}`}
        >
          <p>{mail}</p>
        </Link>
      </div>
      <div className="h-20 w-px bg-muted-foreground"></div>
    </div>
  );
};

MailSideBar.propTypes = {
  mail: PropTypes.string.isRequired,
};

export default MailSideBar;
