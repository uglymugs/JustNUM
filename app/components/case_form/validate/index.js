import { compose, evolve, keys, pickAll } from 'ramda';


const validator = {
  caseId: (caseId) => {
    if (!caseId) return 'Required';
    return undefined;
  },
};


const validate =
  compose(
    evolve(validator),
    pickAll(keys(validator)));

export default validate;
