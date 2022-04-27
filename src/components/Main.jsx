import React from 'react';

import MainInterests from './MainInterests';
import MyTech from './MyTech';
import Thumbnails from './Thumbnails';
import WhatIveDone from './WhatIveDone';
import WhoIAm from './WhoIAm';

const Main = () => {
  return (
    <main id="main">
      <WhoIAm />
      <WhatIveDone />
      <MainInterests />
      <MyTech />
      <div className="topic-banner-wrapper">
        <h1 className="topic-banner-text">
          そして...
          <br />
          Some Projects
        </h1>
      </div>
      <Thumbnails />
    </main>
  );
};

export default Main;
