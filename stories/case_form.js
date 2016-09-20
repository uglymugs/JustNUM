import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseForm from '../app/components/case_form/index';
import configureStore from '../app/configure_store/configure_store.dev';

const store = configureStore();

storiesOf('CaseForm', module)
  .addDecorator(getStory =>
    (<Provider store={store}>
      { getStory() }
    </Provider>
    ))
  .add('simple', () =>
    <MuiThemeProvider>
      <CaseForm />
    </MuiThemeProvider>);
