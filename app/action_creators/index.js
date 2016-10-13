import { FETCH_CASES_SUCCESS } from '../action_types';
import * as api from '../api';

export const fetchCases = () => (dispatch) =>
  api.getLastTwentyCases().then(response =>
      dispatch({
        type: FETCH_CASES_SUCCESS,
        response,
      })
  );

export default {};
