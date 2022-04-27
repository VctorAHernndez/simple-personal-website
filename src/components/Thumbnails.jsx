import React from 'react';

import cardData from '../data';

import Card from './Card';

const Thumbnails = () => {
  return (
    <section className="thumbnails">
      {cardData.map((card, index) =>
        <Card
          key={index}
          href={card.href}
          src={card.src}
          alt={card.alt}
          description={card.description}
        />  
      )}
    </section>
  );
};

export default Thumbnails;
