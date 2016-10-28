import React, { PropTypes } from 'react';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose, evolve } from 'ramda';
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


const formatDeadlineToUnixTimestamp =
  evolve({
    deadline: (deadline) => moment(deadline, DATE_FORMAT).unix(),
  });

const mapStateToProps = (state) =>
  ({
    onSubmit: compose(api.editTask, formatDeadlineToUnixTimestamp),
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseId));
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
