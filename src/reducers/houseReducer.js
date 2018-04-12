const displayHouses = (state=[], action) => {
  switch (action.type) {
  case 'ADD_HOUSES':
    return [...action.house];
  default:
    return state;
  }
};

export default displayHouses;
