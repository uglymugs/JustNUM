import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({});


const Main = ({ children }) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
