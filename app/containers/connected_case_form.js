import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
// import { getCaseById } from '../reducers';
import * as actions from '../action_creators';
import { getCurrentCase } from '../reducers';


const mapStateToProps = (state, { params }) => {
  const currentCase = getCurrentCase(state);
  if (
    (params.view === 'edit')
    && (Object.keys(currentCase).length > 0)
    /* && !isFetching() */
  ) {
    const initialValues = currentCase;
    return ({
      view: 'edit',
      initialValues,
      caseId: params.caseId,
    });
  }
  return ({
    view: params.view,
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
