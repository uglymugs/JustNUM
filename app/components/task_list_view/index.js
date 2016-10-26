import React, { PropTypes } from 'react';
import Task from './task';

const TaskListView = ({ tasks }) => (
  <div>
    {tasks.map((task, idx) =>
      <Task key={idx} {...task} />)}
  </div>
);

TaskListView.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskListView;
