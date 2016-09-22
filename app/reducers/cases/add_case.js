import CASE_TEMPLATE from './case_template';

const addCase = (cases, formData, uuid) =>
  [Object.assign({ uuid }, CASE_TEMPLATE, formData), ...cases];

export default addCase;
