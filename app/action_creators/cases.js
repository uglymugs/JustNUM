import { destroy } from 'redux-form';
import {
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
import { setFetching } from '../action_creators';
import { isFetching } from '../reducers';

const preventingRace = (apiPromise, success, failure) => (dispatch, getState) => {
  const state = getState();
  if (!isFetching(state)) {
    dispatch(setFetching(true));
    return apiPromise.then((res) => {
      success(res);
      dispatch(setFetching(false));
    }, (err) => {
      failure(err);
      dispatch(setFetching(false));
    });
  }
  return Promise.reject(new Error('Already fetching data'));
};

export const fetchCases = () => (dispatch) => {
  const success = (response) => {
    dispatch({
      type: FETCH_CASES_SUCCESS,
      response,
    });
  };
  const failure = (err) => {
    dispatch({
      type: FETCH_CASES_FAILURE,
      err,
    });
  };
  dispatch(preventingRace(api.getCaseList(), success, failure));
};

export const fetchCase = (caseId) => (dispatch) => {
  // for some reason the destroy called automatically does not remove form values
  dispatch(destroy('CaseForm'));

  dispatch({
    type: DESELECT_CASE,
    response: {},
  });
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
  dispatch(preventingRace(api.getCase(caseId), success, failure));
};


const editCaseSuccess = (response) => (dispatch) =>
  dispatch({
    type: EDIT_CASE_SUCCESS,
    response,
  });

const editCaseFailure = (response) => (dispatch) =>
  dispatch({
    type: EDIT_CASE_FAILURE,
    response,
  });

const createCaseFailure = (response) => (dispatch) =>
  dispatch({
    type: CREATE_CASE_FAILURE,
    response,
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

export const submitCaseFormFailure = (view, response) => (dispatch) => {
  if (view === 'edit') dispatch(editCaseFailure(response));
  if (view === 'new') dispatch(createCaseFailure(response));
};
