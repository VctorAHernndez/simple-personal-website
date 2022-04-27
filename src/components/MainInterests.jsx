import React from 'react';

const MainInterests = () => {
  return (
    <section id="main-interests" className="description-banner-right">
      <h2>Main Interests</h2>
      <div className="row">
        <div className="col-left">
          <p>As of late, I've been looking into:</p>
          <ul>
            <li>Database Design</li>
            <li>API Design</li>
            <li>Systems Design</li>
            <li>Networking</li>
            <li>Security</li>
            <li>The Cloud</li>
          </ul>
        </div>
        <div className="col-right">
          <p>
            However, I really like (and have done) machine learning, enjoy front-end work, and have been wanting to do mobile development for the longest time. I've played around with Raspberry Pi's too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainInterests;
