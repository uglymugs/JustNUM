import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, getEnteredTasksFilter } from '../reducers';
import * as actions from '../action_creators';
import TaskTabs from '../components/task_tabs';

class ConnectedTaskTabs extends Component {
  componentDidMount() {
    const { fetchTodo } = this.props;
    fetchTodo();
  }
  render() {
    return (
      <TaskTabs {...this.props} />
    );
  }
}

ConnectedTaskTabs.propTypes = {
  fetchTodo: PropTypes.func.isRequired,
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

ConnectedTaskTabs = connector(ConnectedTaskTabs); // eslint-disable-line no-class-assign

export default ConnectedTaskTabs;
