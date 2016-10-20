import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import LoggedInMenu from '../containers/logged_in_menu';

const topBarStyles = {
  backgroundColor: '#AFD1E0',
};


const TopAppBar = ({ styles }) =>
  <div >
    <AppBar
      style={{ ...topBarStyles, ...styles }}
      showMenuIconButton={false}
      iconElementRight={<LoggedInMenu />}
      className="TopAppBar"
    />
  </div>;

TopAppBar.propTypes = {
  styles: PropTypes.object,
};

export default TopAppBar;
