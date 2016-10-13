const CASE_TEMPLATE = {}; // temp
const addCase = (cases, formData, uuid) =>
  [Object.assign({ uuid }, CASE_TEMPLATE, formData), ...cases];

export default addCase;
