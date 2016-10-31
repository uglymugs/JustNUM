import { createStore, applyMiddleware } from 'redux';
// import thunk from  'redux-thunk';
import rootReducer from '../reducers';

// const middleware = [thunk];

const configureStore = (middleware = [], initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;
