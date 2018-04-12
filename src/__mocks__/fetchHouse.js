export const fetchData = jest.fn().mockImplementation(() => ({
  status: 200,
  json: () =>
    new Promise(resolve => {
      resolve('data');
    })
}));
