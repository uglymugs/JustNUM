import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rootReducer from '../reducers';

const reducers = {
  rootReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const configureStore = initialState =>
  createStore(reducer, initialState);

export default configureStore;
