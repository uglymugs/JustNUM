import { compose, evolve, keys, pickAll } from 'ramda';

// createValidate :: Object -> Object -> Object
const createValidate = (validator) =>
  compose(
    evolve(validator),
    pickAll(keys(validator)));

export default createValidate;
