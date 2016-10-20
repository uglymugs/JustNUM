import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
import * as actions from '../action_creators';
import { isFetching, getCurrentCase } from '../reducers';


const mapStateToProps = (state, { params }) => {
  let initialValues;
  const currentCase = getCurrentCase(state);
  if (
    (params.view === 'edit')
    && (Object.keys(currentCase).length > 0)
    && !isFetching(state)
  ) initialValues = currentCase;

  return ({
    view: params.view,
    initialValues,
    caseId: params.caseId,
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
  fetchCase: (id) => dispatch(actions.fetchCase(id)),
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
