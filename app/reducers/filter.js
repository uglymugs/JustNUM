import {
  REQUEST_NEW_CASE_FILTER,
  ACTIVATE_NEW_CASE_FILTER,
} from '../action_types';

const defaults = {
  entered: '',
  activated: '',
};

const filter = (state = defaults, action) => {
  switch (action.type) {
    case REQUEST_NEW_CASE_FILTER:
      return {
        ...state,
        entered: action.filter,
      };
    case ACTIVATE_NEW_CASE_FILTER:
      return {
        ...state,
        activated: action.filter,
      };
    default:
      return state;
  }
};

export default filter;
