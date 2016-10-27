import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import TaskListView from '../components/task_list_view';
import * as actions from '../action_creators';
import { getTasks } from '../reducers';

class ConnectedTaskList extends Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <TaskListView tasks={tasks} />
      </div>
    );
  }
}

ConnectedTaskList.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

// mapStateToProps :: State -> { tasks: [Task] }
const mapStateToProps = state => {
  const tasks = getTasks(state);
  return ({
    tasks: Object.keys(tasks)
    .map((id) => tasks[id])
    .filter((task) => !task.done),
  });
};

// connector :: Function
const connector = connect(
  mapStateToProps,
  { fetchTasks: actions.fetchTasks },
);

// ConnectedCaseList :: React.Component
ConnectedTaskList = connector(ConnectedTaskList); // eslint-disable-line no-class-assign

export default ConnectedTaskList;
