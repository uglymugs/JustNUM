import { FETCHING } from '../action_types';

const fetching = (state = false, action) => {
  switch (action.type) {
    case FETCHING:
      return action.value;
    default:
      return state;
  }
};

export default fetching;
