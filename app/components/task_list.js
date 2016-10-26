import React from 'react';
import ConnectedTaskForm from '../containers/connected_task_form';


const style = {
  textField: {
  },
  addTask: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // border: '1px solid red',
  },
  button: {
    marginBottom: '8px',
    marginLeft: '20px',
  },
};

const TaskList = () =>
  <div style={style.addTask}>
    <ConnectedTaskForm />
  </div>;

export default TaskList;
