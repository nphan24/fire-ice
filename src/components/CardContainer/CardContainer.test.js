import React from 'react';
import { CardContainer, mapStateToProps} from './CardContainer';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';

describe('CardContainer', () => {
  let wrapper
  let mockhouses = mock.data;

  beforeEach(() => {
    wrapper.shallow(<CardContainer 
      houses={mockhouses}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('correctly maps houses to props ', () => {
    const houses = mock.houses;
    const expected = houses;
    const mockState = { houses };
    const mapped = mapStateToProps(mockState);
    expect(mapped.houses).toEqual(expected);
  });
});