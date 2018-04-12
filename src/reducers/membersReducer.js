const displayMembers = (state =[], action) => {
  switch (action.type) {
  case 'ADD_MEMBERS':
    return [...state, ...action.members];
  default:
    return state;
  }
}

export default displayMembers;