import { filter, identity, equals, compose, prop } from 'ramda';
import {
  UPDATE_CASE_TASK_FILTER,
} from '../action_types';


// statusEquals :: Task -> boolean
const statusEquals = status =>
  compose(equals(status), prop('status'));

const filterFns = {
  all: identity,
  done: filter(statusEquals('done')),
  todo: filter(statusEquals('todo')),
  pending: filter(statusEquals('pending')),
};

// caseTaskFilter :: Object -> Action -> Object
const caseTaskFilter = (state = { filter: 'all' }, action) => {
  switch (action.type) {
    case UPDATE_CASE_TASK_FILTER:
      return { filter: action.filter };
    default:
      return state;
  }
};

export default caseTaskFilter;

export const getFilter = (state) =>
  state.filter;

export const getFilterFn = (state) =>
  filterFns[getFilter(state)];
