import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseListTable from '../app/components/case_list_table';

storiesOf('Case List Table', module)
  .add('', () =>
    <MuiThemeProvider>
      <CaseListTable />
    </MuiThemeProvider>);
