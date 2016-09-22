import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopAppBar from '../app/components/top_app_bar';


storiesOf('TopAppBar', module)
  .add('simple', () =>
    <MuiThemeProvider>
      <TopAppBar />
    </MuiThemeProvider>);
