import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import RouteHandler from '../route_handler';
import DevTools from '../../containers/dev_tools';

const Root = ({ store }) =>
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <RouteHandler />
      <DevTools />
    </div>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
