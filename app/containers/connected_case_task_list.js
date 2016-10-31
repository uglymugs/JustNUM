import { connect } from 'react-redux';
import CaseTaskList from '../components/case_task_list';
import * as fromReducers from '../reducers';

const mapStateToProps = (state) =>
  ({
    // use default [] because component is rendered before current case is received
    tasks: fromReducers.getCurrentCaseTasks(state) || [],
  });

const ConnectedCaseTaskList =
  connect(mapStateToProps)(CaseTaskList);

export default ConnectedCaseTaskList;
