import { connect } from 'react-redux';
import CaseEditView from '../components/case_edit_view';

// mapStateToProps :: State -> { cases: [Case] }
const mapStateToProps = state =>
  ({ cases: state.cases });

// connector :: Function
const connector =
  connect(mapStateToProps);

// ConnectedCaseEditView :: React.Component
const ConnectedCaseEditView =
  connector(CaseEditView);

export default ConnectedCaseEditView;
