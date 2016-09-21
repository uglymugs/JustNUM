import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import RouteHandler from '../route_handler';

const Root = ({ store }) =>
  <Provider store={store}>
    <RouteHandler />
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
