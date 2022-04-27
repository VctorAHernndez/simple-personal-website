import React from 'react';

const Card = (props) => {
  return (
    <>
      <a className="card" href={props.href}>
        <img src={props.src} alt={props.alt} />
        <h3 className="card-description">{props.description}</h3>
      </a>
    </>
  );
};

export default Card;
