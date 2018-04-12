import { combineReducers } from 'redux';
import houses from './houseReducer';
import members from './membersReducer';

const rootReducer = combineReducers({
  houses,
  members
});


export default rootReducer;
