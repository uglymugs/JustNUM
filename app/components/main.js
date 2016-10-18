import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SideBar from './side_bar';

const muiTheme = getMuiTheme({});

const Main = ({ children }) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <SideBar />
      <div style={{ marginLeft: '280px' }}>
        {children}
      </div>
    </div>
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
