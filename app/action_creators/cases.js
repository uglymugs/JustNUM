import { destroy } from 'redux-form';
import {
  FETCH_CASES_SUCCESS,
  FETCH_CASE_SUCCESS,
  EDIT_CASE_SUCCESS,
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
  dispatch(preventingRace(api.getCaseList(), success));
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
  dispatch(preventingRace(api.getCase(caseId), success));
};

export const editCase = (newCase) => (dispatch) =>
  api.editCase(newCase).then(response =>
      dispatch({
        type: EDIT_CASE_SUCCESS,
        response,
      })
  );

export const createCase = (newCase) => (dispatch) =>
  api.createCase(newCase).then(response =>
      dispatch({
        type: CREATE_CASE_SUCCESS,
        response,
      })
  );
