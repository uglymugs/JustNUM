import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { getTasks, getEnteredTasksFilter } from '../reducers';
import * as actions from '../action_creators';
import TaskListView from '../components/task_list_view';

const TaskTabs = ({ tasks, fetchTodo, fetchPending, fetchAll }) => (
  <Tabs>
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

const mapStateToProps = state => {
  const tasks = getTasks(state);
  const filter = getEnteredTasksFilter(state);
  return ({
    tasks: Object.keys(tasks)
    .map((id) => tasks[id])
    .filter((task) => !filter.length || task.status === filter),
  });
};

const fetchTodo = () =>
  actions.updateEnteredTasksFilter('todo');

const fetchPending = () =>
  actions.updateEnteredTasksFilter('pending');

const fetchAll = () =>
  actions.updateEnteredTasksFilter('');

// connector :: Function
const connector = connect(
  mapStateToProps,
  {
    fetchTodo,
    fetchPending,
    fetchAll,
  },
);

const ConnectedTaskTabs = connector(TaskTabs);


export default ConnectedTaskTabs;
