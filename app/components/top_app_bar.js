import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import LoggedInMenu from '../containers/logged_in_menu';

const topBarStyles = {
  backgroundColor: '#AFD1E0',
};


const TopAppBar = ({ style }) =>
  <div >
    <AppBar
      style={{ ...topBarStyles, ...style }}
      showMenuIconButton={false}
      iconElementRight={<LoggedInMenu />}
      className="TopAppBar"
    />
  </div>;

TopAppBar.propTypes = {
  style: PropTypes.object,
};

export default TopAppBar;
