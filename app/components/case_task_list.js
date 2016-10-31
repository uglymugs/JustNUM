import React, { PropTypes } from 'react';
import ConnectedEditTaskForm from '../containers/connected_edit_task_form';

const style = {
  // textField: {
  // },
  // addTask: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-end',
  // },
  // button: {
  //   marginBottom: '8px',
  //   marginLeft: '20px',
  // },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const CaseTaskList = ({ tasks }) =>
  <div style={style.taskList}>
    {tasks.map((task, idx) =>
      <ConnectedEditTaskForm key={idx} task={task} />)}
  </div>;

const Task = PropTypes.shape({
  deadline: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  caseRef: PropTypes.string.isRequired,
  caseId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
});

CaseTaskList.propTypes = {
  tasks: PropTypes.arrayOf(Task).isRequired,
};

export default CaseTaskList;
