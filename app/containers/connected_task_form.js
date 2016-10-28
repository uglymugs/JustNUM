import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import moment from 'moment';
import TaskForm from '../components/task_form';
import createValidate from '../lib/create_validate';
import * as fromReducers from '../reducers';
import * as actions from '../action_creators';
import * as api from '../api';

const DATE_FORMAT = 'DD/MM/YY';
const DATE_FORMAT_REGEX = /\d{2}\/\d{2}\/\d{2}/;

const deadlineStrToDate = str => moment(str, DATE_FORMAT);
const crntDay = () => moment(moment().toArray().slice(0, 3));

const validate = createValidate({
  description(description) {
    if (description === undefined || description === '') return 'Description required';
    return undefined;
  },

  deadline(deadline) {
    if (deadline === undefined) return 'Task date required';
    if (!DATE_FORMAT_REGEX.test(deadline)) return 'Invalid date format';
    if (deadlineStrToDate(deadline).isBefore(crntDay())) return 'Date cannot be before today';
    return undefined;
  },
});

const mapStateToProps = (state) =>
  ({
    onSubmit: ({ deadline, description }) => {
      const currentCase = fromReducers.getCurrentCase(state);

      return api.addTask({
        caseId: currentCase.id,
        deadline: moment(deadline, DATE_FORMAT).unix(),
        description,
      });
    },
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseId));
      dispatch(reset('TaskForm'));
    },
    initialValues: {
      deadline: moment().format(DATE_FORMAT),
    },
  });

// ConnectedTaskForm :: React.Component
const ConnectedTaskForm = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'TaskForm',
    initialValues: {
      deadline: moment().format(DATE_FORMAT),
      description: '',
    },
    validate,
  }))(TaskForm);

export default ConnectedTaskForm;
