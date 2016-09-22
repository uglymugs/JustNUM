import { connect } from 'react-redux';
import CaseListTable from '../components/case_list/case_list_table';

// mapStateToProps :: State -> { cases: [Case] }
const mapStateToProps = state =>
  ({ cases: state.cases });

// connector :: Function
const connector =
  connect(mapStateToProps);

// ConnectedCaseList :: React.Component
const ConnectedCaseList =
  connector(CaseListTable);

export default ConnectedCaseList;
