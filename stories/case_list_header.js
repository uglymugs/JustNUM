import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseListHeader from '../app/components/case_list_header';

storiesOf('Case List Header', module)
  .add('', () =>
    <MuiThemeProvider>
      <CaseListHeader />
    </MuiThemeProvider>);
