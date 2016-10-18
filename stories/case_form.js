import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseForm from '../app/components/case_form/';
import configureStore from '../app/configure_store/configure_store.dev';

const store = configureStore();


const wrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

storiesOf('CaseForm', module)
  .addDecorator(getStory =>
    (<Provider store={store}>
      { getStory() }
    </Provider>
    ))
  .add('simple', () =>
    <MuiThemeProvider>
      <div style={wrapperStyles}>
        <CaseForm />
      </div>
    </MuiThemeProvider>);
