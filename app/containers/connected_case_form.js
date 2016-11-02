import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { compose } from 'ramda';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
import * as actions from '../action_creators';
import { submitCaseForm } from '../api';
import { isFetchingCases, getCurrentCase } from '../reducers';
import validate from '../form_validators/case';

const mapStateToProps = (state, { params }) => {
  const currentCase = getCurrentCase(state);
  let initialValues;
  let caseRef = params.caseRef;
  let view = params.view;
  if (
    (view === 'edit')
    && (Object.keys(currentCase).length > 0)
    && !isFetchingCases(state)
  ) {
    initialValues = currentCase;
    caseRef = currentCase.caseRef;
  }
// ugly way to handle incorrect url paramaters
  if (view !== 'new' && view !== 'edit') view = 'edit';

  return ({
    view,
    initialValues,
    caseRef,
  });
};

const mapDispatchToProps = (dispatch, { params, router }) => ({
  onSubmit: submitCaseForm(params.view),
  onSubmitSuccess: (payload) =>
    dispatch(actions.submitCaseFormSuccess(params.view, router, payload)),
  onSubmitFail: (error) =>
      dispatch(actions.submitCaseFormFailure(params.view, error)),
  fetchCase: (caseRef) => dispatch(actions.fetchCase(caseRef)),
  clearCaseForm: () => dispatch(actions.clearCaseForm()),
});


// connector :: Function
const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

// ConnectedCaseForm :: React.Component
const ConnectedCaseForm = compose(
  withRouter,
  connector,
  muiThemeable(),
  reduxForm({
    form: 'CaseForm',
    validate,
  })
)(CaseForm);

export default ConnectedCaseForm;
