import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import cases from './cases';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  cases,
  form,
});

export default rootReducer;
