import React from 'react';
import ConnectedCaseTaskList from '../containers/connected_case_task_list';
import ConnectedNewTaskForm from '../containers/connected_new_task_form';


const CaseTaskManager = () =>
  <div>
    <ConnectedNewTaskForm />
    <ConnectedCaseTaskList />
  </div>;

export default CaseTaskManager;
