import {
  FETCH_CASES_SUCCESS,
  EDIT_CASE_SUCCESS,
  CREATE_CASE_SUCCESS,
} from '../action_types';

import * as api from '../api';

export { loginSuccess, loginFailure, authenticateCookie } from './login';

export const fetchCases = () => (dispatch) =>
  api.getLastTwentyCases().then(response =>
      dispatch({
        type: FETCH_CASES_SUCCESS,
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
