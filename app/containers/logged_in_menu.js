import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { logout } from '../action_creators';

// eslint-disable-next-line no-shadow
const SimpleLoggedInMenu = ({ logout }) =>
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Sign out" onTouchTap={logout} />
  </IconMenu>;

SimpleLoggedInMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

const LoggedInMenu = connect(null, { logout })(SimpleLoggedInMenu);

export default LoggedInMenu;
