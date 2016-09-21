import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left_nav';

const appStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'top',
  border: '1px solid green',
  width: '100vw',
  height: '100vh',
};

const App = ({ children }) =>
  <MuiThemeProvider>
    <div style={appStyles}>
      <LeftNav styles={{ width: '200px', backgroundColor: 'green' }} />
      {children}
    </div>
  </MuiThemeProvider>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
