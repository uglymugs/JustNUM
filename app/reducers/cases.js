import { compose, map, toPairs, fromPairs } from 'ramda';
import { ADD_CASE } from '../action_types';

const testCases = [
  { id: '12', name: 'Case A', status: 'active' },
  { id: '13', name: 'Case B', status: 'completed' },
  { id: '14', name: 'Case C', status: 'pending' },
  { id: '15', name: 'Case D', status: 'active' },
  { id: '16', name: 'Case E', status: 'active' },
  { id: '17', name: 'Case F', status: 'active' },
];

const DEFAULT_CASE_DATA = {
  app: false,
  area: null,
  contacts: null,
  db: false,
  email: false,
  caseId: null,
  info: false,
  nc: false,
  notesCreate: null,
  operation: null,
  pc: false,
  police: false,
  referral: null,
  sp: false,
  sms: false,
  timeline: null,
  web: false,
};

const removePrefix = str =>
  str.replace(/^\w+_+/, '');

const removePrefixFromKeys =
  compose(
    fromPairs,
    map(([k, v]) => [removePrefix(k), v]),
    toPairs);

const addCase = (cases, formData, uuid) => {
  const cleansedData = removePrefixFromKeys(formData);
  const newCase = Object.assign({ uuid }, DEFAULT_CASE_DATA, cleansedData);
  return [...cases, newCase];
};


// cases :: [Case] -> Action -> [Case]
const cases = (state = testCases, action) => {
  switch (action.type) {
    case ADD_CASE:
      return addCase(state, action.formData, action.id);
    default:
      return state;
  }
};

export default cases;
