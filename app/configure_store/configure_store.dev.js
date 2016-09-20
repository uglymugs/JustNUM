// NOTE: module only included in development mode, so can use dev-dependencies

import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// eslint-disable-next-line import/no-extraneous-dependencies
import { persistState } from 'redux-devtools';

import rootReducer from '../reducers';
import DevTools from '../containers/dev_tools';

const reducers = {
  rootReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const enhancer = compose(
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

const configureStore = initialState => {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
  }

  return store;
};

export default configureStore;
