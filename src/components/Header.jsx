import React from 'react';

import Icons from './Icons';

const Header = () => {
  return (
    <header className="topic-banner-wrapper">
      <span className="avatar">
      <img
        src="https://victors-first-bucket.s3.amazonaws.com/avatar.jpg"
        alt="Víctor Hernández"
      />
      </span>
      <h1 className="topic-banner-text">
        よろしく!
        <br />
        The name's Víctor
      </h1>
      <Icons />
    </header>
  );
};

export default Header;
