import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import Home from 'material-ui/svg-icons/action/home';
import Work from 'material-ui/svg-icons/action/work';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Divider from 'material-ui/Divider';

const style = {
  paper: {
    height: '100vh',
    width: '255px',
    backgroundColor: '#5E7B8D',
    display: 'inline-block',
    float: 'left',
    position: 'fixed',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const menuItemStyles = {
  color: 'white',
};

const SideNavBar = () =>

  <div className="sideNavBar">
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Home" style={menuItemStyles} leftIcon={<Home color={white} />} />
        <MenuItem primaryText="Cases" style={menuItemStyles} leftIcon={<Work color={white} />} />
        <Divider style={{ width: '155px' }} />
        <MenuItem
          primaryText="Add Case"
          style={menuItemStyles}
          leftIcon={<NoteAdd color={white} />}
        />
        <Divider />
      </Menu>
    </Paper>
  </div>;

export default SideNavBar;
