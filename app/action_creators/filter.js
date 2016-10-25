import {
  SET_FILTER_ENTERED,
  SET_FILTER_ACTIVATED,
} from '../action_types';

import { getEnteredFilter } from '../reducers';
import { fetchCases } from './cases';

const minSearchTermLength = 3;

export const updateActivatedFilter = (newFilter) => (dispatch, getState) => {
  dispatch({
    type: SET_FILTER_ACTIVATED,
    filter: newFilter,
  });
  const enteredFilter = getEnteredFilter(getState());
  if (enteredFilter !== newFilter &&
    enteredFilter.length >= minSearchTermLength) dispatch(fetchCases(enteredFilter));
};

export const updateEnteredFilter = (newFilter) => (dispatch) => {
  dispatch({
    type: SET_FILTER_ENTERED,
    filter: newFilter,
  });
  if (newFilter.length >= minSearchTermLength) {
    dispatch(fetchCases(newFilter));
  }
};

