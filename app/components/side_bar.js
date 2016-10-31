import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import AssignmentLate from 'material-ui/svg-icons/action/assignment-late';
import Work from 'material-ui/svg-icons/action/work';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';


const style = {
  paper: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    height: '100%',
    width: '200px',
    backgroundColor: '#5E7B8D',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  header: {
    display: 'flex',
    marginLeft: '10px',
    marginBottom: '5px',
  },
  headerImg: {
    marginTop: '5px',
    width: '54px',
    height: '54px',
  },
  headerText: {
    color: 'white',
    marginLeft: '8px',
    fontSize: '1.6em',
  },
};

const menuItemStyles = {
  color: 'white',
};

const SideBar = () =>
  <Paper style={style.paper}>
    <div style={style.header}>
      <img src="logo_sml.png" role="presentation" style={style.headerImg} />
      <h1 style={style.headerText}>JustNUM</h1>
    </div>
    <Menu>
      <MenuItem
        primaryText="Tasks"
        style={menuItemStyles}
        leftIcon={<AssignmentLate color={white} />}
        containerElement={<Link to="/authenticated/tasks" />}
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

export default SideBar;
