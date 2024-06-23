import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const MailSideBar = ({mail}) => {
  return (
    <div className="hidden custom:flex flex-col w-5 px-10 fixed items-center bottom-0 right-0">
            <div className="flex items-center justify-end mb-24 rotate-90 hover:text-primary">
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