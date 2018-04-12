import React from 'react';

export const Card = (props) => {
  const {name, founded, seats, titles, coastOfArms, region} = props.house;

  console.log('card props', props);
  const eachKey = Object.keys(props.house);

  console.log('keyssss', eachKey);

  const houseInfo = eachKey.map((element, index) => {
    return <p className="card-info" key={index}>
      {element}: {props.house[element]}
    </p>;
  });

  return (
    <div>
      <h2>{name}</h2>
      <p>I'm a card!</p>
    </div>
  );
};