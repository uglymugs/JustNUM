import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseCheckboxes from '../app/components/case_checkboxes';

storiesOf('CaseCheckboxes', module)
  .add('simple', () =>
    <MuiThemeProvider>
      <CaseCheckboxes />
    </MuiThemeProvider>);
