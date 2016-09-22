import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const topBarStyles = {
  backgroundColor: '#FEFEFE',
};

const TopAppBar = ({ styles }) =>
  <div style={Object.assign({}, topBarStyles, styles)}>
    <AppBar />
  </div>;

TopAppBar.propTypes = {
  styles: PropTypes.object,
};

export default TopAppBar;
