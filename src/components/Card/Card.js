import React, { Component } from 'react';
import { fetchMembers } from '../../ApiCalls/fetchMembers';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const Card = (props) => {
  console.log('prop cards', props);
  const { name, founded, seats, titles, coatOfArms, region, ancestralWeapons, swornMembers } = props.house;

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

  const handleClick = async (swornMembers) => {
    const members = await fetchMembers(swornMembers);
    console.log('members', members); 
    if (members.length > 1) {
      this.props.addMembers(members);
    }
  };

  return <div>
    <h2>{name}</h2>
    <p>Founded: {founded}</p>
    <p>seats: {seat}</p>
    <p>titles: {title}</p>
    <p>coatOfArms: {coatOfArms}</p>
    <p>region: {region}</p>
    <p>Ancestral Weapon: {ancestralWeapon}</p>
    <button onClick={() => handleClick({swornMembers})} >See Sworn Members</button>
  </div>;
};

const mapStateToProps = state => ({
  members: state.members
});

const mapDispatchToProps = dispatch => ({
  addMembers: (members) => dispatch(actions.addMembers(members))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);