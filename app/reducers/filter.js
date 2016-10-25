import { SET_FILTER_ENTERED, SET_FILTER_ACTIVATED } from '../action_types';

const defaults = {
  entered: '',
  activated: '',
};

const filter = (state = defaults, action) => {
  switch (action.type) {
    case SET_FILTER_ENTERED:
      return {
        ...state,
        entered: action.filter,
      };
    case SET_FILTER_ACTIVATED:
      return {
        ...state,
        activated: action.filter,
      };
    default:
      return state;
  }
};

export default filter;
