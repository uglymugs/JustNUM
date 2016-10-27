import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  START_FETCHING_TASKS,
  STOP_FETCHING_TASKS,
} from '../action_types';
import { isFetchingTasks } from '../reducers';
import * as api from '../api';
import { preventRace } from '../action_creators';

const setFetchingTasks = (bool) => {
  if (bool) return { type: START_FETCHING_TASKS };
  return { type: STOP_FETCHING_TASKS };
};

export const fetchTasks = () => (dispatch) => {
  const success = (response) => {
    dispatch({
      type: FETCH_TASKS_SUCCESS,
      response,
    });
  };
  const failure = (err) => {
    dispatch({
      type: FETCH_TASKS_FAILURE,
      err,
    });
  };
  const safeFetch = preventRace(api.getTaskList(), isFetchingTasks, setFetchingTasks);
  dispatch(safeFetch(success, failure));
};


export const dummy = () => null;
