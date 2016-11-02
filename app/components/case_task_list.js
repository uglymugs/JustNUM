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

const CaseTaskList = ({ tasks, filter, updateCaseTaskFilter }) =>
  <div style={style.taskList}>
    <div>
      <SelectField
        floatingLabelText="Filter"
        value={filter}
        onChange={(e, i, v) => updateCaseTaskFilter(v)}
      >
        <MenuItem value="all" primaryText="All" />
        <MenuItem value="todo" primaryText="To do" />
        <MenuItem value="pending" primaryText="Pending" />
        <MenuItem value="done" primaryText="Done" />
      </SelectField>
    </div>
    {/* <div>
      filter{ }
      <a onClick={() => updateCaseTaskFilter('all')} style={{ cursor: 'pointer' }}>
        all
      </a>{ }
      <a onClick={() => updateCaseTaskFilter('done')} style={{ cursor: 'pointer' }}>
        done
      </a>{ }
      <a onClick={() => updateCaseTaskFilter('todo')} style={{ cursor: 'pointer' }}>
        todo
      </a>{ }
      <a onClick={() => updateCaseTaskFilter('pending')} style={{ cursor: 'pointer' }}>
        pending
      </a>
    </div> */}
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
  filter: PropTypes.string.isRequired,
  updateCaseTaskFilter: PropTypes.func.isRequired,
};

export default CaseTaskList;
