import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaseTextField from '../app/components/case_text_field';

storiesOf('CaseTextField', module)
  .add('simple', () =>
    <MuiThemeProvider>
      <CaseTextField />
    </MuiThemeProvider>);
