import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const topBarStyles = {
  backgroundColor: '#AFD1E0',
};

const TopAppBar = ({ styles }) =>
  <div >
    <AppBar
      style={{ ...topBarStyles, ...styles }}
      showMenuIconButton={false}
      iconElementRight={<IconButton><NavigationClose /></IconButton>}
      className="TopAppBar"
    />
  </div>;

TopAppBar.propTypes = {
  styles: PropTypes.object,
};

export default TopAppBar;
