import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNavBar from '../app/components/side_bar';

storiesOf('SideNavBar', module)
  .add('simple', () =>
    <MuiThemeProvider>
      <SideNavBar />
    </MuiThemeProvider>);
