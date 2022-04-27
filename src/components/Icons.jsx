import React from 'react';

const Icons = () => {
  return (
    <ul className="icons">
      <li>
        <div className="icon-container">
          <a
            className="icon"
            href="https://github.com/VctorAHernndez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-alt" aria-hidden="true" />
          </a>
        </div>
      </li>
      <li>
        <div className="icon-container">
          <a
            className="icon"
            href="https://www.linkedin.com/in/vctorahernndez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </div>
      </li>
      <li>
        <div className="icon-container">
          <a
            className="icon"
            href="mailto:vhernandezcastro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </a>
        </div>
      </li>
      <li>
        <div className="icon-container">
          <a
            className="icon"
            href="https://victors-first-bucket.s3.amazonaws.com/victors-resume-5.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-text-o" aria-hidden="true" />
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Icons;
