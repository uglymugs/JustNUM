import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseReduxForm from './case_redux_form';

const App = () =>
  <MuiThemeProvider>
    <CaseReduxForm />
  </MuiThemeProvider>;

export default App;
