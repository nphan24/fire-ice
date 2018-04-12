import { fetchHouse } from './fetchHouse';
import * as mock from '../mockData/mockData';

describe('fetchHouse', () => {

  beforeEach(() => { 
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({
        data: mock.houses
      })
    }));
  });

  it('should fetch with correct params', () => {
    const url =   `https://www.anapioficeandfire.com/api/houses`;

  });

  it('should return an array of house objects', () => {

  });

  it('should throw an error if the fatch fails', () => {

  });
});
