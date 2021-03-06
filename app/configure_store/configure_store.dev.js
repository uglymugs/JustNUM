import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { identity } from 'ramda';

import rootReducer from '../reducers';

// const middleware = [thunk];

/* eslint-disable no-underscore-dangle */
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;
/* eslint-enable */


const enhancer = (middleware) =>
  compose(
    applyMiddleware(...middleware),
    devToolsEnhancer);

const configureStore = (middleware = [], initialState) => {
  const store = createStore(rootReducer, initialState, enhancer(middleware));

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
  }

  return store;
};

export default configureStore;
