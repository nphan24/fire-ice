import displayMembers from './houseReducer';
import { addMembers } from '../Actions';

describe('membersReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(displayMembers(undefined, {})).toEqual(expected);
  });

  // it('should add members to state', () => {
  //   const expected = [{ name: 'Stark' }];
  //   const members = [{ name: 'Stark' }];
  //   expect(displayMembers(undefined, addMembers(members))).toEqual(expected);
  // });
});
