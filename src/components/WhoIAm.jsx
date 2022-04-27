import React from 'react';

const WhoIAm = () => {
  return (
    <section id="who-i-am" className="description-banner-right">
      <h2>Who I Am</h2>
      <p>
        I'm a junior Computer Science &amp; Physics Undergraduate at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://uprrp.edu"
        >
          UPRRP
        </a>
        .
      </p>
      <p>
        I'm also a self-proclaimed soccer fan{' '}
        <span role="img" aria-label="emoji">⚽️</span>,{' '}
        japanophile{' '}
        <span role="img" aria-label="emoji">🇯🇵</span>,{' '}
        musician{' '}
        <span role="img" aria-label="emoji">🎸 🎹</span>{' '}
        and science/math enthusiast from Puerto Rico{' '}
        <span role="img" aria-label="emoji">🇵🇷</span>!
      </p>
    </section>
  );
};

export default WhoIAm;
