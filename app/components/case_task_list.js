import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ConnectedEditTaskForm from '../containers/connected_edit_task_form';


const style = {
  taskList: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const CaseTaskList = ({ tasks, taskFilter, updateCaseTaskFilter }) =>
  <div style={style.taskList}>
    <div>
      <SelectField
        floatingLabelText="Filter"
        value={taskFilter}
        onChange={(e, i, v) => updateCaseTaskFilter(v)}
      >
        <MenuItem value="all" primaryText="All" />
        <MenuItem value="todo" primaryText="To do" />
        <MenuItem value="pending" primaryText="Pending" />
        <MenuItem value="done" primaryText="Done" />
      </SelectField>
    </div>
    {tasks.map((task) =>
      <ConnectedEditTaskForm key={task.id} task={task} />)}
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
  taskFilter: PropTypes.string.isRequired,
  updateCaseTaskFilter: PropTypes.func.isRequired,
};

export default CaseTaskList;
