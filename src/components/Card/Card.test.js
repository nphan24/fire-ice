import { Card } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';

describe('Card', () => {
  let wrapper;
  let house = mock.house

  beforeEach(() => {
    wrapper = shallow(<Card house={house}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});