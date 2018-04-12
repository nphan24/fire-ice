import { fetchMembers } from './fetchMembers';
import * as mock from '../mockData/mockData';

describe('fetchMembers', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(mock.Members);
        })
    }));
  });

  it('should call fetch with the correct params', () => {
    // const url = `blahblahblah`;
    // expect(fetchMembers).toHaveBeenCalledWith(url);
  });

  it('should return an array of member objects', async () => {
    // const expected = mock.Members;
    // const returnedResponse = await fetchMembers(mock.Members);
    // expect(returnedResponse).toEqual(expected);
  });

  it('should throw an error if the fatch fails', () => {
    // window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.reject({
    //     status: 500,
    //     message: 'error'
    //   })
    // );
    // const expected = Error('error');
    // const result = fetchMembers();
    // expect(result).rejects.toEqual(expected);
  });
});
