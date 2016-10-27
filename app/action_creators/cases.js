import { destroy } from 'redux-form';
import {
  START_FETCHING_CASES,
  STOP_FETCHING_CASES,
  FETCH_CASES_SUCCESS,
  FETCH_CASE_SUCCESS,
  FETCH_CASE_FAILURE,
  FETCH_CASES_FAILURE,
  EDIT_CASE_SUCCESS,
  EDIT_CASE_FAILURE,
  CREATE_CASE_FAILURE,
  CREATE_CASE_SUCCESS,
  DESELECT_CASE,
} from '../action_types';

import * as api from '../api';
import { preventRace } from '../action_creators';
import { updateActivatedFilter } from './filter';
import { isFetchingCases } from '../reducers';

const setFetchingCases = (bool) => {
  if (bool) return { type: START_FETCHING_CASES };
  return { type: STOP_FETCHING_CASES };
};

export const fetchCases = (filter = '') => (dispatch) => {
  const success = (response) => {
    dispatch({
      type: FETCH_CASES_SUCCESS,
      response,
    });
    dispatch(updateActivatedFilter(filter));
  };
  const failure = (err) => {
    dispatch({
      type: FETCH_CASES_FAILURE,
      err,
    });
  };
  const safeFetch = preventRace(api.getCaseList(filter), isFetchingCases, setFetchingCases);
  dispatch(safeFetch(success, failure));
};

export const clearCaseForm = () => (dispatch) => {
  // for some reason the destroy called automatically does not remove form values
  dispatch(destroy('CaseForm'));
  dispatch({
    type: DESELECT_CASE,
    response: {},
  });
};

export const fetchCase = (caseId) => (dispatch) => {
  dispatch(clearCaseForm());
  const success = (response) => {
    dispatch({
      type: FETCH_CASE_SUCCESS,
      response,
    });
  };
  const failure = (err) => {
    dispatch({
      type: FETCH_CASE_FAILURE,
      err,
    });
  };
  dispatch(api.getCase(caseId).then(success, failure));
};


const editCaseSuccess = (response) => (dispatch) =>
  dispatch({
    type: EDIT_CASE_SUCCESS,
    response,
  });

const editCaseFailure = (error) => (dispatch) =>
  dispatch({
    type: EDIT_CASE_FAILURE,
    error,
  });

const createCaseFailure = (error) => (dispatch) =>
  dispatch({
    type: CREATE_CASE_FAILURE,
    error,
  });

const createCaseSuccess = (response) => (dispatch) =>
  dispatch({
    type: CREATE_CASE_SUCCESS,
    response,
  });

export const submitCaseFormSuccess = (view, router, response) => (dispatch) => {
  if (view === 'edit') dispatch(editCaseSuccess(response));
  if (view === 'new') dispatch(createCaseSuccess(response));
  router.push('/');
};

export const submitCaseFormFailure = (view, error) => (dispatch) => {
  if (view === 'edit') dispatch(editCaseFailure(error));
  if (view === 'new') dispatch(createCaseFailure(error));
};
