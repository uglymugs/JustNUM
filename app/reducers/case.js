import {
  FETCH_CASE_SUCCESS,
} from '../action_types';

// cases :: [Case] -> Action -> [Case]
const currentCase = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CASE_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default currentCase;

