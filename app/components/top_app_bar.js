import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const topBarStyles = {
  backgroundColor: '#AFD1E0',
};

const TopAppBar = ({ styles }) =>
  <div >
    <AppBar
      style={Object.assign({}, topBarStyles, styles)}
      showMenuIconButton={false}
      className="TopAppBar"
    >
      <img className="TopAppBar__avatar" src="public/avatar.png" role="presentation" />
    </AppBar>
  </div>;

TopAppBar.propTypes = {
  styles: PropTypes.object,
};

export default TopAppBar;
