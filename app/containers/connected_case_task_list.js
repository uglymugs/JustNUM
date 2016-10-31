import { connect } from 'react-redux';
import CaseTaskList from '../components/case_task_list';
import * as fromReducers from '../reducers';

const mapStateToProps = (state) =>
  ({
    caseId: fromReducers.getCurrentCase(state).caseId,
    tasks: fromReducers.getCurrentCaseTasks(state) || [],
  });

const ConnectedCaseTaskList =
  connect(mapStateToProps)(CaseTaskList);

export default ConnectedCaseTaskList;
