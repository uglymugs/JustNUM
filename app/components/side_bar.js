import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import Home from 'material-ui/svg-icons/action/home';
import Work from 'material-ui/svg-icons/action/work';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';


const style = {
  paper: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '280px',
    backgroundColor: '#5E7B8D',
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
  <Paper style={style.paper}>
    <Menu>
      <div className="SideNavBar__header">
        <img src="logo_sml.png" role="presentation" />
        <h1>JustNUM</h1>
      </div>
      <MenuItem
        primaryText="Home"
        style={menuItemStyles}
        leftIcon={<Home color={white} />}
        containerElement={<Link to="/" />}
      />
      <MenuItem
        primaryText="Cases"
        style={menuItemStyles}
        leftIcon={<Work color={white} />}
        containerElement={<Link to="/authenticated/cases" />}
      />
      <Divider />
      <MenuItem
        primaryText="Add Case"
        style={menuItemStyles}
        leftIcon={<NoteAdd color={white} />}
        containerElement={<Link to="/authenticated/cases/new" />}
      />
      <Divider />
    </Menu>
  </Paper>;

export default SideNavBar;
