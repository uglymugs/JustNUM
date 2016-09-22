import { compose, map, toPairs, fromPairs } from 'ramda';
import CASE_TEMPLATE from './case_template';

const removePrefix = str =>
  str.replace(/^\w+_+/, '');

const removePrefixFromKeys =
  compose(
    fromPairs,
    map(([k, v]) => [removePrefix(k), v]),
    toPairs);

const addCase = (cases, formData, uuid) => {
  const cleansedData = removePrefixFromKeys(formData);
  const newCase = Object.assign({ uuid }, CASE_TEMPLATE, cleansedData);
  return [newCase, ...cases];
};

export default addCase;
