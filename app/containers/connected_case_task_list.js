import { connect } from 'react-redux';
import CaseTaskList from '../components/case_task_list';
import * as fromReducers from '../reducers';
import * as fromActions from '../action_creators';

const mapStateToProps = (state) =>
  ({
    // use default [] because component is rendered before current case is received
    tasks: fromReducers.getCurrentCaseTasks(state) || [],
    filter: fromReducers.getCaseTaskFilter(state),
    caseTaskListFilterFn: fromReducers.getCaseTaskFilterFn(state),
  });

const mapDispatchToProps = (dispatch) =>
  ({
    updateCaseTaskFilter: (filter) => dispatch(fromActions.updateCaseTaskFilter(filter)),
  });


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const tasks = stateProps.caseTaskListFilterFn(stateProps.tasks);
  const taskFilter = stateProps.filter;

  return ({
    tasks,
    taskFilter,
    ...dispatchProps,
    ...ownProps,
  });
};

const ConnectedCaseTaskList =
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(CaseTaskList);

export default ConnectedCaseTaskList;
