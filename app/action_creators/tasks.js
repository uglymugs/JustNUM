import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
} from '../action_types';

import * as api from '../api';
import { preventingRace } from '../action_creators';


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
  dispatch(preventingRace(api.getTaskList(), success, failure));
};

export const dummy = () => null;
