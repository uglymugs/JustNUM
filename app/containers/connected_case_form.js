import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
import * as actions from '../action_creators';
import submitCaseForm from '../api';
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

const mapDispatchToProps = (dispatch, { params, router }) => ({
  onSubmit: submitCaseForm(params.view),
  onSubmitSuccess: (payload) =>
    dispatch(actions.submitCaseFormSuccess(params.view, router, payload)),
  onSubmitFail: (error) =>
      dispatch(actions.submitCaseFormFailure(params.view, error)),
  fetchCase: (id) => dispatch(actions.fetchCase(id)),
});


// connector :: Function
const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

// ConnectedCaseForm :: React.Component
const ConnectedCaseForm =
  withRouter(
    connector(
      reduxForm({
        form: 'CaseForm',
        // validate,
      })(CaseForm)
    )
  );

export default ConnectedCaseForm;
