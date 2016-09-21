import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import LeftNav from './left_nav';
import SideBar from './side_bar';

const appStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'top',
  width: '100%',
  height: '100%',
};

const App = ({ children }) =>
  <div style={{ height: '100%' }}>
    <MuiThemeProvider>
      <div style={appStyles}>
        <SideBar />
        {children}
      </div>
    </MuiThemeProvider>
  </div>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
