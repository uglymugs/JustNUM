import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CaseTaskManager from './case_task_manager';
import CaseNotesManager from './case_notes_manager';

const style = {
  inkBar: {
    marginBottom: '10px',
    backgroundColor: '#AFD1E0',
    height: '3px',
  },
  tabItemContainer: {
    backgroundColor: '#5E7B8D',
  },
};

const CaseTaskNotesManager = () =>
  <Tabs
    inkBarStyle={style.inkBar}
    tabItemContainerStyle={style.tabItemContainer}
  >
    <Tab
      label="Tasks"
    >
      <CaseTaskManager />
    </Tab>
    <Tab
      label="Notes"
    >
      <CaseNotesManager />
    </Tab>
  </Tabs>;

export default CaseTaskNotesManager;
