import React, { PropTypes } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose, evolve } from 'ramda';
import moment from 'moment';
import TaskForm from '../components/task_form';
import * as fromReducers from '../reducers';
import * as actions from '../action_creators';
import * as api from '../api';
import validate from '../form_validators/task.js';

const DATE_FORMAT = 'DD/MM/YY';
const formatDeadlineToUnixTimestamp =
  evolve({
    deadline: (deadline) => moment(deadline, DATE_FORMAT).unix(),
  });


const mapStateToProps = (state) =>
  ({
    onSubmit: compose(api.editTask, formatDeadlineToUnixTimestamp),
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseRef));
      dispatch(reset('TaskForm'));
    },
    formType: 'edit',
  });


const deadlineToString =
  evolve({
    deadline(deadline) {
      return moment.unix(deadline).format(DATE_FORMAT);
    },
  });


// ConnectedEditTaskForm :: React.Component
const ConnectedEditTaskForm = ({ task }) => {
  const Component = compose(
    connect(mapStateToProps),
    reduxForm({
      form: `EditTaskForm_${task.id}`,
      initialValues: deadlineToString(task),
      validate,
    }))(TaskForm);

  return <Component />;
};

ConnectedEditTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
};

export default ConnectedEditTaskForm;
