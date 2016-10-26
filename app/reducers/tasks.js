import {
  FETCH_TASKS_SUCCESS,
} from '../action_types';

// cases :: [Case] -> Action -> [Case]
const tasks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default tasks;
