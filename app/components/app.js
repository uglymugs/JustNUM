import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import LeftNav from './left_nav';
import SideBar from './side_bar';

const appStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'top',
  border: '1px solid green',
  width: '100%',
  height: '100%',
};

const App = ({ children }) =>
  <MuiThemeProvider>
    <div style={appStyles}>
      <SideBar />
      {children}
    </div>
  </MuiThemeProvider>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
