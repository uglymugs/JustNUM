import React, { PropTypes } from 'react';

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
      <div key={idx}>{task.description}, {task.deadline}</div>)}
  </div>;

const Task = PropTypes.shape({
  deadline: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  caseId: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
});

CaseTaskList.propTypes = {
  tasks: PropTypes.arrayOf(Task).isRequired,
};

export default CaseTaskList;
