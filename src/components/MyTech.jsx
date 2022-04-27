import React from 'react';

const MyTech = () => {
  return (
    <>
      <div className="topic-banner-wrapper">
        <h1 className="topic-banner-text">
          次！
          <br />
          My Tech
        </h1>
      </div>
      <section id="my-tech" className="description-banner-center">
        <h2>I've Worked With...</h2>
        <code>
          HTML, CSS, JavaScript, Sass, jQuery, Bootstrap, React.js, Node.js, PHP, C++, Python, SQL, MySQL, MongoDB, Flask, Express, Heroku, Git, GitHub, Jupyter Lab, Linux, MacOS, YouTube API, etc.
        </code>
        <p>
          Also, I'm currently learning more about AWS, Tensorflow, Numpy, Sklearn, and Angular.
        </p>
        <p>
          I've left some things out, but this wasn't meant to be an exhaustive list anyway...{' '}
          <strong>yet</strong>
          .
        </p>
        <p>
          Bear with me, this page is still a work in progress!
        </p>
      </section>
    </>
  );
};

export default MyTech;
