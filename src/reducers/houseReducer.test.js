import displayHouses from './houseReducer';
import { addHouses } from '../Actions';

describe('houseReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(displayHouses(undefined, {})).toEqual(expected);
  });

  it('should add houses to state', () => {
    const expected = [{name:'Stark'}];
    const houses = [{ name: 'Stark' }];
    expect(displayHouses(undefined, addHouses(houses))).toEqual(
      expected
    );
  });
});
