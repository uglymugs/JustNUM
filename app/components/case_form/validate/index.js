import { compose, evolve, keys, pickAll } from 'ramda';


const validator = {
  caseRef: (caseRef) => {
    if (!caseRef) return 'Required';
    return undefined;
  },
};


const validate =
  compose(
    evolve(validator),
    pickAll(keys(validator)));

export default validate;
