import {
  ACTIVATE_NEW_CASE_FILTER,
  REQUEST_NEW_CASE_FILTER,
  ACTIVATE_NEW_TASK_FILTER,
  REQUEST_NEW_TASK_FILTER,
  UPDATE_CASE_TASK_FILTER,
} from '../action_types';

import { getEnteredCasesFilter, getEnteredTasksFilter } from '../reducers';
import { fetchCases } from './cases';
import { fetchTasks } from './tasks';

const minSearchTermLength = 3;

export const updateActivatedCasesFilter = (newFilter) => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_NEW_CASE_FILTER,
    filter: newFilter,
  });
  const enteredFilter = getEnteredCasesFilter(getState());
  if (enteredFilter !== newFilter &&
    enteredFilter.length >= minSearchTermLength) dispatch(fetchCases(enteredFilter));
};

export const updateEnteredCasesFilter = (newFilter) => (dispatch) => {
  dispatch({
    type: REQUEST_NEW_CASE_FILTER,
    filter: newFilter,
  });
  if (newFilter.length >= minSearchTermLength) {
    dispatch(fetchCases(newFilter));
  }
};

export const updateEnteredTasksFilter = (newFilter) => (dispatch) => {
  dispatch({
    type: REQUEST_NEW_TASK_FILTER,
    filter: newFilter,
  });
  dispatch(fetchTasks(newFilter));
};

export const updateActivatedTasksFilter = (newFilter) => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_NEW_TASK_FILTER,
    filter: newFilter,
  });
  const enteredFilter = getEnteredTasksFilter(getState());
  if (enteredFilter !== newFilter) dispatch(fetchTasks(enteredFilter));
};

export const updateCaseTaskFilter = (filter) =>
  ({
    type: UPDATE_CASE_TASK_FILTER,
    filter,
  });
