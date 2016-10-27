import { combineReducers } from 'redux';
import {
  FETCH_TASKS_SUCCESS,
  START_FETCHING_TASKS,
  STOP_FETCHING_TASKS,
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

const tasks = combineReducers({
  tasksById,
  fetching,
});

export default tasks;

export const getTaskById = (state, id) => state.tasksById[id];
export const isFetching = (state) => state.fetching;
