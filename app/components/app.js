import React, { PropTypes } from 'react';
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
  <div style={appStyles}>
    <LeftNav styles={{ width: '200px', backgroundColor: 'blue' }} />
    {children}
  </div>;

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
