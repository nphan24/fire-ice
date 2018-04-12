import * as actions from '../actions';

describe('addHouses', () => {
  it('creates a type of ADD_HOUSES', () => {

    const houses = [{name:'Ngoc'}, {name:'Weston'}];
    const expected = {
      type: 'ADD_HOUSES',
      houses
    };
    expect(actions.addHouses(houses)).toEqual(expected);
  });
});

describe('addMembers', () => {
  it('creates a type of ADD_MEMBERS', () => {
    const members = [{ name: 'Ngoc' }, { name: 'Weston' }];
    const expected = {
      type: 'ADD_MEMBERS',
      members
    };
    expect(actions.addMembers(members)).toEqual(expected);
  });
});