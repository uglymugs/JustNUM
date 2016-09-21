import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CaseList } from '../app/components/case_list/index';

storiesOf('Case List', module)
  .add('', () =>
    <MuiThemeProvider>
      <CaseList />
    </MuiThemeProvider>);
