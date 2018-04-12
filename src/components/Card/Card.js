import React from 'react';

export const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, region, ancestralWeapons } = props.house;

  const seat = seats.map(seat => {
    if (seat === '') {
      return 'NA';
    } else {
      return seat;
    }
  });

  const title = titles.map(title => {
    if (title === '') {
      return 'NA';
    } else {
      return title;
    }
  });

  const ancestralWeapon = ancestralWeapons.map(weapon => {
    if (title === '') {
      return 'NA';
    } else {
      return weapon;
    }
  });

  return <div>
    <h2>{name}</h2>
    <p>Founded: {founded}</p>
    <p>seats: {seat}</p>
    <p>titles: {title}</p>
    <p>coatOfArms: {coatOfArms}</p>
    <p>region: {region}</p>
    <p>Ancestral Weapon: {ancestralWeapon}</p>
  </div>;
};