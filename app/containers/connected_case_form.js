import { random } from 'faker';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
import { getCaseById } from '../reducers';
import * as actions from '../action_creators';

const mapStateToProps = (state, { params }) => {
  let initialValues;
  if (params.view === 'new') initialValues = { caseId: random.uuid() };
  if (params.view === 'edit') initialValues = getCaseById(state, params.caseId);
  return ({
    view: params.view,
    initialValues,
  });
};

const getAction = (view) => {
  let action;
  if (view === 'new') action = actions.createCase;
  else if (view === 'edit') action = actions.editCase;
  return action;
};

const mapDispatchToProps = (dispatch, { params, router }) => ({
  submitHandler: (data) =>
    getAction(params.view)(data)(dispatch).then(() => {
      router.push('/');
    }),
});

// connector :: Function
const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

// ConnectedCaseForm :: React.Component
const ConnectedCaseForm =
  withRouter(connector(CaseForm));

export default ConnectedCaseForm;
