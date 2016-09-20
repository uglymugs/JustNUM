import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseReduxForm from '../app/components/case_redux_form';
import configureStore from '../app/configure_store/configure_store.dev';

const store = configureStore();

storiesOf('CaseReduxForm', module)
  .addDecorator(getStory =>
    (<Provider store={store}>
      { getStory() }
    </Provider>
    ))
  .add('simple', () =>
    <MuiThemeProvider>
      <CaseReduxForm />
    </MuiThemeProvider>);
