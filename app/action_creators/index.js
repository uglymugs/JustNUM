import {
  FETCH_CASES_SUCCESS,
  FETCH_CASE_SUCCESS,
  EDIT_CASE_SUCCESS,
  CREATE_CASE_SUCCESS,
} from '../action_types';

import * as api from '../api';

export const fetchCases = () => (dispatch) =>
  api.getCaseList().then(response =>
      dispatch({
        type: FETCH_CASES_SUCCESS,
        response,
      })
  );

export const fetchCase = (caseId) => (dispatch) =>
  api.getCase(caseId).then(response =>
      dispatch({
        type: FETCH_CASE_SUCCESS,
        response,
      })
  );

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

export default {};
