import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseForm from './case_form/index';

const App = () =>
  <MuiThemeProvider>
    <CaseForm />
  </MuiThemeProvider>;

export default App;
