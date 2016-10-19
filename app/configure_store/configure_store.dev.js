import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { identity } from 'ramda';

// eslint-disable-next-line import/no-extraneous-dependencies
import { persistState } from 'redux-devtools';

import rootReducer from '../reducers';

const middleware = [thunk];

/* eslint-disable no-underscore-dangle */
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;
/* eslint-enable */


const enhancer = compose(
  applyMiddleware(...middleware),
  devToolsEnhancer,
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
  }

  return store;
};

export default configureStore;
