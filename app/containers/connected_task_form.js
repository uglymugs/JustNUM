import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import moment from 'moment';
import TaskForm from '../components/task_form';
import createValidate from '../lib/create_validate';
import * as fromReducers from '../reducers';
import * as api from '../api';

const DATE_FORMAT = 'DD/MM/YY';
const DATE_FORMAT_REGEX = /\d{2}\/\d{2}\/\d{2}/;

const deadlineStrToDate = str => moment(str, DATE_FORMAT);
const crntDay = () => moment(moment().toArray().slice(0, 3));

const validate = createValidate({
  taskName(taskName) {
    if (taskName === undefined || taskName === '') return 'Task name required';
    return undefined;
  },

  taskDate(deadline) {
    if (deadline === undefined) return 'Task date required';
    if (!DATE_FORMAT_REGEX.test(deadline)) return 'Invalid date format';
    if (deadlineStrToDate(deadline).isBefore(crntDay())) return 'Date cannot be before today';
    return undefined;
  },
});

const mapStateToProps = (state) =>
  ({
    onSubmit: (task) => {
      const currentCase = fromReducers.getCurrentCase(state);

      api.addTask({
        caseId: currentCase.id,
        deadline: moment(task.taskDate, DATE_FORMAT).unix(),
        description: task.taskName,
      });
    },
  });

// ConnectedTaskForm :: React.Component
const ConnectedTaskForm = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'TaskForm',
    initialValues: {
      taskDate: moment().format(DATE_FORMAT),
    },
    validate,
  }))(TaskForm);

export default ConnectedTaskForm;
