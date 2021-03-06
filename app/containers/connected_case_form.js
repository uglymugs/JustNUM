import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { compose, omit } from 'ramda';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import CaseForm from '../components/case_form';
import * as actions from '../action_creators';
import { submitCaseForm } from '../api';
import { isFetchingCases, getCurrentCase } from '../reducers';
import validate, { asyncBlurFields, asyncValidate } from '../form_validators/case';

const mapStateToProps = (state, { params, router }) => {
  const currentCase = getCurrentCase(state);
  const caseRef = params.caseRef;
  let view = params.view;
  let initialValues;
  if (
    (view === 'edit')
    && (Object.keys(currentCase).length > 0)
    && !isFetchingCases(state)
  ) {
    initialValues = omit(['tasks', 'notes'], currentCase);
  }
// ugly way to handle incorrect url paramaters
  if (view !== 'new' && view !== 'edit') view = 'edit';

  return Object.assign({
    view,
    initialValues,
    caseRef,
    router,
  }, (view === 'new' ? { asyncValidate } : {}));
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
    asyncBlurFields,
  })
)(CaseForm);

export default ConnectedCaseForm;
