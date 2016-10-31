import {
  FETCH_CASE_SUCCESS,
  DESELECT_CASE,
} from '../action_types';

// cases :: [Case] -> Action -> [Case]
const currentCase = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CASE_SUCCESS:
      return action.response;
    case DESELECT_CASE:
      return action.response;
    default:
      return state;
  }
};

export default currentCase;

export const getTasks = (state) =>
  state.tasks;

export const getNotes = (state) =>
  state.notes;
