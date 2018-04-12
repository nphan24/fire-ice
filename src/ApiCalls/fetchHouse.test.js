import { fetchHouse } from './fetchHouse';
import * as mock from '../mockData/mockData';

describe('fetchHouse', () => {

  beforeEach(() => { 
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise(resolve => {
        resolve(mock.houses);
      })
    }));
  });

  it('should return an array of house objects', async () => {
    const expected = mock.houses;
    const returnedResponse = await fetchHouse();
    expect(returnedResponse).toEqual(expected);
  });

  it('should throw an error if the fatch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 500,
        message: 'error'
      }));
    const expected = Error('error');
    const result = fetchHouse();
    expect(result).rejects.toEqual(expected);
  });
});
