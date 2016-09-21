import React, { PropTypes } from 'react';

const topBarStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'red',
  height: '100px',
};

const TopBar = ({ styles }) =>
  <div style={Object.assign({}, topBarStyles, styles)}>
    Top Bar
  </div>;

TopBar.propTypes = {
  styles: PropTypes.object,
};

export default TopBar;
