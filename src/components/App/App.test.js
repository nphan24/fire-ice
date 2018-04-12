// import { App, mapDispatchToProps } from './App';
// import React from 'react';
// import { shallow } from 'enzyme';
// import * as mock from '../../mockData/mockData';
// import * as actions from '../../actions';
// import { fetchHouse } from '../../ApiCalls/fetchHouse';
// jest.mock('../../ApiCalls/fetchHouse');

// describe('App', () => {
//   let wrapper;
//   let addHouses

//   beforeEach(() => {
//     addHouses = jest.fn();
//     wrapper = shallow(
//       <App
//         addHouses={addHouses}
//       />,
//       {
//         disableLifecycleMethods: false
//       }
//     );
//   });

//   it('should match the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('should call fetchHouse', async () => {
//     expect(fetchHouse).toHaveBeenCalled();
//   });

//   it('should call addHouses', async () => {
//     const addhousesSpy = jest.spyOn(wrapper.instance(), 'addHouses');
//     await wrapper.instance().componentDidMount();
//     expect(addhousesSpy).toHaveBeenCalled();
//   });
// });

// describe('mapDispatchToProps', () => {
//   it('should call dispatch with correct params on addHouses', () => {
//     const mockDispatch = jest.fn();
//     const houses = mock.data;
//     const expected = actions.addHouses(houses);
//     const mapped = mapDispatchToProps(mockDispatch);
//     mapped.addHouses(houses);
//     expect(mockDispatch).toHaveBeenCalledWith(expected);
//   });
// });
