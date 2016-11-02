import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import moment from 'moment';
import TaskForm from '../components/task_form';
import * as fromReducers from '../reducers';
import * as actions from '../action_creators';
import * as api from '../api';
import validate from '../form_validators/task';

const DATE_FORMAT = 'DD/MM/YY';

const mapStateToProps = (state) =>
  ({
    onSubmit: ({ deadline, description }) => {
      const currentCase = fromReducers.getCurrentCase(state);
      return api.addTask({
        caseId: currentCase.id,
        caseRef: currentCase.caseRef,
        deadline: moment(deadline, DATE_FORMAT).unix(),
        description,
        status: 'todo',
      });
    },
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseRef));
      dispatch(reset('TaskForm'));
    },
    initialValues: {
      status: 'todo',
      deadline: moment().format(DATE_FORMAT),
    },
    formType: 'add',
  });

// ConnectedNewTaskForm :: React.Component
const ConnectedNewTaskForm = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'TaskForm',
    validate,
  }))(TaskForm);

export default ConnectedNewTaskForm;
