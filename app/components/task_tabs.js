import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import TaskListView from '../components/task_list_view';

const TaskTabs = ({ tasks, fetchTodo, fetchPending, fetchAll }) => (
  <Tabs
    inkBarStyle={{
      marginBottom: '10px',
      backgroundColor: '#AFD1E0',
      height: '3px',
    }}
    tabItemContainerStyle={{
      backgroundColor: '#5E7B8D',
    }}
  >
    <Tab
      label="To do"
      onActive={fetchTodo}
    >
      <TaskListView tasks={tasks} />
    </Tab>
    <Tab
      label="Pending"
      onActive={fetchPending}
    >
      <TaskListView tasks={tasks} />
    </Tab>
    <Tab
      label="All"
      onActive={fetchAll}
    >
      <TaskListView tasks={tasks} />
    </Tab>
  </Tabs>
);

TaskTabs.propTypes = {
  fetchTodo: PropTypes.func.isRequired,
  fetchPending: PropTypes.func.isRequired,
  fetchAll: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TaskTabs;
