import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { logout } from '../action_creators';
import { getFirstName, getLastName } from '../reducers';

// eslint-disable-next-line no-shadow
const SimpleLoggedInMenu = ({ name, logout }) =>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ color: 'grey' }}>
      { `Signed in as ${name}`}
    </div>
    <IconMenu
      iconButtonElement={<IconButton><ExitToApp /></IconButton>}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      iconStyle={{ color: 'grey' }}
    >
      <MenuItem primaryText="Sign out" onTouchTap={logout} />
    </IconMenu>
  </div>;

SimpleLoggedInMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: `${getFirstName(state)} ${getLastName(state)}`,
});

const LoggedInMenu = connect(mapStateToProps, { logout })(SimpleLoggedInMenu);

export default LoggedInMenu;
