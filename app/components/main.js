import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import SideBar from './side_bar';

const muiTheme = getMuiTheme({});

// {/* <SideBar />
// <div style={{ marginLeft: '280px' }}>
//   {children}
// </div> */}


const Main = ({ children }) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
