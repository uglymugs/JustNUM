import { combineReducers } from 'redux';
import {
  FETCH_TASKS_SUCCESS,
  START_FETCHING_TASKS,
  STOP_FETCHING_TASKS,
  REQUEST_NEW_TASK_FILTER,
  ACTIVATE_NEW_TASK_FILTER,
} from '../action_types';

const fetching = (state = false, action) => {
  switch (action.type) {
    case START_FETCHING_TASKS:
      return true;
    case STOP_FETCHING_TASKS:
      return false;
    default:
      return state;
  }
};
// cases :: [Case] -> Action -> [Case]
const tasksById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

const filterDefaults = {
  entered: 'todo',
  activated: 'todo',
};

const filter = (state = filterDefaults, action) => {
  switch (action.type) {
    case REQUEST_NEW_TASK_FILTER:
      return {
        ...state,
        entered: action.filter,
      };
    case ACTIVATE_NEW_TASK_FILTER:
      return {
        ...state,
        activated: action.filter,
      };
    default:
      return state;
  }
};

const tasks = combineReducers({
  tasksById,
  fetching,
  filter,
});

export default tasks;

export const getTaskById = (state, id) => state.tasksById[id];
export const isFetching = (state) => state.fetching;
export const getEnteredFilter = (state) => state.filter.entered;
export const getActivatedFilter = (state) => state.filter.activated;
