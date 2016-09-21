import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf } from '@kadira/storybook';
import { CaseListTableRows } from '../app/components/case_list/case_list_rows';

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

storiesOf('CaseListTableRows', module)
  .add('', () =>

    <MuiThemeProvider>
      <CaseListTableRows tableData={tableData} />
    </MuiThemeProvider>
);
