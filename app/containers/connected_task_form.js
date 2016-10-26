import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import moment from 'moment';
import TaskForm from '../components/task_form';
import createValidate from '../lib/create_validate';
import * as fromReducers from '../reducers';
import * as api from '../api';

const validate = createValidate({
  taskName(taskName) {
    if (taskName === undefined || taskName === '') return 'Task name required';
    return undefined;
  },

  taskDate(taskDate) {
    if (taskDate === undefined) return 'Task date required';
    if (!/\d{2}\/\d{2}\/\d{2}/.test(taskDate)) return 'Invalid date format';

    const tDate = moment(taskDate, 'DD/MM/YY');
    const crntDate = moment(moment().toArray().slice(0, 3));

    if (tDate.isBefore(crntDate)) return 'Date cannot be before today';
    return undefined;
  },
});

// const onSubmit = (...args) =>
//   console.log('here--->', args);

const mapStateToProps = (state) =>
  ({
    onSubmit: (task) => {
      const { caseId } = fromReducers.getCurrentCase(state);
      const userId = fromReducers.getUserId(state);
      api.addTask(userId, caseId, task);
    },
  });

// ConnectedTaskForm :: React.Component
const ConnectedTaskForm = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'TaskForm',
    initialValues: {
      taskName: 'Make it work dude!',
      taskDate: moment().format('DD/MM/YY'),
    },
    validate,
  }))(TaskForm);

export default ConnectedTaskForm;
